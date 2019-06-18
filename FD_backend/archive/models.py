# archive/models.py
from django.db import models
from user.models import CustomUser

#TODO : modify sort option : sort option should have only (content|eatWhen|postTime|score|....)
class Archive(models.Model):
    user = models.OneToOneField(CustomUser, related_name='archive', primary_key=True, on_delete=models.CASCADE)
    visitor_count = models.IntegerField(default=0)
    sort_option = models.CharField(max_length=20, default='id')

    def __str__(self):
        return self.user.username

class GuestComment(models.Model):
    user = models.OneToOneField(CustomUser, related_name='guest_comments', on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

class ArchiveVisitorIP(models.Model):
    archive = models.ForeignKey(Archive, related_name='ip_list', on_delete=models.CASCADE)
    ip = models.CharField(max_length=20)

    def __str__(self):
        return "[{0}] visit {1}'s archive".format(self.ip, self.archive)
