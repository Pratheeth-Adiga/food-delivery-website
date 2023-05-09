
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from databases.models import Menu,UserAccount
from databases.serializers import MenuSerializer,UserCreateSerializer
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
def getUser1(request, pk):
    data = UserAccount.objects.all().filter(email=pk)
    serializer = UserCreateSerializer(data, many=True)
    return Response( serializer.data)

