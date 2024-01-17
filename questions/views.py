from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Question, Answer
from .serializers.common import QuestionSerializer, AnswerSerializer
from .serializers.populated import PopulatedQuestionSerializer, PopulatedAnswerSerializer
from libs.permissions import IsOwnerOfQuizOrReadOnly, IsOwnerOfQuestionOrReadOnly

class QuestionListCreateView(ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class QuestionDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = PopulatedQuestionSerializer  # Use the PopulatedQuestionSerializer for detailed views
    permission_classes = [IsOwnerOfQuizOrReadOnly]

class AnswerListCreateView(ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class AnswerDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Answer.objects.all()
    serializer_class = PopulatedAnswerSerializer
    permission_classes = [IsOwnerOfQuestionOrReadOnly] # user the question object to check for ownership to the quiz before allowing user to change anything.