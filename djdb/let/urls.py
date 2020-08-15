from django.urls import path

from .views import PostAndUserView


app_name = "let"

# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('pau/', PostAndUserView.as_view()),
]