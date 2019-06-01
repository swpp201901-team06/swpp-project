from rest_framework import serializers
from . import models
from Archive.models import Archive

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('username', 'email', 'publicStatus')
