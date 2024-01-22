from django.contrib import admin
from django.urls import path, include, re_path # <-- added this new import re_path
from .views import index # <-- also new

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/quizzes/', include('quizzes.urls')),
  path('api/questions/', include('questions.urls')),
  path('api/auth/', include('users.urls')),
  path('api/results/', include('results.urls')),
  path('api/reviews/', include('reviews.urls')),  
  #...your other views,
  re_path(r'^.*$', index) # <-- have this come last using re path.
]
