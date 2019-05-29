# Restaurant/urls.py
from django.urls import path
from . import views
from . import models

# ~/Restaurant/
urlpatterns = [
    path('/list', views.RestaurantListView.as_view(), name = 'restaurant_list'),
    path('/detail/<int:pk>', views.RestaurantDetailView.as_view(), name = 'restaurant_detail'),
]
