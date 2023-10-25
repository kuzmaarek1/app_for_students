from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.paginator import Paginator
from .models import Subject
from .serializers import SubjectSerializer

page_number = 17

@api_view(['GET'])
def get_subjects(request):
    number = request.GET.get('page')
    subjects =  Subject.objects.filter(created_by=request.user).order_by('-id')
    paginator = Paginator(subjects, page_number)
    page_subjects = paginator.get_page(number)
    serializer = SubjectSerializer(page_subjects, many=True)
    return Response({"results":serializer.data, "has_next":page_subjects.has_next(), "page":number})

@api_view(['GET'])
def get_subject(request):
    subject =  Subject.objects.filter(created_by=request.user).order_by('-id').first()
    serializer = SubjectSerializer(subject)
    return Response({"results":serializer.data})

@api_view(['GET'])
def search_subjects(request):
    number = request.GET.get('page')
    search = request.GET.get('search')
    subject =  Subject.objects.filter(created_by=request.user, name__icontains=search).order_by('-id')
    paginator = Paginator(subject, page_number)
    page_subjects = paginator.get_page(number)
    serializer = SubjectSerializer(page_subjects, many=True)
    return Response({"results":serializer.data, "has_next":page_subjects.has_next(), "page":number})

@api_view(['POST'])
def create_subject(request):
    serializer = SubjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(created_by=request.user)
        return Response(serializer.data)

@api_view(['PUT'])
def update_subject(request, subject_id):
    subject =  Subject.objects.filter(id=subject_id).first()
    serializer = SubjectSerializer(subject, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

@api_view(['PUT'])
def delete_subject(request, subject_id):
    Subject.objects.filter(id=subject_id, created_by=request.user).delete()
    subject =  Subject.objects.filter(created_by=request.user).order_by('-id').first()
    serializer = SubjectSerializer(subject)
    return Response({'idDeleted': subject_id, 'newSubject': serializer.data})
