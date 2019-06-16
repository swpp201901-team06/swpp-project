# Tag/serializers.py
from rest_framework import serializers
from tagging.models import Tag, TaggedItem

from . import models

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class TaggedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaggedItem
        fields = '__all__'
