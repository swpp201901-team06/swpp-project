from rest_framework import generics
from rest_framework import serializers

from allauth.account.models import EmailAddress
from . import serializers

class AccountListView(generics.ListCreateAPIView):
    queryset = EmailAddress.objects.all()
    serializer_class = serializers.AccountSerializer

class AccountDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EmailAddress.objects.all()
    serializer_class = serializers.AccountSerializer
