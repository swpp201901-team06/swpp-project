# Generated by Django 2.2.1 on 2019-06-15 18:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Archive',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='archive', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('visitorCount', models.IntegerField(default=0)),
                ('sortOption', models.CharField(default='id', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='GuestComment',
            fields=[
                ('createdTime', models.DateTimeField(auto_now_add=True)),
                ('content', models.TextField()),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='guest_comments', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
