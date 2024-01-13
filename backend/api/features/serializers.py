# features/serializers.py
from rest_framework import serializers
from .models import Feature

class FeatureSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Feature
        fields = ['id', 'name', 'description', 'image']

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)

