# Generated by Django 4.0.2 on 2023-01-14 13:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0006_remove_useraccount_role'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
