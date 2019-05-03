from django.db import models
from users.models import CustomUser

class Archive(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'Archive', on_delete = models.CASCADE)
    visitorCount = models.IntegerField()

class Restaurant(models.Model):
    id = models.AutoField(primary_key = True)
    rName = models.CharField(max_length = 20)
    rAddress = models.TextField()

class Tag(models.Model):
    tagName = models.CharField(max_length = 10, unique = True, null = False, primary_key = True)
    referedCount = models.IntegerField()


class GuestComment(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'guest_user', on_delete = models.CASCADE)
    createdTime = models.DateTimeField(auto_now_add = True)
    content = models.TextField()
    id = models.AutoField(primary_key = True)


class Review(models.Model):
    content = models.TextField()
    eatWhen = models.DateTimeField()
    postTime = models.DateTimeField(auto_now_add = True)
    publicStatus = models.BooleanField(default = False)
    score = models.IntegerField()
    restaurantId = models.ForeignKey(Restaurant, on_delete = models.CASCADE)
    archive = models.ForeignKey(Archive, related_name = 'review_archive', on_delete = models.CASCADE)
    hits = models.IntegerField()
    tags = models.ManyToManyField(Tag, related_name = 'review_tags', default = -1)
    id = models.AutoField(primary_key = True)


class WeeklyRanking(models.Model):
    week = models.IntegerField(primary_key = True)
    users = models.ManyToManyField(CustomUser, related_name = 'ranking_users')
    reviews = models.ManyToManyField(Review, related_name = 'ranking_reviews')
    tags = models.ManyToManyField(Tag, related_name = 'ranking_tags')


#class TagReview(models.Model):
#    TagName = models.OneToOneField(Tag, related_name = 'Tagname_tag', on_delete = models.CASCADE)
#    ReviewId = models.OneToOneField(Review, related_name = 'ReviewId_review', on_delete = models.CASCADE)
#    id = models.AutoField(primary_key = True) #temp
