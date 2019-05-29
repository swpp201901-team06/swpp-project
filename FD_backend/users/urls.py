# users/urls.py
# ~/User/
from django.urls import include, path

from . import views

urlpatterns = [
    path('/list', views.UserListView.as_view(), name = 'user_list'),
    path('/detail/<str:pk>', views.UserDetailView.as_view(), name = 'user_detail'),
    path('/email/<str:email>',views.GetUserNameView.as_view(), name = 'get_username'),

    path('/exists/email/<str:email>', views.UserEmailExistView.as_view(), name = 'user_email'),
    path('/exists/username/<str:username>', views.UserNameExistView.as_view(), name = 'user_name'),
]
