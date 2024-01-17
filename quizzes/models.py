from django.db import models

# Create your models here.
DIFF_CHOICES = (
  ('easy', 'easy'),
  ('medium', 'medium'),
  ('hard', 'hard')
)

class Quiz(models.Model):
  name = models.CharField(max_length=150)
  topic = models.CharField(max_length=120)
  number_of_questions= models.IntegerField()
  time = models.IntegerField(help_text='Duration to answer question')
  pass_score= models.IntegerField(help_text="Minimum pass score.")
  difficulty = models.CharField(max_length=6, choices=DIFF_CHOICES)
  owner = models.ForeignKey(
        to='users.User',
        on_delete=models.CASCADE,
        related_name='owned_quizzes',
        null=True
        )

  def __str__(self):
    return f'{self.topic} - {self.name}'
  
  def get_questions(self):
    return self.question_set.all()
  
class Meta:
  verbose_name_plural = 'Quizzes'