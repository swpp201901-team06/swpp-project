# archive/models.py
from django.db import models
from user.models import CustomUser

from hitcount.models import HitCountMixin

#TODO : modify sort option : sort option should have only (content|eatWhen|postTime|score|....)
class Archive(models.Model, HitCountMixin):
    user = models.OneToOneField(CustomUser, related_name = 'archive', primary_key = True, on_delete = models.CASCADE)
    visitor_count = models.IntegerField(default = 0)
    sort_option = models.CharField(max_length = 20, default = 'id')

class GuestComment(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'guest_comments', on_delete = models.CASCADE)
    created_time = models.DateTimeField(auto_now_add = True)
    content = models.TextField()
