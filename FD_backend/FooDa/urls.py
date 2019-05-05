from django.urls import path,include
from . import views
from . import models
from tagging.views import TaggedObjectList


urlpatterns = [
    path('reviewlist/', views.ReviewListView.as_view(), name = 'reviewlist'),
    path('reviewdetail/<int:pk>/', views.ReviewDetailView.as_view(), name = 'reviewdetail'),
    path('reviewhit/<int:pk>/', views.ReviewHitsIncreaseView.as_view(), name = 'reviewhit'),

    path('myreviewlist/<str:username>', views.myReviewList.as_view(), name = 'myreviewlist'),


    path('archivelist/', views.ArchiveListView.as_view(), name = 'archivelist'),
    path('archivedetail/<str:username>/', views.ArchiveVisitorIncreaseView.as_view(), name = 'archivedetail'),

    path('restaurantlist/', views.RestaurantListView.as_view(), name = 'restaurantlist'),
    path('restaurantdetail/<int:pk>/', views.RestaurantDetailView.as_view(), name = 'restaurantdetail'),

    path('tagging/', views.TagList.as_view(), name = 'tagging_tag'),
    path('taggeditem/', views.TaggedItemList.as_view(), name = 'taggeditem_tag'),
    path('tagfilter/<int:tag_id>', views.TagFilter.as_view(), name = 'tagfilter'),

    path('guestCommentlist/', views.GuestCommentListView.as_view(), name = 'guestCommentlist'),
    path('guestCommentdetail/<int:pk>/', views.GuestCommentDetailView.as_view(), name = 'guestCommentdetail'),

    path('weeklyrankinglist/', views.WeeklyRankingListView.as_view(), name = 'weeklyrankinglist'),
    path('weeklyrankingdetail/<int:pk>/', views.WeeklyRankingDetailView.as_view(), name = 'weeklyrankingdetail'),
]
