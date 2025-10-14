from .models import Estate
from rest_framework.serializers import ModelSerializer

class EstateSerializer(ModelSerializer):
    class Meta:
        model = Estate
        fields = '__all__'