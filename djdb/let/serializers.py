from rest_framework import serializers

from .models import Post, User

class PostSerializer(serializers.Serializer):
    uuid_post = serializers.UUIDField()
    content_post = serializers.CharField()
    date_post = serializers.DateTimeField(format="%h %d, %Y in %H:%M:%S")
    like_post = serializers.IntegerField()
    link_post = serializers.CharField()
    location_post = serializers.CharField()
    user_post_id = serializers.IntegerField()

    def create(self, validated_data):
        return Post.objects.create(**validated_data)


class UserSerializer(serializers.Serializer):
    uuid_user = serializers.UUIDField()
    name_user = serializers.CharField()

    def create(self, validated_data):
        return User.objects.create(**validated_data)
