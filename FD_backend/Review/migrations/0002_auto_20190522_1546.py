# Generated by Django 2.1.7 on 2019-05-22 06:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Restaurant', '0001_initial'),
        ('Archive', '0001_initial'),
        ('Review', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='archive',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review_archive', to='Archive.Archive'),
        ),
        migrations.AddField(
            model_name='review',
            name='restaurantId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Restaurant.Restaurant'),
        ),
    ]
