from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Estate
from .serializers import EstateSerializer

@api_view(['GET'])
def getAllEstate(request):
    estates = Estate.objects.all()
    serialized = EstateSerializer(estates, many=True)
    return Response(serialized.data)