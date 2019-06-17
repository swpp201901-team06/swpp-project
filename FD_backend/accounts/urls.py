# Account/urls.py
from django.urls import include, path
from . import views

urlpatterns = [
    # /login/ 로그인, /logout/ 로그아웃
    path('', include('rest_auth.urls')),
    # 회원가입
    path('registration', include('rest_auth.registration.urls')),
    path('list', views.AccountListView.as_view(), name = 'account_list'),
    path('detail/<int:pk>', views.AccountDetailView.as_view(), name = 'account_detail'),


    path('message/send/<str:number>', views.MessageSendView.as_view()),
    path('message/save', views.PhoneNumberSaveView.as_view())

]
