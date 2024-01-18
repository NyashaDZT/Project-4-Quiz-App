from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/quizzes/', include('quizzes.urls')),
    path('api/questions/', include('questions.urls')),
    path('api/auth/', include('users.urls')),
    path('api/results/', include('results.urls')),
     path('api/reviews/', include('reviews.urls'))
]


