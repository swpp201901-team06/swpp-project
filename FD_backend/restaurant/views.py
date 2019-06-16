from rest_framework import generics, permissions
from rest_framework.views import APIView
from django.shortcuts import render
import json

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
