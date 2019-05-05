from django.urls import include, path

from . import views

urlpatterns = [
    path('', views.UserListView.as_view(), name = 'userlist'),
    path('detail/<str:pk>/', views.UserDetailView.as_view(), name = 'userdetail'),
    path('get-nickname/<str:email>',views.GetUserName.as_view(), name = 'get_username'),
    path('exists/email/<str:email>', views.UserEmailExist.as_view(), name = 'user_email'),
    path('exists/username/<str:username>', views.UserNameExist.as_view(), name = 'user_name'),

]
