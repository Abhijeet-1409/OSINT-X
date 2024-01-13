# queries/views.py
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Query
from .serializers import QuerySerializer


def your_function() :
    return  { 'arr' : [1,2,3] }


class QueryCreateAPIView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = QuerySerializer

    def perform_create(self, serializer):
        # Call your function here and update the output field
        user = self.request.user if self.request.user.is_authenticated else None
        result = your_function()
        serializer.save(user=user, output=result)

class QueryListAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = QuerySerializer

    def get_queryset(self):
        user = self.request.user
        return Query.objects.filter(user=user)

