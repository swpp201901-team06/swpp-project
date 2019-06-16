from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
import operator

from tagging.models import Tag, TaggedItem
from review.models import Review
from .serializers import TagSerializer, TaggedItemSerializer
from review.serializers import ReviewSerializer


# post : create 태그(디버깅용)
# get : 태그 전체 리스트 가져옴
class TagListView(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

# get : 태그, 리뷰 맵핑 정보를 가져옴
class TaggedItemListView(generics.ListAPIView):
    queryset = TaggedItem.objects.all()
    serializer_class = TaggedItemSerializer

# get : 특정 태그가 사용된 리뷰 목록을 가져옴
class TagFilterView(APIView):
    def get(self, request, *args, **kwargs):
        tag = get_object_or_404(Tag, name = kwargs['tag_name'])
        review_list = Review.objects.filter(tags__iregex=r'\b%s\b' % tag)

        serializer = ReviewSerializer(review_list, many = True)

        return Response(serializer.data)

# get : 제일 많이 사용된 태그 6개를 가져옴
class TagRankingView(APIView):
    def get(self, request, *args, **kwargs):
        tags = Tag.objects.usage_for_model(Review, counts=True)
        tags.sort(key = operator.attrgetter('count'), reverse=True)

        serializer = TagSerializer(tags[:6], many = True)

        return Response(serializer.data)
