from .common import ResultSerializer
from quizzes.serializers.populated import PopulatedQuizSerializer
from users.serializer.common import UserSerializer

class PopulatedResultSerializer(ResultSerializer):
    quiz = PopulatedQuizSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    
    class Meta(ResultSerializer.Meta):
        fields = ResultSerializer.Meta.fields + ('quiz', 'user')