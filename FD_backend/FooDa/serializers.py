from rest_framework import serializers
from . import models


class ReviewSerializer(serializers.ModelSerializer):
    archive = serializers.ReadOnlyField(source='archive.archive') #source?

    class Meta:
        model = models.Review
        fields = ('content', 'eatWhen', 'publicStatus', 'postTime',
         'publicStatus', 'score', 'restaurantId', 'archive', 'hits',
         'tags')


class ArchiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Archive
        fields = ('visitorCount','user')

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Restaurant
        fields = ('rName', 'rAddress')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tag
        fields = ('tagName', 'referedCount')

class GuestCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GuestComment
        fields = ('user', 'createdTime', 'content')


class WeeklyRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WeeklyRanking
        fields = ('week', 'users', 'reviews', 'tags')

#class TagReviewSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = models.TagReview
#        fields = ('tagName', 'ReviewId')
