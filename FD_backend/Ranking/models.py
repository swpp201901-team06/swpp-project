# Ranking/models.py

from django.db import models
from users.models import CustomUser
from Review.models import Review

from tagging.fields import TagField
from tagging.models import Tag, TaggedItem


#TODO : modify tag (tag should be a foreignkey)
class WeeklyRanking(models.Model):
    week = models.IntegerField(primary_key = True)
    users = models.ManyToManyField(CustomUser, related_name = 'ranking_users')
    reviews = models.ManyToManyField(Review, related_name = 'ranking_reviews')
    tag = TagField()
