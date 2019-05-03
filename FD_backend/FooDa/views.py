from rest_framework import generics, permissions
from FooDa.permissions import UserOnlyAccess,UserArchiveAccess

from . import models
from . import serializers

class ReviewListView(generics.ListCreateAPIView):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(archive = self.request.user.Archive)



class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      UserArchiveAccess,)

#
class ArchiveListView(generics.ListCreateAPIView):
    queryset = models.Archive.objects.all()
    serializer_class = serializers.ArchiveSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class ArchiveDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Archive.objects.all()
    serializer_class = serializers.ArchiveSerializer

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      UserOnlyAccess,)

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
