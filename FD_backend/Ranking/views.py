from rest_framework import generics, permissions

from . import models
from . import serializers

#WeeklyRanking
class WeeklyRankingListView(generics.ListCreateAPIView):
    queryset = models.WeeklyRanking.objects.all()
    serializer_class = serializers.WeeklyRankingSerializer

class WeeklyRankingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.WeeklyRanking.objects.all()
    serializer_class = serializers.WeeklyRankingSerializer
