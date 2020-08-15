from rest_framework import serializers

class PostSerializer(serializers.Serializer):
    uuid_post = serializers.UUIDField()
    content_post = serializers.CharField()
    date_post = serializers.DateTimeField()
    image_post = serializers.FileField()
    like_post = serializers.IntegerField()
    link_post = serializers.CharField()
    location_post = serializers.CharField()


class UserSerializer(serializers.Serializer):
    uuid_user = serializers.UUIDField()
    name_user = serializers.CharField()
    img_user = serializers.FileField()
