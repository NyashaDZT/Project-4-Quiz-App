from .common import QuizSerializer
from questions.serializers.common import QuestionSerializer

class PopulatedQuizSerializer(QuizSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    
    class Meta(QuizSerializer.Meta):
        fields = QuizSerializer.Meta.fields 