from django.db import models

class User(models.Model):
    uuid_user = models.UUIDField(default=uuid.uuid4, unique=True,editable=False)
    name_user = models.CharField(max_length=64, unique=True)
    img_user = models.FileField(upload_to='img/users', max_length=100, blank=True,
    null=True)

    def __str__(self):
        return self.name_user
    
class Post(models.Model):
    uuid_post = models.UUIDField(default=uuid.uuid4, unique=True,editable=False)
    content_post = models.TextField(blank=False)
    date_post = models.DateTimeField(auto_now=False, auto_now_add=True)
    image_post = models.FileField(upload_to='img/posts', default="",
    max_length=100, null=True, blank=True)
    like_post = models.IntegerField(default=0, blank=True, editable=False)
    link_post = models.CharField(max_length=150,null=True, default="" ,blank=True)
    location_post = models.CharField(max_length=250,null=True, default="" ,blank=True)
    author = models.ForeignKey("User", on_delete=models.CASCADE)

    def __str__(self):
        return self.content_post

class Like(models.Model):
    uuid_like = models.UUIDField(default=uuid.uuid4, unique=True,editable=False)
    like_post = models.ForeignKey("Post", on_delete=models.CASCADE)
    like_by_usr = models.ForeignKey("User", on_delete=models.CASCADE)


    def __str__(self):
        return str(self.uuid_like)
    

class Comment(models.Model):
    uuid_comment = models.UUIDField(default=uuid.uuid4, unique=True,editable=False)
    content_comment = models.TextField(blank=False)
    date_comment = models.DateTimeField(auto_now=False, auto_now_add=True)
    user_comment. = models.ForeignKey("User", on_delete=models.CASCADE)
    post_comment = models.ForeignKey("Post", on_delete=models.CASCADE)

    def __str__(self):
        return self.content_comment
