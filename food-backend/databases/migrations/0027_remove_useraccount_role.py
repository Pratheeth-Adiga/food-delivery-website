# Generated by Django 4.0.2 on 2023-01-23 18:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0026_alter_customer_mobile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='Role',
        ),
    ]
