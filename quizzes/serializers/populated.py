from .common import QuizSerializer
from questions.serializers.common import QuestionSerializer
from questions.serializers.populated import PopulatedQuestionSerializer
from ..models import Quiz

class PopulatedQuizSerializer(QuizSerializer):
    questions = PopulatedQuestionSerializer(many=True, read_only=True)

    class Meta:
        model= Quiz
        fields = QuizSerializer.Meta.fields + ('questions',)