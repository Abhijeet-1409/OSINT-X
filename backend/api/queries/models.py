# queries/models.py
from django.db import models
from features.models import Feature  # Assuming Feature is the model from the "features" app
from users.models import CustomUser  # Assuming CustomUser is the model from the "user" app

class Query(models.Model):
    feature = models.ForeignKey(Feature, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, null=True, blank=True, on_delete=models.SET_NULL)
    query = models.TextField(null=True, blank=True)
    query_image = models.ImageField(upload_to='query_images/', null=True, blank=True)
    query_pdf = models.FileField(upload_to='query_pdfs/', null=True, blank=True)
    output = models.JSONField(null=True, blank=True)

    def __str__(self):
        return f"{self.feature} - {self.user.username if self.user else 'Anonymous'}"
