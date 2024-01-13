# queries/urls.py
from django.urls import path
from .views import QueryCreateAPIView, QueryListAPIView

urlpatterns = [
    path('create/', QueryCreateAPIView.as_view(), name='query-create'),
    path('list/', QueryListAPIView.as_view(), name='query-list'),
]
