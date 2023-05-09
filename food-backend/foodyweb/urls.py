"""foodyweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView

from databases.views import adminviews 
from databases.views import menuview,cartview,orderview,loginview,restpageviews,userview,reportview
urlpatterns = [
    path('admin/', admin.site.urls),
    path('restaurant/',adminviews.RestaurantView.as_view(),name="xx"),
    path('menu1/',adminviews.MenuView.as_view(),name="xx"),
    # path('',RestaurantView.as_view())
    # path('',TemplateView.as_view(template_name='index.html'))
    #this is to get the 
    path('user/<str:pk>/',loginview.getUser1,name="fooditem"),
    path('cart/<str:pk>/',menuview.getFood1,name="fooditem"),
    path('cartdelete/<str:pk>/',cartview.DeleteAllItems,name="fooditem"),
     path('cartdeleteItem/<str:pk>/<str:pk1>/',cartview.DeleteOneItem,name="fooditem"),
    path('cart1/<str:pk>/',cartview.getCartItems,name="fooditem"),
    path('cart/',cartview.cartPost,name="fooditem"),
    path('saveorder/',orderview.saveOrder,name="fooditem"),
    path('saveorderitems/',orderview.saveOrderItems,name="fooditem"),
    path('restaurant/<str:pk>/',menuview.getMenu1,name="product"),
    path('restadmin/<str:pk>/',restpageviews.getRestID,name="product"),
    #  path('restItems1/<str:pk>/',restpageviews.getRestItems1,name="product"), 
    path('restItems/<str:pk>/<str:pk1>/',restpageviews.getRestItems,name="product"),
    path('putstatus/<str:pk>/',restpageviews.UpdateStatus,name="product"), 
     path('restOrder/<str:pk>/',restpageviews.getRestOrders,name="product"),  
    path('restdetails/<str:pk>/',restpageviews.getRestDetails,name="product"), 
          

    #all user urls
    path('postcprofile/<str:pk>/',userview.saveCProfile,name="product"),
    path('deletedupprofile/<str:pk>/',userview.DeleteDuplicate,name="delete"), 
    path('getuser/<str:pk>/',userview.getUser,name="product"), 
     path('getreport/',reportview.getreport,name="product"),      
    path('getuserorder/<str:pk>/',orderview.getUsersOrders,name="product"), 
    path('auth/',include('djoser.urls')),
    path('auth/',include('djoser.urls.jwt')),
   
]

urlpatterns+=[re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]