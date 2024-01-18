from django.urls import path
from .views import ResultListCreateView, ResultDetailView

urlpatterns = [
    # Result URLs
    path('', ResultListCreateView.as_view(), name='result-list'),
    path('<int:pk>/', ResultDetailView.as_view(), name='result-detail'),
]