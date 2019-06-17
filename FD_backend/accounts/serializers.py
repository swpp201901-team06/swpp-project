from rest_framework import serializers
from allauth.account.models import EmailAddress
from . import models

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailAddress
        fields = ('__all__')

class PhoneSerailizer(serializers.ModelSerializer):
    class Meta:
        model = models.PhoneNumber
        fields = ('__all__')
