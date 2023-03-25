from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer
from subject.models import Subject

@api_view(['GET'])
def get_notes(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    print(subject)
    notes =  Note.objects.filter(subject=subject).order_by('-id')
    print(notes)
    serializer = NoteSerializer(notes, many=True)
    return Response({"results":serializer.data})

@api_view(['GET'])
def search_notes(request,subject_id):
    search = request.GET.get('search')
    subject = Subject.objects.filter(id=subject_id).first()
    notes =  Note.objects.filter(subject=subject, topic__icontains=search).order_by('-id')
    serializer = NoteSerializer(notes, many=True)
    return Response({"results":serializer.data})

@api_view(['POST'])
def create_note(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    serializer = NoteSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save(created_by=request.user, subject=subject)
        return Response({'message':'Create'})

