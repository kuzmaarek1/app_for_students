from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.paginator import Paginator
from .models import Deadline
from .serializers import DeadlineSerializer
from subject.models import Subject

page_number = 2

@api_view(['GET'])
def get_deadlines(request, subject_id):
    number = request.GET.get('page')
    subject = Subject.objects.filter(id=subject_id).first()
    deadlines =  Deadline.objects.filter(subject=subject).order_by('-date')
    paginator = Paginator(deadlines, page_number)
    page_deadlines = paginator.get_page(number)
    serializer = DeadlineSerializer(page_deadlines, many=True)
    return Response({"results":serializer.data, "has_next":page_deadlines.has_next()})

@api_view(['POST'])
def create_deadline(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    serializer = DeadlineSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(created_by=request.user, subject=subject)
        return Response({'message':'Create'})

@api_view(['PUT'])
def update_deadline(request, subject_id, deadline_id):
    subject = Subject.objects.filter(id=subject_id).first()
    deadline =Deadline.objects.filter(subject=subject, id=deadline_id).first()
    serializer = DeadlineSerializer(deadline,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message':'Update'})

@api_view(['PUT'])
def delete_deadline(request, subject_id, deadline_id):
    subject = Subject.objects.filter(created_by=request.user, id=subject_id).first()
    Deadline.objects.filter(id=deadline_id, subject=subject).delete()
    return Response({'message':'Deleted'})