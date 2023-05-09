from django.shortcuts import render
from rest_framework.views import APIView
from databases.models import *
from rest_framework.response import Response
from databases.serializers import MenuSerializer,RestaurantSerializer
# Create your views here.


class RestaurantView(APIView):
    serializer_class=RestaurantSerializer
    def get(self,request):
        
        output=[{"GST_no":output.GST_no,"Name": output.Name,"Address":output.Addr,"Manager name":output.Mgr_name,"Manager number":output.Mgr_no,"Description":output.Descr,"Url":output.Url} 
        for output in Restaurant.objects.all()]
        return Response(output)
    
    def post(self,request):
        serializer=RestaurantSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class MenuView(APIView):
    serializer_class=MenuSerializer
    
    def get(self,request):
        
        output=[{"Name":output.Name,"Tag": output.Tag,"Price":output.Price,"GSTNum":output.GST_no} 
        for output in Menu.objects.all()]
        return Response(output)
    
    def post(self,request):
        serializer=MenuSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
