from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    name = models.CharField(blank = True, max_length = 255)
    email = models.EmailField(blank = False)
    nickname = models.CharField(blank = True, max_length = 20)

    def __str__(self):
        return self.email




# Create your models here.
