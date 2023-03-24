from django.db import models
from subject.models import Subject
from django.contrib.auth import get_user_model

User = get_user_model()

class Deadline(models.Model):
    description = models.CharField(max_length=10000)
    exam =  models.BooleanField()
    date =  models.DateField()
    subject = models.ForeignKey(Subject, related_name='subject_deadline', on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, related_name='deadline_create', on_delete=models.CASCADE)