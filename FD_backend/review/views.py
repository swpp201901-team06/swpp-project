from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseBadRequest
from django.shortcuts import get_object_or_404

from archive.models import Archive
from .models import Review
from .models import ReviewIP
from user.models import CustomUser
from .serializers import ReviewSerializer
from .serializers import ReviewIPSerializer

from archive.serializers import ArchiveSerializer
from user.serializers import UserSerializer

from .permissions import IsOwnerOrReadOnly
from ipware.ip import get_ip


# get : 전체 review list를 가져옴(디버깅용, 추후 삭제할 예정)
# post : review를 create한다.
class ReviewCreateListView(generics.ListCreateAPIView):
    # 로그인한 유저만 리뷰를 post할 수 있음
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
    # Review가 publicStatus이면 Get 요청은 모두 수락, 그 외의 경우 리뷰 주인만 요청 가능
    permission_classes = (IsOwnerOrReadOnly,)
    # db 최적화 (query 요청을 최소화 하기 위한 과정)
    queryset = Review.objects.select_related('archive').select_related('archive__user').all()
    serializer_class = ReviewSerializer

    def get(self, request, *args, **kwargs):
        review = self.queryset.get(id = kwargs['pk'])

        ip = get_ip(request)
        if ip is not None:
            check_ip = review.ip_list.filter(review=review, ip=ip)
            if not check_ip.exists():
                new_ip = ReviewIP.objects.create(review=review, ip=ip)
                new_ip.save()
                review.hits += 1
                review.save()
        else:
            print("error in review hit increase view - there is no ip")

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
            review_set = archive.reviews.all().order_by(archive.sort_option)
        # 다른 사람의 review일 경우 public한 review만 get한다.
        else :
            review_set = archive.reviews.filter(public_status = True).order_by(archive.sort_option)

        serializer = ReviewSerializer(review_set, many = True)
        return Response(serializer.data)

# get : 정렬된 review list를 get한다. 추가로 저장된 sort option을 입력된 sortopt 값으로 update한다.
class SortedReviewListView(APIView):
    def get(self, request, *args, **kwargs):
        # username에 대응되는 유저를 찾고 그 유저의 archive를 get한다.
        user = get_object_or_404(CustomUser.objects.select_related('archive'), username = kwargs['username'])
        archive = user.archive
        if request.user == user:
            # 정렬된 review set을 db에서 읽어온다.
            review_set = archive.reviews.all().order_by(kwargs['sortopt'])

            # 아카이브의 sort_option과 입력 받은 sortopt가 다를 경우 업데이트 한다. ( - 업데이트 query는 비싸기 때문에 바뀔때만 업데이트 해준다)
            if archive.sort_option != kwargs['sortopt']:
                archive.sort_option = kwargs['sortopt']
                archive.save()

            serializer = ReviewSerializer(review_set, many = True)
            return Response(serializer.data)

        review_set = archive.reviews.filter(user__public_status = True).order_by(kwargs['sortopt'])
        serializer = ReviewSerializer(review_set, many = True)
        return Response(serializer.data)

# get : username과 유사한 이름을 가지는 유저들의 대표 리뷰(조회수가 가장 높은 리뷰)를 가져온다.
class SearchedReviewListView(APIView):
    def get(self, request, *args, **kwargs):
        archives = Archive.objects.select_related('user').filter(user__public_status=True, user__username__iregex = r'.*%s.*' % kwargs['username'])
        review_list = []
        for archive in archives:
            review = archive.reviews.filter(public_status = True).order_by('-hits').first()
            if review != None:
                review_list.append(review)

        serializer = ReviewSerializer(review_list, many = True)
        return Response(serializer.data)

# get : 조회수가 가장 높은 3개의 리뷰를 가져온다.
class ReviewRankingView(APIView):
    def get(self, request, *args, **kwargs):
        review_set = Review.objects.select_related('archive').select_related('archive__user').filter(archive__user__public_status=True, public_status=True).order_by('-hits')
        serializer = ReviewSerializer(review_set[:3], many = True)
        return Response(serializer.data)


# for debugging
class DeleteAllReviewIP(APIView):
    def get(self, request, *args, **kwargs):
        queryset = ReviewIP.objects.all()
        serializer = ReviewIPSerializer(queryset, many=True)
        data = serializer.data
        queryset.delete()
        return Response(data)

# for debugging
class ReviewIPListView(generics.ListCreateAPIView):
    queryset = ReviewIP.objects.all()
    serializer_class = ReviewIPSerializer

# for debugging
class ReviewIPDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReviewIP.objects.all()
    serializer_class = ReviewIPSerializer

# for test
class ForceHitIncreaseView(APIView):
    def get(self, request, *args, **kwargs):
        review = Review.objects.get(id = kwargs['pk'])
        review.hits += 1
        review.save()

        serializer = ReviewSerializer(review)
        return Response(serializer.data)
