# features/views.py
from rest_framework import generics
from .models import Feature
from .serializers import FeatureSerializer

class FeatureListAPIView(generics.ListAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

