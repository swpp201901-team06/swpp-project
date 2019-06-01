# Ranking/urls.py
from django.urls import path
from . import views
from . import models

# ~/Ranking/
urlpatterns = [
    path('list', views.WeeklyRankingListView.as_view(), name = 'ranking_list'),
    path('detail/<int:pk>', views.WeeklyRankingDetailView.as_view(), name = 'ranking_detail'),
]
