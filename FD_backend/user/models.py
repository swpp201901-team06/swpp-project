from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
#from .signals import create_user

class CustomUser(AbstractUser):
    username = models.CharField(blank = False, max_length = 20, unique = True, primary_key = True)
    email = models.EmailField(blank = False, unique = True)
    public_status = models.BooleanField(default = False)
    is_admin = models.BooleanField(default = False)

    def __str__(self):
        return self.email

#post_save.connect(receiver=create_user, sender=CustomUser)

# Create your models here.
