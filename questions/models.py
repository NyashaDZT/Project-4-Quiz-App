from django.db import models
from quizzes.models import Quiz

# Create your models here.
class Question(models.Model):
  text = models.CharField(max_length=200) # The question
  quiz = models.ForeignKey(
        to='quizzes.Quiz',
        on_delete=models.CASCADE,
        related_name='questions'
    )
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return str(self.text)

  def get_answers(self):
    return self.answer_set.all() #reverse relationship with model.

class Answer(models.Model):
  text = models.CharField(max_length=200)
  correct = models.BooleanField(default=False)
  question = models.ForeignKey(
    Question, 
    on_delete=models.CASCADE, 
    related_name='answers'
    )
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"Question: {self.question.text}, answer:{self.text}, correct{self.correct}"
    
  