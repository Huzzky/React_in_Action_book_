from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Post, User
from .serializers import PostSerializer, UserSerializer


class PostAndUserView(APIView):
    def get(self, request):
        posts = Post.objects.all()
        users = User.objects.all()

        serializerPost = PostSerializer(posts, many=True)
        serializerUser = UserSerializer(users, many=True)

        return Response({
            "posts": serializerPost.data,
            "users": serializerUser.data,
        })