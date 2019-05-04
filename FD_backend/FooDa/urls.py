from django.urls import path,include
from . import views

urlpatterns = [
    path('reviewlist/', views.ReviewListView.as_view(), name = 'reviewlist'),
    path('reviewdetail/<int:pk>/', views.ReviewDetailView.as_view(), name = 'reviewdetail'),
    path('reviewhit/<int:pk>/', views.ReviewHitsIncreaseView.as_view(), name = 'reviewhit'),

    path('myreviewlist/<str:username>', views.myReviewList.as_view(), name = 'myreviewlist'),


    path('archivelist/', views.ArchiveListView.as_view(), name = 'archivelist'),
    path('archivedetail/<str:username>/', views.ArchiveVisitorIncreaseView.as_view(), name = 'archivedetail'),

    path('restaurantlist/', views.RestaurantListView.as_view(), name = 'restaurantlist'),
    path('restaurantdetail/<int:pk>/', views.RestaurantDetailView.as_view(), name = 'restaurantdetail'),

    path('taglist/', views.TagListView.as_view(), name = 'taglist'),
    path('tagdetail/<str:pk>/', views.TagDetailView.as_view(), name = 'tagdetail'),

    path('guestCommentlist/', views.GuestCommentListView.as_view(), name = 'guestCommentlist'),
    path('guestCommentdetail/<int:pk>/', views.GuestCommentDetailView.as_view(), name = 'guestCommentdetail'),

    path('weeklyrankinglist/', views.WeeklyRankingListView.as_view(), name = 'weeklyrankinglist'),
    path('weeklyrankingdetail/<int:pk>/', views.WeeklyRankingDetailView.as_view(), name = 'weeklyrankingdetail'),

#    path('tagreviewlist/', views.TagReviewListView.as_view(), name = 'tagreviewlist'),
#    path('tagreviewdetail/<int:pk>/', views.TagReviewDetailView.as_view(), name = 'tagreviewdetail'),



]
