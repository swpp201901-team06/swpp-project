# Tag/urls.py
from django.urls import path
from . import views
from . import models
from tagging.views import TaggedObjectList

# ~/Tag/
urlpatterns = [
    # 모든 태그 리스트
    path('list', views.TagListView.as_view(), name = 'tag_list'),
    # 태그와 리뷰의 맵핑 정보
    path('taggeditem', views.TaggedItemListView.as_view(), name = 'tagged_item'),
    # [tag_name]의 태그를 가지고 있는 리뷰들
    path('filter/<str:tag_name>', views.TagFilterView.as_view(), name = 'tag_filter'),
    # 제일 많이 사용된 태그 6개
    path('ranking', views.TagRankingView.as_view(), name = 'tag_ranking')
]
