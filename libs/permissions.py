from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsOwnerOrReadOnly(BasePermission):

  def has_object_permission(self, request, view, obj):
    if request.method in SAFE_METHODS:
      return True
    else:
      return request.user == obj.owner
    
#some fields like question won't have direct ownership within their fields so we will check here if they are the owner of the associated quiz before they can edit.
    
class IsOwnerOfQuizOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        return request.user == obj.quiz.owner
    
#  Checking quiz ownership indirectly, using question object:
    
class IsOwnerOfQuestionOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        # Allow if the request is safe (GET, HEAD, OPTIONS)
        if request.method in SAFE_METHODS:
            return True

        # Check if the user is the owner of the associated quiz
        return request.user == obj.question.quiz.owner