from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from rest_framework.serializers import PrimaryKeyRelatedField 
from django.contrib.auth import get_user_model
from .models import *
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email','password',"Role")
class RestaurantSerializer(serializers.ModelSerializer):
   
    class Meta:
        model= Restaurant
        fields='__all__'

class MenuSerializer(serializers.ModelSerializer):
   
    class Meta:
        model=Menu
        fields='__all__'

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cart
        fields="__all__"

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model =Order
        fields="__all__"

class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model =OrderItems
        fields="__all__"

class Food_OrderSerializer(serializers.ModelSerializer):
    OrderItem=OrderItemsSerializer()
    
    class Meta:
        model =Menu
        fields='__all__'
    

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields='__all__'