from django.db import models
from subject.models import Subject
from image.models import Image
from django.contrib.auth import get_user_model

User = get_user_model()

class Note(models.Model):
    number = models.IntegerField()
    topic = models.CharField(max_length=100)
    description = models.CharField(max_length=70000)
    date =  models.DateField()
    subject = models.ForeignKey(Subject, related_name='subject_note', on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, related_name='note_create', on_delete=models.CASCADE)
    image = models.ManyToManyField(Image, related_name='image', null=True)