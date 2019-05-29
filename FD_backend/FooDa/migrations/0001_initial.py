# Generated by Django 2.2.1 on 2019-05-20 13:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import tagging.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Archive',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='Archive', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('visitorCount', models.IntegerField(default=0)),
                ('sortOption', models.CharField(default='id', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('rName', models.CharField(max_length=20)),
                ('rAddress', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('content', models.TextField()),
                ('eatWhen', models.DateTimeField(blank=True)),
                ('postTime', models.DateTimeField(auto_now_add=True)),
                ('publicStatus', models.BooleanField(default=False)),
                ('score', models.IntegerField(blank=True)),
                ('hits', models.IntegerField(default=0)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='')),
                ('tags', tagging.fields.TagField(blank=True, max_length=255)),
                ('archive', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review_archive', to='FooDa.Archive')),
                ('restaurantId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='FooDa.Restaurant')),
            ],
        ),
        migrations.CreateModel(
            name='WeeklyRanking',
            fields=[
                ('week', models.IntegerField(primary_key=True, serialize=False)),
                ('tag', tagging.fields.TagField(blank=True, max_length=255)),
                ('reviews', models.ManyToManyField(related_name='ranking_reviews', to='FooDa.Review')),
                ('users', models.ManyToManyField(related_name='ranking_users', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='GuestComment',
            fields=[
                ('createdTime', models.DateTimeField(auto_now_add=True)),
                ('content', models.TextField()),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='guest_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
