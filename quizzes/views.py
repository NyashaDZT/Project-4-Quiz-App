from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Quiz
from .serializers.common import QuizSerializer
from .serializers.populated import PopulatedQuizSerializer
from libs.permissions import IsOwnerOrReadOnly  
from libs.views import OwnerListCreateView

class QuizListCreateView(OwnerListCreateView):
  queryset = Quiz.objects.all()
  serializer_class = QuizSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)

class QuizDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Quiz.objects.all()
  permission_classes = [IsOwnerOrReadOnly]

  def get_serializer_class(self):
      if self.request.method == 'PUT':
          return QuizSerializer
      return PopulatedQuizSerializer

