from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.paginator import Paginator
from .models import Todolist
from .serializers import TodolistSerializer
from subject.models import Subject

page_number = 2

@api_view(['GET'])
def get_todolists_done(request, subject_id):
    number = request.GET.get('page')
    subject = Subject.objects.filter(id=subject_id).first()
    todolists = Todolist.objects.filter(subject=subject, isDoned=True).order_by('-id')
    paginator = Paginator(todolists, page_number)
    page_todolists = paginator.get_page(number)
    serializer = TodolistSerializer(page_todolists, many=True)
    return Response({"results":serializer.data, "has_next":page_todolists.has_next(), "page":number})

@api_view(['GET'])
def get_todolists_not_done(request, subject_id):
    number = request.GET.get('page')
    subject = Subject.objects.filter(id=subject_id).first()
    todolists = Todolist.objects.filter(subject=subject, isDoned=False).order_by('-id')
    paginator = Paginator(todolists, page_number)
    page_todolists = paginator.get_page(number)
    serializer = TodolistSerializer(page_todolists, many=True)
    return Response({"results":serializer.data, "has_next":page_todolists.has_next(), "page":number})

@api_view(['POST'])
def create_todolist(request, subject_id):
    subject = Subject.objects.filter(id=subject_id).first()
    serializer = TodolistSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save(created_by=request.user, subject=subject)
        return Response({'message':'Create'})
    
@api_view(['PUT'])
def update_todolist(request, subject_id, todolist_id):
    subject = Subject.objects.filter(id=subject_id).first()
    todolist = Todolist.objects.filter(subject=subject, id=todolist_id).first()
    serializer = TodolistSerializer(todolist, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message':'Update'})

@api_view(['PATCH'])
def change_doned_todolist(request, subject_id, list_id):
    subject = Subject.objects.filter(id=subject_id).first()
    todolists = Todolist.objects.get(id=list_id, subject=subject)
    print(request.data['isDoned'])
    serializer = TodolistSerializer(todolists, data={'isDoned':request.data['isDoned'],'description':todolists.description})
    if serializer.is_valid():
        serializer.save(created_by=request.user, subject=subject)
        return Response({'message':'Doned'})


@api_view(['PUT'])
def delete_todolist(request, subject_id, todolist_id):
    subject = Subject.objects.filter(created_by=request.user, id=subject_id).first()
    Todolist.objects.filter(id=todolist_id, subject=subject).delete()
    return Response({'message':'Deleted'})