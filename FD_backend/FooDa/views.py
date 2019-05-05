from rest_framework import generics, permissions
from FooDa.permissions import UserOnlyAccess,UserArchiveAccess

from django.db.models import Count

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.renderers import JSONRenderer
from django.shortcuts import get_object_or_404

from . import models
from . import serializers
from users.models import CustomUser


class ReviewListView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = serializers.ReviewSerializer
    queryset = models.Review.objects.all()

    def perform_create(self, serializer):
        serializer.save(archive = self.request.user.Archive)



class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      UserArchiveAccess,)

#TODO : this view should be modified becauser this view access db too much, you should using related
class myReviewList(APIView):
    def get(self, request, username) :
        user = get_object_or_404(CustomUser, username = username)
        archive = get_object_or_404(models.Archive, user = user)
        queryset = archive.review_archive.all()
        serializer_class = serializers.ReviewSerializer(queryset, many = True)
        return Response(serializer_class.data)



#TODO : this view should be modified because this view access db two time, and hits can be increased just push F5 button
class ReviewHitsIncreaseView(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      )
    serializer_class = serializers.ReviewSerializer
    queryset = models.Review.objects.all()

    def put(self, request, pk):
        review = models.Review.objects.get(id = pk)
        review.hits = review.hits + 1
        serializer = serializers.ReviewSerializer(review, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

#
class ArchiveListView(generics.ListCreateAPIView):
    queryset = models.Archive.objects.all()
    serializer_class = serializers.ArchiveSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class ArchiveVisitorIncreaseView(generics.UpdateAPIView):
    serializer_class = serializers.ArchiveSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      )


#Restaurant
class RestaurantListView(generics.ListCreateAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer


class RestaurantDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer

#Tag
class TagListView(generics.ListCreateAPIView):
    queryset = models.Tag.objects.all()
    serializer_class = serializers.TagSerializer

class TagDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Tag.objects.all()
    serializer_class = serializers.TagSerializer

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
#WeeklyRanking
class WeeklyRankingListView(generics.ListCreateAPIView):
    queryset = models.WeeklyRanking.objects.all()
    serializer_class = serializers.WeeklyRankingSerializer

class WeeklyRankingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.WeeklyRanking.objects.all()
    serializer_class = serializers.WeeklyRankingSerializer

#TagReview
#class TagReviewListView(generics.ListCreateAPIView):
#    queryset = models.TagReview.objects.all()
#    serializer_class = serializers.TagReviewSerializer

#class TagReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
#    queryset = models.TagReview.objects.all()
#    serializer_class = serializers.TagReviewSerializer
