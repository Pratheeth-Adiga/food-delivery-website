# Generated by Django 4.0.2 on 2023-01-23 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0025_customer_mobile_customer_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='Mobile',
            field=models.CharField(max_length=100),
        ),
    ]