from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from image.models import Image
from .serializers import NoteSerializer
from image.serializers import ImageSerializer
from subject.models import Subject

@api_view(['GET'])
def get_notes(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    notes =  Note.objects.filter(subject=subject).order_by('-id')
    serializer = NoteSerializer(notes, many=True)
    return Response({"results":serializer.data})

@api_view(['GET'])
def get_note(request, subject_id, note_id):
    subject = Subject.objects.filter(id=subject_id).first()
    note =  Note.objects.filter(subject=subject).get(id=note_id)
    serializer = NoteSerializer(note, many=False)
    return Response({"results":serializer.data})

@api_view(['GET'])
def search_notes(request,subject_id):
    search = request.GET.get('search')
    print(search)
    subject = Subject.objects.filter(id=subject_id).first()
    notes =  Note.objects.filter(subject=subject, topic__icontains=search).order_by('-id')
    serializer = NoteSerializer(notes, many=True)
    print(notes)
    return Response({"results":serializer.data})

@api_view(['POST'])
def create_note(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    serializer = NoteSerializer(data=request.data)
    print(serializer)
    print(serializer.is_valid())
    if serializer.is_valid():
        serializer.save(created_by=request.user, subject=subject)
        return Response({'message':'Create'})

@api_view(['PUT'])
def update_note(request, subject_id, note_id):
    subject = Subject.objects.filter(id=subject_id).first()
    note = Note.objects.filter(subject=subject, id=note_id).first()
    serializer = NoteSerializer(note, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message':'Update'})
    
@api_view(['PUT'])
def delete_note(request, subject_id, note_id):
    subject = Subject.objects.filter(created_by=request.user, id=subject_id).first()
    Note.objects.filter(id=note_id, subject=subject).delete()
    return Response({'message':'Deleted'})

@api_view(['PATCH'])
def add_image(request, subject_id, note_id):
    subject = Subject.objects.filter(id=subject_id).first()
    serializer = ImageSerializer(data={'name':request.data['image']})
    note =  Note.objects.filter(subject=subject).get(id=note_id)
    if serializer.is_valid():
        image = serializer.save()
        note.image.add(image)
        note.save()
        return Response({"message":"Add image"})

@api_view(['PATCH'])
def delete_image(request, image_id):
    Image.objects.filter(id=image_id).delete()
    return Response({'message':'Deleted image'})