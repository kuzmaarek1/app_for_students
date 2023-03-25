from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Subject(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=10000)
    ects =  models.IntegerField()
    created_by = models.ForeignKey(User, related_name='create_subject', on_delete=models.CASCADE)


