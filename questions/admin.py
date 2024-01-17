from django.contrib import admin
from .models import Question, Answer

# Register your models here.
# Would be nice to add a question using TabularInline, which would then be able to add the answers in line and TabularInLine will give us the ability to do that.

class AnswerInLine(admin.TabularInline):
  model = Answer

class QuestionAdmin(admin.ModelAdmin):
  inlines = [AnswerInLine]

admin.site.register(Question, QuestionAdmin)