from rest_framework import generics, permissions
from django.shortcuts import render

from . import models
from . import serializers
from users.models import CustomUser
from Review.permissions import UserOnlyAccess,IsOwnerOrReadOnly


class ArchiveListView(generics.ListCreateAPIView):
    queryset = models.Archive.objects.all()
    serializer_class = serializers.ArchiveSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class ArchiveVisitorIncreaseView(generics.UpdateAPIView):
    serializer_class = serializers.ArchiveSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

#GuestComment
class GuestCommentListView(generics.ListCreateAPIView):
    queryset = models.GuestComment.objects.all()
    serializer_class = serializers.GuestCommentSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)


class GuestCommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.GuestComment.objects.all()
    serializer_class = serializers.GuestCommentSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      UserOnlyAccess,)
