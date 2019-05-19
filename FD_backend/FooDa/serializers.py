from rest_framework import serializers
from . import models

from tagging.models import Tag, TaggedItem


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class TaggedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaggedItem
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    archive = serializers.ReadOnlyField(source='archive.user.username') #source?
    hits = serializers.ReadOnlyField() #source?
    photo = serializers.ImageField(use_url = True, allow_empty_file = True, required = False)

    class Meta:
        model = models.Review
        fields = ('content', 'eatWhen', 'publicStatus', 'postTime',
         'publicStatus', 'score', 'restaurantId', 'archive', 'hits',
         'tags', 'photo', 'id')


class ArchiveSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username') #source?
    visitorCount = serializers.ReadOnlyField()
    sortOption = serializers.ReadOnlyField()

    class Meta:
        model = models.Archive
        fields = ('visitorCount','user', 'sortOption')

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Restaurant
        fields = ('rName', 'rAddress')

class GuestCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GuestComment
        fields = ('user', 'createdTime', 'content')


class WeeklyRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WeeklyRanking
        fields = ('week', 'users', 'reviews', 'tags')
