# archive/serializers.py

from rest_framework import serializers
from . import models


class ArchiveSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username') #source?
    visitor_count = serializers.ReadOnlyField()
    sort_option = serializers.ReadOnlyField()
    class Meta:
        model = models.Archive
        fields = ('__all__')


class GuestCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GuestComment
        fields = ('__all__')
