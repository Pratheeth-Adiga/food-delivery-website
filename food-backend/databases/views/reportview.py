from django.db.models import Subquery
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from databases.models import *
from databases.serializers import MenuSerializer, RestaurantSerializer, OrderItemsSerializer, Food_OrderSerializer, OrderSerializer
from rest_framework.decorators import api_view, permission_classes

import json
data = {}


@api_view(['GET'])
def getreport(request):
    user_count = UserAccount.objects.count()
    restaurant_count = Restaurant.objects.count()
    total_order = Order.objects.count()
    delivered_order = Order.objects.filter(Status=2).count()
    data1 = {
        'user': user_count,
        'rest': restaurant_count,
        'total': total_order,
        'delivered': delivered_order
    }
    return JsonResponse(data1, safe=False)
