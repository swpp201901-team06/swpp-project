# Ranking/serializers.py

from rest_framework import serializers
from . import models

class WeeklyRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WeeklyRanking
        fields = ('week', 'users', 'reviews', 'tags')
