# queries/views.py
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Query
from .serializers import QuerySerializer
from features.models import Feature
from core.osint import Osint

class QueryCreateAPIView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = QuerySerializer

    def perform_create(self, serializer):
        # Call your function here and update the output field
        feature_id = self.request.data.get('feature')
        query = self.request.data.get('query')
        query_img = self.request.FILES.get('query_image').name if self.request.FILES.get('query_image') else None
        query_pdf = self.request.FILES.get('query_pdf').name if self.request.FILES.get('query_pdf') else None
        feature_name = Feature.objects.get(id=feature_id).name
        user = self.request.user if self.request.user.is_authenticated else None
        instance = serializer.save(user=user)

        # Now call the Osint function with the saved query_pdf file
        result = Osint(feature_name, query, query_img, query_pdf)
        
        # Update the output field with the result
        instance.output = result
        instance.save()

class QueryListAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = QuerySerializer

    def get_queryset(self):
        user = self.request.user
        return Query.objects.filter(user=user)

