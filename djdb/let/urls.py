from django.urls import path

from .views import PostView, UserView


app_name = "let"

# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('p/', PostView.as_view()),
    path('u/', UserView.as_view()),
]