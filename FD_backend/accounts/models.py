from django.db import models
from django.core.validators import RegexValidator
# Create your models here.

class PhoneNumber(models.Model):
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    number = models.CharField(validators=[phone_regex], blank=True, max_length=15, primary_key=True) # validators should be a list
