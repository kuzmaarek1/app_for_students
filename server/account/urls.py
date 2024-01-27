from django.urls import path
from .views import account_social_media

urlpatterns = [
    path("signInWithSocialMedia/", account_social_media, name="account_social_media")
]
