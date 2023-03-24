from .models import Note
from rest_framework import serializers

class NoteSerializer(serializers.ModelSerializer):
     class Meta:
        model = Note
        read_only_fields = (
            'created_by',
        )
        fields=(
            'id',
            'number',
            'topic',
            'description',
            'date',
            'subject',
            'created_by' 
        )