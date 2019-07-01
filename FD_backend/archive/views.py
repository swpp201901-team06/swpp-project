from rest_framework import generics, permissions
from rest_framework.views import APIView
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from django.db.models import F

from .models import Archive
from .models import GuestComment
from .models import ArchiveVisitorIP
from .serializers import ArchiveSerializer
from .serializers import GuestCommentSerializer
from .serializers import ArchiveVisitorIPSerailizer

from user.models import CustomUser
from .permissions import UserOnlyAccess

from ipware.ip import get_ip



# get : archive list를 가져온다.(디버깅 용으로 사용됨)
# post : 아카이브를 create함(최초 1번만 가능)
class ArchiveListView(generics.ListCreateAPIView):
    queryset = Archive.objects.select_related('user').all()
    serializer_class = ArchiveSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

# get : archive의 visitor count를 get하면서 1을 증가시킨다.
# ToDo : 동일 접속자에 대해 하루에 한번만 오르도록 하기 위해 session이나 ip를 체크하자
class ArchiveVisitorIncreaseView(APIView):
    def get(self, request, username):
        user = get_object_or_404(CustomUser.objects.select_related('archive').prefetch_related('archive__ip_list'), username = username)
        archive = user.archive
        ip = get_ip(request)
        if ip is not None:
            check_ip = archive.ip_list.filter(archive=archive, ip=ip)
            if not check_ip.exists():
                new_ip = ArchiveVisitorIP.objects.create(archive=archive, ip=ip)
                new_ip.save()
                archive.visitor_count += 1
                archive.save()
        else:
            print("error in archive visitor increase view - there is no ip")

        serializer = ArchiveSerializer(archive)
        return Response(serializer.data)

class ArchiveRankingView(APIView):
    def get(self, request, *args, **kwargs):
        archive_set = Archive.objects.select_related('user').all().order_by('-visitor_count')
        serializer = ArchiveSerializer(archive_set[:3], many = True)
        return Response(serializer.data)



# for debugging
class DeleteAllIP(APIView):
    def get(self, request, *args, **kwargs):
        queryset = ArchiveVisitorIP.objects.all()
        serializer = ArchiveVisitorIPSerailizer(queryset, many=True)
        data = serializer.data
        queryset.delete()
        return Response(data)

# for debugging
class ArchiveVisitorIPCheckView(generics.ListCreateAPIView):
    queryset = ArchiveVisitorIP.objects.all()
    serializer_class = ArchiveVisitorIPSerailizer

# for debugging
class ArchiveVisitorIPDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ArchiveVisitorIP.objects.all()
    serializer_class = ArchiveVisitorIPSerailizer

# for test
class ForceVisitorIncreaseView(APIView):
    def get(self,request, username):
        user = get_object_or_404(CustomUser.objects.select_related('archive'), username = username)
        archive = user.archive
        archive.visitor_count += 1

        serializer_class = ArchiveSerializer
        serializer = serializer_class(archive)
        archive.save()

        return Response(serializer.data)


#GuestComment : 아직 구현되지 않음
class GuestCommentListView(generics.ListCreateAPIView):
    queryset = GuestComment.objects.all()
    serializer_class = GuestCommentSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)


class GuestCommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = GuestComment.objects.all()
    serializer_class = GuestCommentSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      UserOnlyAccess,)
