from django.db import models

# Create your models here.


class Mandatory_trainings(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='pictures')
    description = models.TextField()
    department = models.CharField(max_length=100)
    video_urls = models.URLField()
    documents_urls = models.URLField()
    estimated_time = models.CharField(max_length=200)
    date = models.DateField()
    def __str__(self):
        return self.title

class Contents(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='pictures')
    description = models.TextField()
    department = models.CharField(max_length=100)
    video_urls = models.URLField()
    documents_urls = models.URLField()
    estimated_time = models.CharField(max_length=200)
    date = models.DateField()
    def __str__(self):
        return self.title

class Trainee(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField()
    position = models.CharField(max_length=100)
    department = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name + ' ' + self.middle_name + ' ' + self.last_name 

