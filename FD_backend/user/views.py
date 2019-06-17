from rest_framework import generics, permissions
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from . import models
from . import serializers

# 유저 전체 리스트 가져오기
class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

# 유저 상세 정보 가져오기
class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

# email을 통해 유저 이름 가져오기
class GetUserNameView(APIView):
    def get(self, request, email):
        user = get_object_or_404(models.CustomUser, email = email)
        content = {'username' : user.username}
        return Response(content)

# email 중복확인
class UserEmailExistView(generics.RetrieveAPIView):
    def get(self, request, email):
        try:
            user = models.CustomUser.objects.get(email = email)
            return Response({"exist" : "true", "id" : user.id})
        except:
            return Response({"exist" : "false"})

# 유저 이름 중복 확인
class UserNameExistView(generics.RetrieveAPIView):
    def get(self, request, username):
        try:
            user = models.CustomUser.objects.get(username = username)
            return Response({"exist" : "true", "id" : user.id})
        except:
            return Response({"exist" : "false"})
