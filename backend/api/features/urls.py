# features/urls.py
from django.urls import path
from .views import FeatureListAPIView

urlpatterns = [
    path('', FeatureListAPIView.as_view(), name='feature-list'),
]
