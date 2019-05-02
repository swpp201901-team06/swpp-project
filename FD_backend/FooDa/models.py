from django.db import models
from users.models import CustomUser

class Archive(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'Archive', on_delete = models.CASCADE)
    visitorCount = models.IntegerField()

class Restaurant(models.Model):
    rName = models.CharField(max_length = 20)
    rAddress = models.TextField()

class Tag(models.Model):
    tagName = models.CharField(max_length = 10, unique = True, null = False)
    referedCount = models.IntegerField()


class GuestComment(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'guest_user', on_delete = models.CASCADE)
    createdTime = models.DateTimeField()
    content = models.TextField()


class Review(models.Model):
    content = models.TextField()
    eatWhen = models.DateTimeField()
    postTime = models.DateTimeField(auto_now_add = True)
    publicStatus = models.BooleanField(default = False)
    score = models.IntegerField()
    restaurantId = models.ForeignKey(Restaurant, on_delete = models.CASCADE)
    archive = models.ForeignKey(Archive, related_name = 'review_archive', on_delete = models.CASCADE)
    hits = models.IntegerField()
    tag1 = models.ForeignKey(Tag, related_name = 'review_tag1', on_delete = models.CASCADE, default = -1)
    tag2 = models.ForeignKey(Tag, related_name = 'review_tag2', on_delete = models.CASCADE, default = -1)
    tag3 = models.ForeignKey(Tag, related_name = 'review_tag3', on_delete = models.CASCADE, default = -1)
    tag4 = models.ForeignKey(Tag, related_name = 'review_tag4', on_delete = models.CASCADE, default = -1)
    tag5 = models.ForeignKey(Tag, related_name = 'review_tag5', on_delete = models.CASCADE, default = -1)



class WeeklyRanking(models.Model):
    week = models.IntegerField()
    user1 = models.ForeignKey(CustomUser, related_name = 'ranking_user1', on_delete = models.CASCADE)
    user3 = models.ForeignKey(CustomUser, related_name = 'ranking_user2', on_delete = models.CASCADE)
    user2 = models.ForeignKey(CustomUser, related_name = 'ranking_user3', on_delete = models.CASCADE)
    user4 = models.ForeignKey(CustomUser, related_name = 'ranking_user4', on_delete = models.CASCADE)
    user5 = models.ForeignKey(CustomUser, related_name = 'ranking_user5', on_delete = models.CASCADE)
    review1 = models.ForeignKey(Review, related_name = 'ranking_review1', on_delete = models.CASCADE)
    review2 = models.ForeignKey(Review, related_name = 'ranking_review2', on_delete = models.CASCADE)
    review3 = models.ForeignKey(Review, related_name = 'ranking_review3', on_delete = models.CASCADE)
    tag1 = models.ForeignKey(Tag, related_name = 'ranking_tag1', on_delete = models.CASCADE)
    tag2 = models.ForeignKey(Tag, related_name = 'ranking_tag2', on_delete = models.CASCADE)
    tag3 = models.ForeignKey(Tag, related_name = 'ranking_tag3', on_delete = models.CASCADE)
    tag4 = models.ForeignKey(Tag, related_name = 'ranking_tag4', on_delete = models.CASCADE)


class TagReview(models.Model):
    TagName = models.OneToOneField(Tag, related_name = 'Tagname_tag', on_delete = models.CASCADE)
    ReviewId = models.OneToOneField(Review, related_name = 'ReviewId_review', on_delete = models.CASCADE)
