# Restaurant/models.py

from django.db import models


#TODO : connect with googlemap
class Restaurant(models.Model):
    id = models.AutoField(primary_key = True)
    rName = models.CharField(max_length = 20)
    rAddress = models.TextField()
