# Review/urls.py
from django.urls import path
from . import views
from . import models

# ~/Review/
urlpatterns = [
    path('post/', views.ReviewPostView.as_view(), name = 'review_post'),
    path('detail/<int:pk>/', views.ReviewDetailView.as_view(), name = 'review_detail'),
    path('hit/<int:pk>/', views.ReviewHitsIncreaseView.as_view(), name = 'review_hit'),

    path('list/<str:username>/', views.ReviewListView.as_view(), name = 'review_list'),
    path('sorted-list/<str:username>/<str:sortopt>/', views.SortedReviewListView.as_view(), name = 'sorted_review_list'),
]
