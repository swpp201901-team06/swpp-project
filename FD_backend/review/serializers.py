# Review/serializers.py

from rest_framework import serializers
from tagging.models import Tag, TaggedItem

from . import models


class ReviewSerializer(serializers.ModelSerializer):
    archive = serializers.ReadOnlyField(source='archive.user.username') #source?
    hits = serializers.ReadOnlyField() #source?
    photo = serializers.ImageField(use_url = True, allow_empty_file = True, required = False)

    class Meta:
        model = models.Review
        fields = ('__all__')

class ReviewIPSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ReviewIP
        fields = ('__all__')
