# Generated by Django 2.2.1 on 2019-06-15 18:19

from django.db import migrations, models
import django.db.models.deletion
import tagging.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Restaurant', '__first__'),
        ('Archive', '__first__'),
    ]

    operations = [
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
                ('archive', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='Archive.Archive')),
                ('restaurantId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Restaurant.Restaurant')),
            ],
        ),
    ]
