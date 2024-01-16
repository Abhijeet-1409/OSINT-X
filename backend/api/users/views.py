# user/views.py
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class RegisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = CustomUserSerializer

class LoginView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer

class UserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]