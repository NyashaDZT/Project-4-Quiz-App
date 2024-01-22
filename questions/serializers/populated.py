from .common import AnswerSerializer, QuestionSerializer
from ..models import Answer, Question

class PopulatedQuestionSerializer(QuestionSerializer):
    answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
      model = Answer
      fields = AnswerSerializer.Meta.fields + ('answers',)
    

class PopulatedAnswerSerializer(AnswerSerializer):
    question = QuestionSerializer(read_only=True)

    class Meta:
      model = Answer
      fields = AnswerSerializer.Meta.fields + ('question',)
    