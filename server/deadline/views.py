from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Deadline
from .serializers import DeadlineSerializer
from subject.models import Subject

@api_view(['GET'])
def get_deadlines(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    deadlines =  Deadline.objects.filter(subject=subject).order_by('-date')
    serializer = DeadlineSerializer(deadlines, many=True)
    print(serializer.data)
    return Response({"results":serializer.data})

@api_view(['POST'])
def create_deadline(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    serializer = DeadlineSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save(created_by=request.user, subject=subject)
        return Response({'message':'Create'})

