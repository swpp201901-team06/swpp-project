# Restaurant/serializers.py

from rest_framework import serializers
from . import models


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Restaurant
        fields = ('__all__')

    def create(self, validated_data):
        restaurant, created = models.Restaurant.objects.get_or_create(
            name=validated_data['name'],
            address=validated_data['address'],
            latitude=validated_data['latitude'],
            longitude=validated_data['longitude']
        )
        return restaurant
