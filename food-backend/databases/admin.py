# Register your models here.
from django.contrib import admin

from .models import Customer
from .models import Restaurant
from .models import Wallet
from .models import DeliveryAgent
from .models import Menu
from .models import Order
from .models import Payment


# admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Restaurant)
admin.site.register(Menu)
admin.site.register(Wallet)
admin.site.register(DeliveryAgent)
admin.site.register(Order)
admin.site.register(Payment)

