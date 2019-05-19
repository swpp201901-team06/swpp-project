from django.db import models
from users.models import CustomUser
import re

from tagging.fields import TagField
from tagging.models import Tag, TaggedItem

#TODO : modify sort option : sort option should have only (content|eatWhen|postTime|score|....)
class Archive(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'Archive', primary_key = True, on_delete = models.CASCADE)
    visitorCount = models.IntegerField(default = 0)
    sortOption = models.CharField(max_length = 20, default = 'id')

#TODO : connect with googlemap
class Restaurant(models.Model):
    id = models.AutoField(primary_key = True)
    rName = models.CharField(max_length = 20)
    rAddress = models.TextField()

class GuestComment(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'guest_user', on_delete = models.CASCADE)
    createdTime = models.DateTimeField(auto_now_add = True)
    content = models.TextField()
    id = models.AutoField(primary_key = True)

#TODO : add photo,
class Review(models.Model):
    content = models.TextField()
    eatWhen = models.DateTimeField(blank = True,)
    postTime = models.DateTimeField(auto_now_add = True)
    publicStatus = models.BooleanField(default = False)
    score = models.IntegerField(blank = True,)
    restaurantId = models.ForeignKey(Restaurant, on_delete = models.CASCADE)
    archive = models.ForeignKey(Archive, related_name = 'review_archive', on_delete = models.CASCADE)
    hits = models.IntegerField(default = 0)
    id = models.AutoField(primary_key = True)

    photo = models.ImageField(blank = True, null = True)

    tags = TagField()

#TODO : modify tag (tag should be a foreignkey)
class WeeklyRanking(models.Model):
    week = models.IntegerField(primary_key = True)
    users = models.ManyToManyField(CustomUser, related_name = 'ranking_users')
    reviews = models.ManyToManyField(Review, related_name = 'ranking_reviews')
    tag = TagField()
