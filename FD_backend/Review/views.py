from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from django.shortcuts import get_object_or_404

from Review.models import Review
from . import serializers
from Archive.models import Archive
from users.models import CustomUser
from Review.permissions import UserOnlyAccess,IsOwnerOrReadOnly


class ReviewPostView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = serializers.ReviewSerializer
    queryset = Review.objects.all()

    def perform_create(self, serializer):
        serializer.save(archive = self.request.user.Archive)

class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Review.objects.all()
    serializer_class = serializers.ReviewSerializer

#TODO : this view should be modified because this view access db too much, you should using related
class ReviewListView(APIView):
    def get(self, request, username) :
        user = CustomUser.objects.select_related('Archive').get(username = username)
        #get_object_or_404(CustomUser, username = username)
        #.select_related('Archive')
        archive = get_object_or_404(Archive, user = user)
        if request.user == user:
                queryset = archive.review_archive.all().order_by(archive.sortOption)
                serializer_class = serializers.ReviewSerializer(queryset, many = True)
                return Response(serializer_class.data)

        queryset = archive.review_archive.filter(publicStatus = True).order_by(archive.sortOption)
        serializer_class = serializers.ReviewSerializer(queryset, many = True)
        return Response(serializer_class.data)

#TODO : this view should be modified becauser this view access db too much, you should using related
class SortedReviewListView(APIView):
    def get(self, request, username, sortopt) :
        user = get_object_or_404(CustomUser, username = username)
        archive = get_object_or_404(Archive, user = user)
        if request.user == user:
            queryset = archive.review_archive.all().order_by(sortopt)
            archive.sortOption = sortopt

            archiveData = {
                "user" : archive.user,
                "visitorCount" : archive.visitorCount,
                "sortOption" : sortopt
            }

            serializer = serializers.ArchiveSerializer(archive, data = archiveData)
            if serializer.is_valid():
                serializer.save()

            serializer_class = serializers.ReviewSerializer(queryset, many = True)
            return Response(serializer_class.data)

        queryset = archive.review_archive.filter(publicStatus = True).order_by(sortopt)
        serializer_class = serializers.ReviewSerializer(queryset, many = True)
        return Response(serializer_class.data)

#TODO : this view should be modified because this view access db two time, and hits can be increased just push F5 button
class ReviewHitsIncreaseView(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      )
    serializer_class = serializers.ReviewSerializer
    queryset = Review.objects.all()

    def put(self, request, pk):
        review = Review.objects.get(id = pk)
        review.hits = review.hits + 1
        serializer = serializers.ReviewSerializer(review, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
