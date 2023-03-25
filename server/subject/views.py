from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Subject
from .serializers import SubjectSerializer

@api_view(['GET'])
def get_subjects(request):
    subject =  Subject.objects.filter(created_by=request.user).order_by('-id')
    serializer = SubjectSerializer(subject, many=True)
    return Response({"results":serializer.data})

@api_view(['GET'])
def get_subject(request):
    subject =  Subject.objects.filter(created_by=request.user).order_by('-id').first()
    serializer = SubjectSerializer(subject)
    return Response({"results":serializer.data})

@api_view(['GET'])
def search_subjects(request):
    search = request.GET.get('search')
    subject =  Subject.objects.filter(created_by=request.user, name__icontains=search).order_by('-id')
    serializer = SubjectSerializer(subject, many=True)
    return Response({"results":serializer.data})

@api_view(['POST'])
def create_subject(request):
    serializer = SubjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(created_by=request.user)
    return Response({'message':'Create'})
