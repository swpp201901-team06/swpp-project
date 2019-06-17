# Restaurant/urls.py
from django.urls import path
from . import views
from . import models

# ~/Restaurant/
urlpatterns = [
    # 전체 식당 list
    path('list', views.RestaurantListView.as_view(), name = 'restaurant_list'),
    # 특정한 식당 정보
    path('detail/<int:pk>', views.RestaurantDetailView.as_view(), name = 'restaurant_detail'),

    path('search/<str:name>', views.SearchedRestaurantListView.as_view())
]
