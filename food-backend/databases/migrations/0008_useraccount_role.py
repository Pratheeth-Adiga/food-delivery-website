# Generated by Django 4.0.2 on 2023-01-14 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0007_delete_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='role',
            field=models.CharField(default=False, max_length=255),
        ),
    ]
