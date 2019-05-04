from django.db import models
from users.models import CustomUser
import re

class Archive(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'Archive', primary_key = True, on_delete = models.CASCADE)
    visitorCount = models.IntegerField(default = 0)

class Restaurant(models.Model):
    id = models.AutoField(primary_key = True)
    rName = models.CharField(max_length = 20)
    rAddress = models.TextField()

class Tag(models.Model):
    tagName = models.CharField(max_length = 10, unique = True, null = False, primary_key = True)
    referedCount = models.IntegerField(default = 0)

    def __str__(self):
        return 'Tag[tagName : {tagName}]'.format(tagName = self.tagName)


class GuestComment(models.Model):
    user = models.OneToOneField(CustomUser, related_name = 'guest_user', on_delete = models.CASCADE)
    createdTime = models.DateTimeField(auto_now_add = True)
    content = models.TextField()
    id = models.AutoField(primary_key = True)


class Review(models.Model):
    slug = models.SlugField(unique = True)
    url = models.URLField()
    content = models.TextField()
    eatWhen = models.DateTimeField(blank = True,)
    postTime = models.DateTimeField(auto_now_add = True)
    publicStatus = models.BooleanField(default = False)
    score = models.IntegerField(blank = True,)
    restaurantId = models.ForeignKey(Restaurant, on_delete = models.CASCADE)
    archive = models.ForeignKey(Archive, related_name = 'review_archive', on_delete = models.CASCADE)
    hits = models.IntegerField(default = 0)
    tags = models.ManyToManyField(Tag, blank = True, related_name = 'review_tags', default = -1)
    id = models.AutoField(primary_key = True)

    def tag_save(self):
        tag_list = re.findall(r'#(\w+)\b', self.content)

        if not tag_list:
            return

        for t in tag_list:
            tag, tag_created = Tag.objects.get_or_create(name = t)
            self.tags.add(tag)

class WeeklyRanking(models.Model):
    week = models.IntegerField(primary_key = True)
    users = models.ManyToManyField(CustomUser, related_name = 'ranking_users')
    reviews = models.ManyToManyField(Review, related_name = 'ranking_reviews')
    tags = models.ManyToManyField(Tag, related_name = 'ranking_tags')


#class TagReview(models.Model):
#    TagName = models.OneToOneField(Tag, related_name = 'Tagname_tag', on_delete = models.CASCADE)
#    ReviewId = models.OneToOneField(Review, related_name = 'ReviewId_review', on_delete = models.CASCADE)
#    id = models.AutoField(primary_key = True) #temp
