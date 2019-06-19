# restaurant/models.py
from django.db import models


#TODO : connect with googlemap
#TODO : using geography field
class Restaurant(models.Model):
    name = models.TextField()
    address = models.TextField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)

    def __str__(self):
        return self.name
