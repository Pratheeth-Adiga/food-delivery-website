# Generated by Django 4.0.2 on 2023-01-21 07:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0014_cart_user_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='Amount',
        ),
        migrations.RemoveField(
            model_name='cart',
            name='Cust_Id',
        ),
        migrations.RemoveField(
            model_name='cart',
            name='Total_No_items',
        ),
    ]
