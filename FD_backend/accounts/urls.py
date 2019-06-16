# Account/urls.py
from django.urls import include, path
from . import views

urlpatterns = [
    # /login/ 로그인, /logout/ 로그아웃
    path('', include('rest_auth.urls')),
    # 회원가입
    path('registration', include('rest_auth.registration.urls')),
    path('list', views.AccountListView.as_view(), name = 'account_list'),
    path('detail/<int:pk>', views.AccountDetailView.as_view(), name = 'account_detail')

]
