from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from databases.models import Cart,Order,OrderItems,Customer
from databases.serializers import MenuSerializer,OrderSerializer,OrderItemsSerializer,CustomerSerializer
from rest_framework.decorators import api_view, permission_classes

@api_view(['POST'])
def saveOrder(request):
        print("here")
        serializer=OrderSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

@api_view(['POST'])
def saveOrderItems(request):
        print("here")
        serializer=OrderItemsSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['GET'])
def getUsersOrders(request, pk):
    data = Order.objects.filter(User_Id=int(pk)).order_by('-id')
    serializer = OrderSerializer(data, many=True)
    return Response( serializer.data)