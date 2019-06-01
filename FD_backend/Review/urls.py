# Review/urls.py
from django.urls import path
from . import views
from . import models

# ~/Review/
urlpatterns = [
    path('list', views.ReviewCreateListView.as_view(), name = 'review_post'),
    path('detail/<int:pk>', views.ReviewDetailView.as_view(), name = 'review_detail'),

    path('list/<str:username>', views.ReviewListView.as_view(), name = 'review_list'),
    path('sorted-list/<str:username>/<str:sortopt>', views.SortedReviewListView.as_view(), name = 'sorted_review_list'),
    path('search/<str:username>', views.SearchedReviewListView.as_view(), name = 'review_search'),
    path('ranking', views.ReviewRankingView.as_view(), name = 'review_ranking'),
]
