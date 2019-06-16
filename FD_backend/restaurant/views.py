from rest_framework import generics, permissions
from django.shortcuts import render

from . import models
from . import serializers

# get : 모든 식당 리스트를 가져옴
class RestaurantListView(generics.ListCreateAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer

# get : 특정 식당의 정보를 가져옴
# put : 식당의 정보를 수정함
# delete : 식당을 삭제함
class RestaurantDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer
