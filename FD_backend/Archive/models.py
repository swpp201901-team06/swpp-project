# Archive/models.py
from django.db import models
from users.models import CustomUser

#TODO : modify sort option : sort option should have only (content|eatWhen|postTime|score|....)
class Archive(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'archive', primary_key = True, on_delete = models.CASCADE)
    visitorCount = models.IntegerField(default = 0)
    sortOption = models.CharField(max_length = 20, default = 'id')

class GuestComment(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'guest_comments', on_delete = models.CASCADE)
    createdTime = models.DateTimeField(auto_now_add = True)
    content = models.TextField()
    id = models.AutoField(primary_key = True)
