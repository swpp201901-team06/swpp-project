# Tag/urls.py
from django.urls import path
from . import views
from . import models
from tagging.views import TaggedObjectList

# ~/Tag/
urlpatterns = [
    path('list', views.TagListView.as_view(), name = 'tag_list'),
    path('taggeditem', views.TaggedItemListView.as_view(), name = 'tagged_item'),
    path('filter/<str:tag_name>', views.TagFilterView.as_view(), name = 'tag_filter'),
    path('ranking', views.TagRankingView.as_view(), name = 'tag_ranking')
]
