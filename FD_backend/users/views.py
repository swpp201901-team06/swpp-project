from rest_framework import generics, permissions


from . import models
from . import serializers

class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class UpdateUsernicknamePublicStatus(generics.UpdateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.nickname = request.data.get("nickname")
        instance.publicStatus = request.data.get("publicStatus")
        instance.save()

        serializer = self.get_serializer(instance)
        serializer.is_valid(raise_exception = True)
        self.perform_update(serializer)

        return Response(serializer.data)
