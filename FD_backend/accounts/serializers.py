from rest_framework import serializers
from allauth.account.models import EmailAddress

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailAddress
        fields = ('__all__')
