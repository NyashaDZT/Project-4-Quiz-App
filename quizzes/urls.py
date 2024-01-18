from django.urls import path
from .views import QuizListCreateView, QuizDetailView

urlpatterns = [
    # Path: /quiz/
    # Methods: GET, POST
    path('', QuizListCreateView.as_view(), name='index-view'),

    # Path: /quiz/:id/
    # Methods: GET, PUT, PATCH, DELETE
    path('<int:pk>/', QuizDetailView.as_view(), name='quiz-detail'),
]