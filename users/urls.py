from django.urls import path
from .views import RegisterView, UserProfileView
from rest_framework_simplejwt.views import TokenObtainPairView 

urlpatterns =[ 
  path('register', RegisterView.as_view()),
  path('login', TokenObtainPairView.as_view()),
  path('profile/<int:pk>', UserProfileView.as_view(), name='user-profile')
]