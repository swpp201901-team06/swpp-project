from rest_framework import generics, permissions
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers

class UserListView(generics.ListAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class UserEmailExist(APIView):
    renderer_classes = (JSONRenderer, )

    def get(self, request, email):
        user = models.CustomUser.objects.filter(email = email)
        if user:
            return Response("exist")
        else:
            return Response("not exist")

class UserNameExist(APIView):
    renderer_classes = (JSONRenderer, )

    def get(self, request, username):
        user = models.CustomUser.objects.filter(username = username)
        if user:
            return Response("exist")
        else:
            return Response("not exist")
