from rest_framework import serializers
from results.models import Result  
from quizzes.models import Quiz
from users.models import User

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['id', 'name', 'topic', 'number_of_questions', 'time', 'pass_score', 'difficulty']

class ResultSerializer(serializers.ModelSerializer):
    quiz = QuizSerializer()

    class Meta:
        model = Result
        fields = ['quiz', 'score']

class UserSerializer(serializers.ModelSerializer):
    owned_quizzes = QuizSerializer(many=True)
    completed_quizzes = ResultSerializer(many=True, source='result_set')

    class Meta:
        model = User
        fields = ['id', 'username', 'bio', 'profile_picture', 'owned_quizzes', 'completed_quizzes']