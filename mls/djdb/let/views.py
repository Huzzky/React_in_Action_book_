from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Post, User
from .serializers import PostSerializerGet, PostSerializerPost, UserSerializer


class PostViewGet(APIView):
    def get(self, request):
        posts = Post.objects.all()

        serializerPost = PostSerializerGet(posts, many=True)

        return Response({
            "posts": serializerPost.data
        })

class PostViewPost(APIView):
    def post(self, request):
        post = request.data.get('posts')

        serializerPost =  PostSerializerPost(data=post)

        if serializerPost.is_valid(raise_exception=True):
            post_saved = serializerPost.save()
            
        return Response({
            "success": "Post '{}' created successfully".format(post_saved.content_post)
        })


class UserView(APIView):
    def get(self, request):
        users = User.objects.all()

        serializerUser = UserSerializer(users, many=True)

        return Response({
            "users": serializerUser.data
        })
    
    def post(self, request):
        user = request.data.get('users')

        serializerUser = UserSerializer(data=user)

        if serializerUser.is_valid(raise_exception=True):
            user_saved = serializerUser.save()

        return Response({
            "success": "User '{}' created successfully".format(user_saved.name_user)
        })

