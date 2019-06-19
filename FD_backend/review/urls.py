# Review/urls.py
from django.urls import path
from . import views
from . import models

# ~/Review/
urlpatterns = [
    # 리뷰 전체 리스트 가져오기(디버깅 용), 리뷰 생성하기
    path('list', views.ReviewCreateListView.as_view(), name = 'review_post'),
    # 특정 유저의 리뷰 가져오기
    path('list/<str:username>', views.ReviewListView.as_view(), name = 'review_list'),
    # 특정 유저의 리뷰를 정렬해서 가져오기
    path('list/<str:username>/<str:sortopt>', views.SortedReviewListView.as_view(), name = 'sorted_review_list'),

    # pk(review id)에 해당하는 review 가져오기(수정, 삭제 가능)
    path('detail/<int:pk>', views.ReviewDetailView.as_view(), name = 'review_detail'),
    # username이 포함된 모든 유저의 대표리뷰 가져오기
    path('search/<str:username>', views.SearchedReviewListView.as_view(), name = 'review_search'),
    # 조회수가 높은 상위 3개 리뷰 가져오기
    path('ranking', views.ReviewRankingView.as_view(), name = 'review_ranking'),

    path('follow/<str:username>', views.FollowReviewView.as_view()),

    # for debugging
    path('force-increase/<int:pk>', views.ForceHitIncreaseView.as_view()),
    path('iplist', views.ReviewIPListView.as_view()),
    path('iplist/<int:pk>', views.ReviewIPDetailView.as_view()),
    path('iplist/delete', views.DeleteAllReviewIP.as_view()),
]
