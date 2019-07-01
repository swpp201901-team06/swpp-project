from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseBadRequest
from django.shortcuts import get_object_or_404

from archive.models import Archive
from user.models import CustomUser
from review.models import Review
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
from review.serializers import ReviewSerializer
from user.serializers import UserSerializer

from .serializers import RecommendSerializer

def sim_pearson(data, name1, name2):
    sumX=0 # X의 합
    sumY=0 # Y의 합
    sumPowX=0 # X 제곱의 합
    sumPowY=0 # Y 제곱의 합
    sumXY=0 # X*Y의 합
    count=0 # 식당 개수

    for i in data[name1]: # i = key
        if i in data[name2]: # 같은 식당을 평가했을때만
            sum_x+=data[name1][i]
            sum_y+=data[name2][i]
            sum_pow_x+=pow(data[name1][i],2)
            sum_pow_y+=pow(data[name2][i],2)
            sum_xy+=data[name1][i]*data[name2][i]
            count+=1

    return (sum_xy-((sum_x*sum_y)/count)) / sqrt((sum_pow_x-(pow(sum_x,2)/count))*(sum_pow_y-(pow(sum_y,2)/count)))

def make_data(username):
    data = {}
    try:
        user = CustomUser.objects.get(username=username)
    except:
        print("error at make_data - no such user")
        return data

    # 유저가 follow하는 사람이 존재하고 5명 이상 있을 경우
    if user.follows.exists() and user.follows.count() >= 5:
        user_set = user.follows.select_related('archive')
    else:
        user_set = CustomUser.objects.select_related('archive').all()

    user_set.prefetch_related('archive__reviews')
    print(user_set.values())
    print(user_set.archive.values())
    return data

class RecommendationView(APIView):
    def get(self, request, username):
        user = CustomUser.objects.get(username=username)
        user_set = user.follows.all()
        print(user_set)
        new_user = CustomUser.objects.filter(followers__in=user_set)
        print(new_user)
        if user.follows.count() >= 1:
            review_set = Review.objects.select_related('archive').select_related('archive__user').exclude(archive__user__username=username).filter(archive__user__in=new_user, public_status=True).order_by('-hits')
            if review_set.count() >= 3:
                serializer = ReviewSerializer(review_set[:3], many = True)
                return Response(serializer.data)

        review_set = Review.objects.select_related('archive').select_related('archive__user').exclude(archive__user__username=username).filter(public_status=True).order_by('-hits')
        serializer = ReviewSerializer(review_set[:3], many = True)
        return Response(serializer.data)
