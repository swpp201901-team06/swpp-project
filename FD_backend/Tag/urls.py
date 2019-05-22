# Tag/urls.py
from django.urls import path
from . import views
from . import models
from tagging.views import TaggedObjectList

# ~/Tag/
urlpatterns = [
    path('tagging/', views.TagListView.as_view(), name = 'tagging_tag'),
    path('taggeditem/', views.TaggedItemListView.as_view(), name = 'tagged_item'),
    path('tagfilter/<int:tag_id>/', views.TagFilterView.as_view(), name = 'tag_filter'),
]
