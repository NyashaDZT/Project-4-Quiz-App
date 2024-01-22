from rest_framework.generics import CreateAPIView, RetrieveAPIView
from .serializer.common import RegistrationSerializer
from django.contrib.auth import get_user_model
from .serializer.populated import UserSerializer
from rest_framework.permissions import IsAuthenticated

User= get_user_model()

# Create your views here.
class RegisterView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegistrationSerializer

  def perform_create(self, serializer):
        # Access the data received in the request
        data = self.request.data
        print("Received data:", data)

        serializer.save()
  

class UserProfileView(RetrieveAPIView):
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]

  def get_object(self):
      return self.request.user
