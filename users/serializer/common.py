from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()



class RegistrationSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)
  
  class Meta:
    model = User
    fields = '__all__'
    extra_fields = ['password_confirmation']

  def validate(self, data):
    print('data ->', data)
    password = data.get('password')
    password_confirmation = data.get('password_confirmation')
    print(data)
    if password != password_confirmation:
      raise serializers.ValidationError('Passwords do not match!')

    print(data)
    return data
  
  def create(self, validated_data):
    password_confirmation = validated_data.pop('password_confirmation')
    print('Validate data ->', validated_data)
    user = User.objects.create_user(**validated_data)
    return user
  
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'profile_picture', 'bio')  # Add any other fields you want to include