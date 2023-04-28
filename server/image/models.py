from django.db import models

class Image(models.Model):
    name = models.ImageField(null=True, blank=True, upload_to="images/")
