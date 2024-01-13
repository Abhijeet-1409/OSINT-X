# queries/serializers.py
from rest_framework import serializers
from .models import Query

class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Query
        fields = ['id', 'feature', 'user', 'query', 'query_image', 'query_pdf', 'output']
