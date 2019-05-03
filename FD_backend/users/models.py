from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    id = models.AutoField(primary_key = True)
    username = models.CharField(blank = False, max_length = 20, unique = True)
    email = models.EmailField(blank = False, unique = True)
    publicStatus = models.BooleanField(default = False)
    is_admin = models.BooleanField(default = False)


    def __str__(self):
        return self.email




# Create your models here.
