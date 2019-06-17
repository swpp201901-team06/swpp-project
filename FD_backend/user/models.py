from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

class CustomUser(AbstractUser):
    username = models.CharField(blank = False, max_length = 20, unique = True)
    email = models.EmailField(blank = False, unique = True)
    public_status = models.BooleanField(default = False)
    is_admin = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)

    follows = models.ManyToManyField("self", related_name = "followers", blank=True, symmetrical=False)

    def __str__(self):
        return self.username
