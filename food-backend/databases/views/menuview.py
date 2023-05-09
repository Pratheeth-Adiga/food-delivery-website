
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from databases.models import Menu
from databases.serializers import MenuSerializer
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
def getMenu(request, pk):
    menu = None
    print(type(pk))
    menus = Menu.objects.all()
    serializer = MenuSerializer(menus, many=True)
    print(menus)
    for i in serializer.data:
        if i['GST_no'] == int(pk):
            menu = i
            print(menu)
            break
    print("value", menu)
    return Response(menu)
from django.http import JsonResponse

@api_view(['GET'])
def getMenu1(request, pk):
    data = Menu.objects.all().filter(GST_no=int(pk))
    serializer = MenuSerializer(data, many=True)
    return Response( serializer.data)

@api_view(['GET'])
def getFood1(request, pk):
    data = Menu.objects.filter(id=int(pk))
    serializer = MenuSerializer(data, many=True)
    return Response( serializer.data)