# features/models.py
from django.db import models

class Feature(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='feature_images/')

    def __str__(self):
        return self.name

