from django.shortcuts import render

# Create your views here.
from rest_framework.generics import DestroyAPIView
from .serializers.common import ReviewSerializer
from .models import Review
from libs.views import OwnerListCreateView
from libs.permissions import IsOwnerOrReadOnly

# Path: /reviews/
# Methods: GET, POST
class ReviewCreateView(OwnerListCreateView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

# Path: /reviews/:pk/
# Methods: DELETE
class ReviewDestroyView(DestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]
