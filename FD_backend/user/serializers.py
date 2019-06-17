from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('username', 'email', 'public_status')

class UserModifySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('username', 'public_status')


class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('follows', )
    def update(self, instance, validated_data):
        users = validated_data.get('follows')
        for user in users:
            if instance.username == user.username:
                continue
            if instance.follows.all().filter(username=user.username).exists():
                instance.follows.remove(user)
                instance.save()
            else:
                instance.follows.add(user)
                instance.save()
        return instance
