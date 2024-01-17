from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Result
from .serializers.common import ResultSerializer

class ResultListCreateView(generics.ListCreateAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        quiz_score = self.request.data.get('quiz_score')
        # Associate the current user with the result
        serializer.save(user=self.request.user)

class ResultDetailView(generics.RetrieveAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = [IsAuthenticated]