from .common import AnswerSerializer, QuestionSerializer

class PopulatedQuestionSerializer(QuestionSerializer):
    answers = AnswerSerializer(many=True, read_only=True)
    

class PopulatedAnswerSerializer(AnswerSerializer):
    question = QuestionSerializer(read_only=True)
    