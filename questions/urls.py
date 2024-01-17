from django.urls import path
from .views import QuestionListCreateView, QuestionDetailView, AnswerListCreateView, AnswerDetailView

# Endpoints:
# Questions list and create: /api/questions/questions/
# Question detail: /api/questions/questions/<id>/
# Answers list and create: /api/questions/answers/
# Answer detail: /api/questions/answers/<id>/


urlpatterns = [
    # Question URLs
    path('questions/', QuestionListCreateView.as_view(), name='question-list'),
    path('questions/<int:pk>/', QuestionDetailView.as_view(), name='question-detail'),

    # Answer URLs
    path('answers/', AnswerListCreateView.as_view(), name='answer-list'),
    path('answers/<int:pk>/', AnswerDetailView.as_view(), name='answer-detail'),
]