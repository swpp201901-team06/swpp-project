# review/models.py
from django.db import models
from user.models import CustomUser
from restaurant.models import Restaurant
from archive.models import Archive

from tagging.fields import TagField
from tagging.models import Tag, TaggedItem

class Review(models.Model):
    content = models.TextField()
    eat_when = models.DateTimeField(blank = True,)
    post_time = models.DateTimeField(auto_now_add = True)
    public_status = models.BooleanField(default = False)
    score = models.IntegerField(blank = True,)
    restaurant_id = models.ForeignKey(Restaurant, related_name='reviews', on_delete = models.CASCADE)
    rest_name = models.TextField(default="default")
    archive = models.ForeignKey(Archive, related_name = 'reviews', on_delete = models.CASCADE)
    hits = models.IntegerField(default = 0)
    photo = models.ImageField(blank = True, null = True)
    tags = TagField()

class ReviewIP(models.Model):
    review = models.ForeignKey(Review, related_name='ip_list', on_delete=models.CASCADE)
    ip = models.CharField(max_length=20)

    def __str__(self):
        return "[{0}] read review {1}".format(self.ip, self.review)
