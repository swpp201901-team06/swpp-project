# Review/models.py

from django.db import models
from users.models import CustomUser
from Restaurant.models import Restaurant
from Archive.models import Archive

from tagging.fields import TagField
from tagging.models import Tag, TaggedItem

class Review(models.Model):
    content = models.TextField()
    eatWhen = models.DateTimeField(blank = True,)
    postTime = models.DateTimeField(auto_now_add = True)
    publicStatus = models.BooleanField(default = False)
    score = models.IntegerField(blank = True,)
    restaurantId = models.ForeignKey(Restaurant, on_delete = models.CASCADE)
    archive = models.ForeignKey(Archive, related_name = 'reviews', on_delete = models.CASCADE)
    hits = models.IntegerField(default = 0)
    id = models.AutoField(primary_key = True)

    photo = models.ImageField(blank = True, null = True)

    tags = TagField()
