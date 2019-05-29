# Archive/urls.py
from django.urls import path
from . import views
from . import models

# /Archive/
urlpatterns = [
    path('/list', views.ArchiveListView.as_view(), name = 'archive_list'),
#    path('detail/<str:username>/', views.ArchiveVisitorIncreaseView.as_view(), name = 'archive_detail'),

#    path('guest-comment/list/', views.GuestCommentListView.as_view(), name = 'guest_comment_list'),
#    path('guest-comment/detail/<int:pk>/', views.GuestCommentDetailView.as_view(), name = 'guest_comment_detail'),

]
