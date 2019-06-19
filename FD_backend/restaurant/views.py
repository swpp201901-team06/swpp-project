from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
import json

from review.serializers import ReviewSerializer
from . import models
from . import serializers

# get : 모든 식당 리스트를 가져옴
# post : 식당이 이미 존재할 경우 그 식당의 정보를 가져오고 그렇지 않으면 만들어서 그 정보를 반환한다.
class RestaurantListView(generics.ListCreateAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer


# get : 특정 식당의 정보를 가져옴
# put : 식당의 정보를 수정함
# delete : 식당을 삭제함
class RestaurantDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer

# get : restaurant에 다녀온 리뷰(조회수가 높은 순서)를 가져온다.
class SearchedRestaurantListView(APIView):
    def get(self, request, *args, **kwargs):
        restaurants = models.Restaurant.objects.filter(reviews__public_status=True, name__iregex = r'.*%s.*' % kwargs['name'])
        queryset = None
        for restaurant in restaurants:
            reviewset = restaurant.reviews.order_by('-hits')
            if reviewset is not None:
                print(reviewset)
                if queryset is None:
                    queryset = reviewset
                else:
                    queryset = queryset | reviewset

        serializer = ReviewSerializer(queryset, many=True)
        return Response(serializer.data)
