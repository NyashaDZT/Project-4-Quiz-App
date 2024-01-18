from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Question, Answer
from .serializers.common import QuestionSerializer, AnswerSerializer
from .serializers.populated import PopulatedQuestionSerializer, PopulatedAnswerSerializer
from libs.permissions import IsOwnerOfQuizOrReadOnly, IsOwnerOfQuestionOrReadOnly
from rest_framework.response import Response
from rest_framework import status

class QuestionListCreateView(ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        data = request.data
        question_data = data.get('question', {})
        answers_data = data.get('answers', [])

        serializer = self.get_serializer(data=question_data)
        serializer.is_valid(raise_exception=True)
        question = serializer.save()

        answer_serializer = AnswerSerializer(data=answers_data, many=True)
        answer_serializer.is_valid(raise_exception=True)
        answer_serializer.save(question=question)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

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