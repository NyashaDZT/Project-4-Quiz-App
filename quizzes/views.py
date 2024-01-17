from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Quiz
from .serializers.common import QuizSerializer
from .serializers.populated import PopulatedQuizSerializer
from libs.permissions import IsOwnerOrReadOnly  # Assuming you have this permission class

class QuizListCreateView(ListCreateAPIView):
  queryset = Quiz.objects.all()
  serializer_class = QuizSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)

class QuizDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Quiz.objects.all()
  # Use the PopulatedQuizSerializer for detailed views
  permission_classes = [ IsOwnerOrReadOnly]

  def get_serializer_class(self):
    print('self request method ->', self.request.method)
    if self.request.method == 'PUT':
        return QuizSerializer
    return PopulatedQuizSerializer