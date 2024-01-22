from rest_framework.generics import CreateAPIView
from .serializer.common import RegistrationSerializer
from django.contrib.auth import get_user_model

User= get_user_model()

# Create your views here.
class RegisterView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegistrationSerializer

  def perform_create(self, serializer):
        # Access the data received in the request
        data = self.request.data
        print("Received data:", data)

        # Perform the create operation using the serializer
        serializer.save()
  
