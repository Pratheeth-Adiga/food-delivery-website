# Generated by Django 4.0.2 on 2023-01-14 13:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0005_alter_useraccount_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='role',
        ),
    ]