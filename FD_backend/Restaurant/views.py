from rest_framework import generics, permissions
from django.shortcuts import render

from . import models
from . import serializers

#Restaurant
class RestaurantListView(generics.ListCreateAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer


class RestaurantDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer
