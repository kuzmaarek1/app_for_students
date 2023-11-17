from django.shortcuts import render
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.response import Response
from django.core.paginator import Paginator
from rest_framework.authtoken.models import Token

from django.contrib.auth import get_user_model

User = get_user_model()


@api_view(["POST"])
@authentication_classes([])
@permission_classes([])
def account_social_media(request):
    username = request.data["uid"]
    first_name = request.data["firstName"]
    last_name = request.data["lastName"]
    user, created = User.objects.get_or_create(
        username=username, first_name=first_name, last_name=last_name
    )
    token, created = Token.objects.get_or_create(user=user)
    print(f"Token {token.key}")
    return Response({"auth_token": token.key})
