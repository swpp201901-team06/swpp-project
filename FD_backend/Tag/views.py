from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
import operator

from tagging.models import Tag, TaggedItem
from Review.models import Review
from .serializers import TagSerializer, TaggedItemSerializer
from Review.serializers import ReviewSerializer


#Tag
# 태그 Post, 태그 리스트 Get
class TagListView(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

# 태그, 리뷰 맵핑 정보 (Get)
class TaggedItemListView(generics.ListAPIView):
    queryset = TaggedItem.objects.all()
    serializer_class = TaggedItemSerializer

# 특정 태그가 사용된 리뷰 목록 (Get)
class TagFilterView(APIView):
    def get(self, request, *args, **kwargs):
        tag = get_object_or_404(Tag, name = kwargs['tag_name'])
        review_list = Review.objects.filter(tags__iregex=r'\b%s\b' % tag)

        serializer = ReviewSerializer(review_list, many = True)

        return Response(serializer.data)

# 태그 상위 탑 ten (Get)
class TagRankingView(APIView):
    def get(self, request, *args, **kwargs):
        tags = Tag.objects.usage_for_model(Review, counts=True)
        tags.sort(key = operator.attrgetter('count'), reverse=True)

        serializer = TagSerializer(tags[:6], many = True)

        return Response(serializer.data)
