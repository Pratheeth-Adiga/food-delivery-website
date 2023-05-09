from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager
# Create your models here.
from django.conf import settings


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    # name = models.CharField(max_length=255)
    # role=models.CharField(max_length=255,default=False)
    # last_name = models.CharField(max_length=255)
    # Role= models.IntegerField(max_length=1)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['Role']

    # def get_role(self):
    #     return self.Role

    # def get_short_name(self):
    #     return self.first_name
    
    def __str__(self):
        return self.email




# class User(models.Model):
#     roles=(
#         (1,"Customer"),
#         (2,"Restaurant"),
#         (3,"Delivery Agent"),
#     )
#     email = models.EmailField(max_length=100,unique=True,primary_key=True)
#     password= models.CharField(max_length=100)
#     phone_no=models.IntegerField()
#     # Role_Id=models.IntegerField(max_length=1,choices=roles)
#     def __str__(self):
#         return self.name

class Customer(models.Model):
    Username=models.CharField(max_length=100)
    User_Id=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        default=1
    )
    Addr=models.TextField(max_length=500)
    Name=models.CharField(max_length=100)
    Mobile=models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Restaurant(models.Model):
    GST_no =models.IntegerField(primary_key=True)
    User_Id=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        default=1
    )
    # Role_Id=models.ForeignKey(User,null=True,on_delete=models.CASCADE)
    Addr=models.TextField(max_length=500)
    Mgr_name=models.CharField(max_length=100)
    Name=models.CharField(max_length=100,default="NULL")
    Mgr_no=models.IntegerField()
    Descr=models.TextField()
    Url=models.CharField(max_length=300)
    # Images=models.ImageField()
    def __str__(self):
        return self.Name


class DeliveryAgent(models.Model):
    DL_no=models.IntegerField(primary_key=True)
    # Role_Id=models.ForeignKey(User,null=True,on_delete=models.CASCADE)
    Location=models.CharField(max_length=100)
    License=models.ImageField()
    def __str__(self):
        return self.name

class Menu(models.Model):
    Name=models.CharField(max_length=100)
    Tag=models.CharField(max_length=100)
    Price=models.DecimalField(decimal_places=2,max_digits=7)
    GST_no=models.ForeignKey(Restaurant,on_delete=models.CASCADE)

    Descr=models.CharField(max_length=700)
    Url=models.CharField(max_length=300)
    #Photo=models.ImageField()
    def __str__(self):
        return self.Name

class Cart(models.Model):
    # Cust_Id=models.ForeignKey(Customer,on_delete=models.CASCADE)
    User_Id=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        default=1
    )
    Food_Id=models.ForeignKey(Menu,on_delete=models.CASCADE)
    Quantity= models.IntegerField(max_length=1)
    # Amount = models.DecimalField(decimal_places=2,max_digits=7)
    # Total_No_items=models.IntegerField()
    def __str__(self):
        return self.name



class Order(models.Model):
    status=(
        (1,"Order Accepted"),
        (2,"Out for Delivery"),
        (3,"Delivered"),
    )
    User_Id=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        default=1
    )
    Status= models.IntegerField(max_length=1,choices=status)
    Price=models.DecimalField(decimal_places=2,max_digits=7)

    def __str__(self):
        return self.User_Id

class OrderItems(models.Model):
    Order_Id=models.ForeignKey(Order,on_delete=models.CASCADE,related_name="order_info")
    Food_Id=models.ForeignKey(Menu,on_delete=models.CASCADE,related_name="ordered_food")
    def __str__(self):
        return self.id

class Payment(models.Model):
    status=(
        (1,"Paid"),
        (2,"Not paid"),
    )
    Cust_Id=models.ForeignKey(Customer,on_delete=models.CASCADE)
    Satus=models.IntegerField(choices=status)
    create_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name

""""
class Address(models.Model):
    Cust_Id = models.ForeignKey(Customer)
    Location = models.CharField(max_length=100)

    class Meta:
        constraints = [
            UniqueConstraint(fields=['Cust_Id', 'Location'], name='unique_primary_key'),
        ]
"""

class Wallet(models.Model):
    Cust_Id=models.ForeignKey(Customer,on_delete=models.CASCADE)
    Value=models.DecimalField(decimal_places=2,max_digits=7)
    def __str__(self):
        return self.name
    

