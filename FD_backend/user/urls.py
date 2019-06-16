# users/urls.py
# ~/User/
from django.urls import include, path

from . import views

urlpatterns = [
    # 전체 유저 리스트 가져오기
    path('list', views.UserListView.as_view(), name = 'user_list'),
    # pk(유저 이름)에 해당하는 유저의 상세정보 가져오기
    path('detail/<str:pk>', views.UserDetailView.as_view(), name = 'user_detail'),
    # email을 통해 유저 이름 가져오기
    path('username/<str:email>',views.GetUserNameView.as_view(), name = 'get_username'),

    # [email]이 이미 존재하는지 확인
    path('exists/email/<str:email>', views.UserEmailExistView.as_view(), name = 'user_email'),
    # [username]이 이미 존재하는지 확인
    path('exists/username/<str:username>', views.UserNameExistView.as_view(), name = 'user_name'),
]
