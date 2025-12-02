from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Estate
from .serializers import EstateSerializer

@api_view(['GET'])
def getAllEstate(request):
    estates = Estate.objects.all()
    serialized = EstateSerializer(estates, many=True)
    return Response(serialized.data)

@api_view(['POST'])
def createNewEstate(request):
    new_estate = EstateSerializer(data=request.data)
    if new_estate.is_valid():
        new_estate.save()
        return Response({"message": "OK"})
    return Response({"message": "Invalid data"})