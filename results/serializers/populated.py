from .common import ResultSerializer
from quizzes.serializers.populated import PopulatedQuizSerializer
from users.serializer.common import UserSerializer

class PopulatedResultSerializer(ResultSerializer):
    quiz = PopulatedQuizSerializer(read_only=True)
    user = UserSerializer(read_only=True)  # Replace YourUserSerializer with your actual UserSerializer
    
    class Meta(ResultSerializer.Meta):
        fields = ResultSerializer.Meta.fields + ('quiz', 'user')