# Generated by Django 4.0.2 on 2023-01-22 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0018_cart_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='Role',
            field=models.IntegerField(default=1, max_length=1),
            preserve_default=False,
        ),
    ]
