# Generated by Django 4.0.2 on 2023-01-23 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0024_alter_orderitems_food_id_alter_orderitems_order_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='Mobile',
            field=models.IntegerField(default=9421342),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='Name',
            field=models.CharField(default='NULL', max_length=100),
            preserve_default=False,
        ),
    ]