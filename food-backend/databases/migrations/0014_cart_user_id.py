# Generated by Django 4.0.2 on 2023-01-20 09:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0013_alter_useraccount_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='User_Id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
