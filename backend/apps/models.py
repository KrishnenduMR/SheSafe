from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    def __str__(self):
        return f"User-id:{self.id} Username:{self.username}"

class Location(models.Model):
    loc_street=models.CharField(max_length=64)
    loc_area=models.CharField(max_length=200)
    locx=models.FloatField()
    locy=models.FloatField()
    count=models.IntegerField()
    def __str__(self):
        return f""

class Story(models.Model):
    user_id=models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_id")
    story=models.CharField(max_length=100)
    story_x=models.FloatField()
    story_y=models.FloatField()
    def __str__(self):
        return f""
