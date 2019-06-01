from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseBadRequest
from django.shortcuts import get_object_or_404

from Archive.models import Archive
from Review.models import Review
from users.models import CustomUser
from .serializers import ReviewSerializer
from Archive.serializers import ArchiveSerializer
from users.serializers import UserSerializer

from Review.permissions import UserOnlyAccess,IsOwnerOrReadOnly


# post : review를 create한다.
class ReviewPostView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = ReviewSerializer
    # db 최적화 (query 요청을 최소화 하기 위한 과정) 8 -> 4
    queryset = Review.objects.select_related('archive').select_related('archive__user').all()

    def perform_create(self, serializer):
        serializer.save(archive = self.request.user.archive)

# get : 특정한 review의 상세 정보를 get한다.
# put : 특정한 review를 update한다.
# delete : 특정한 review를 destroy한다.
class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    # db 최적화 (query 요청을 최소화 하기 위한 과정)
    queryset = Review.objects.select_related('archive').select_related('archive__user').all()
    serializer_class = ReviewSerializer

    def get(self, request, *args, **kwargs):
        review = self.queryset.get(id = kwargs['pk'])
        review.hits += 1
        review.save()

        serializer = ReviewSerializer(review)
        return Response(serializer.data)

# get : review list를 get 한다. archive에 저장된 sort option에 따라 정렬된 list를 가져오며, 본인의 review일 경우에만 publicStatus가 false인 review를 가져갈 수 있다.
class ReviewListView(APIView):
    def get(self, request, *args, **kwargs) :
        # username에 대응되는 유저를 찾고 그 유저의 archive를 get한다.
        # prefetch_related 의 경우 뒤에서 order_by와 filter를 사용하기 때문에 query를 다시 호출하게 되어서 제외하였다.
        user = get_object_or_404(CustomUser.objects.select_related('archive'), username = kwargs['username'])
        archive = user.archive

        # archive의 review들을 get 한다.
        # 본인의 review일 경우 모든 review를 get한다.
        if request.user == user :
            reviewSet = archive.reviews.all().order_by(archive.sortOption)
        # 다른 사람의 review일 경우 public한 review만 get한다.
        else :
            queryset = archive.reviews.filter(publicStatus = True).order_by(archive.sortOption)

        serializer = ReviewSerializer(reviewSet, many = True)
        return Response(serializer.data)

# get : 정렬된 review list를 get한다. 추가로 저장된 sort option을 입력된 sortopt 값으로 update한다.
class SortedReviewListView(APIView):
    def get(self, request, *args, **kwargs):
        # username에 대응되는 유저를 찾고 그 유저의 archive를 get한다.
        user = get_object_or_404(CustomUser.objects.select_related('archive'), username = kwargs['username'])
        archive = user.archive
        if request.user == user:
            # 정렬된 review set을 db에서 읽어온다.
            reviewSet = archive.reviews.all().order_by(kwargs['sortopt'])

            # 아카이브의 sortOption과 입력 받은 sortopt가 다를 경우 업데이트 한다. ( - 업데이트 query는 비싸기 때문에 바뀔때만 업데이트 해준다)
            if archive.sortOption != kwargs['sortopt']:
                archive.sortOption = kwargs['sortopt']
                archive.save()

            serializer = ReviewSerializer(reviewSet, many = True)
            return Response(serializer.data)

        reviewSet = archive.reviews.filter(publicStatus = True).order_by(kwargs['sortopt'])
        serializer = ReviewSerializer(queryset, many = True)
        return Response(serializer.data)

# username과 유사한 이름을 가지는 유저들의 대표 리뷰(조회수가 가장 높은 리뷰)를 가져온다.
class PopularReviewListView(APIView):
    def get(self, request, *args, **kwargs):
        archives = Archive.objects.filter(user__username__iregex = r'.*%s.*' % kwargs['username'])
        review_list = []
        for archive in archives:
            review = archive.reviews.filter(publicStatus = True).order_by('-hits').first()
            review_list.append(review)

        serializer = ReviewSerializer(review_list, many = True)
        return Response(serializer.data)
