# Account/urls.py
from django.urls import include, path

urlpatterns = [
    # /login/ 로그인, /logout/ 로그아웃
    path('', include('rest_auth.urls')),
    # 회원가입
    path('registration', include('rest_auth.registration.urls')),
]
