from .models import Subject
from rest_framework import serializers

class SubjectSerializer(serializers.ModelSerializer):
     class Meta:
        model = Subject
        read_only_fields = (
            'created_by',
        )
        fields=(
            'id',
            'name',
            'description',
            'ects', 
            'created_by'
        )