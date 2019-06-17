from rest_framework import serializers
from user.models import CustomUser

class RecommendSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username')
