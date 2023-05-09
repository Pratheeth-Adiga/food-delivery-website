from django.db.models import Subquery
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from databases.models import Menu,Restaurant,OrderItems,Order,Customer
from databases.serializers import MenuSerializer,RestaurantSerializer,OrderItemsSerializer,CustomerSerializer,OrderSerializer
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt

 
@api_view(['POST'])
def saveCProfile(request,pk):
        print("here")
        serializer=CustomerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

     
@api_view(['DELETE'])
def DeleteDuplicate(request, pk):
     data=Customer.objects.filter(User_Id=int(pk))
     data.delete()
     return JsonResponse({'message':"successful"})

@api_view(['GET'])
def getUser(request, pk):
    data = Customer.objects.filter(User_Id=int(pk))
    serializer = CustomerSerializer(data, many=True)
    return Response( serializer.data)