from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from tagging.models import Tag, TaggedItem

from Review.models import Review

from . import serializers
from Review.serializers import ReviewSerializer


#Tag
class TagListView(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = serializers.TagSerializer

class TaggedItemListView(generics.ListAPIView):
    queryset = TaggedItem.objects.all()
    serializer_class = serializers.TaggedItemSerializer

class TagFilterView(APIView):
    def get(self, request, *args, **kwargs):
        tag = get_object_or_404(Tag, name = kwargs['tag_name'])
        review_list = Review.objects.filter(tags__iregex=r'\b%s\b' % tag)

        serializer = ReviewSerializer(review_list, many = True)

        return Response(serializer.data)