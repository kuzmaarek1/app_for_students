from django.shortcuts import render
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.response import Response
from django.core.paginator import Paginator
from rest_framework.authtoken.models import Token
import jwt
from django.contrib.auth import get_user_model
from social_django.utils import load_strategy
from social_django.models import UserSocialAuth
from django.http import HttpResponse
import firebase_admin
from firebase_admin import credentials, auth

# Zainicjalizuj aplikację Firebase z użyciem pliku konfiguracyjnego
cred = credentials.Certificate(
    "C:/Users/akuzm/Downloads/sm-authentication-app-students-firebase-adminsdk-om56h-adb58d9627.json"
)
firebase_admin.initialize_app(cred)

User = get_user_model()


@api_view(["POST"])
@authentication_classes([])
@permission_classes([])
def account_social_media(request):
    username = request.data["uid"]
    first_name = request.data["firstName"]
    last_name = request.data["lastName"]
    access_token = request.data["token"]
    try:
        decoded_token = auth.verify_id_token(access_token)
        user_id = decoded_token["uid"]
        user, created = User.objects.get_or_create(
            username=username, first_name=first_name, last_name=last_name
        )
        token, created = Token.objects.get_or_create(user=user)
        return Response({"auth_token": token.key})
    except:
        return Response({"error": "error"})
