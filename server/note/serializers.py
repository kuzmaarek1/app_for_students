from .models import Note
from image.models import Image
from image.serializers import ImageSerializer
from rest_framework import serializers

class NoteSerializer(serializers.ModelSerializer):
     image = ImageSerializer(many=True, read_only=True)
     class Meta:
        model = Note
        read_only_fields = (
            'created_by',
            'image'
        )
        fields=(
            'id',
            'number',
            'topic',
            'description',
            'date',
            'image',
            'created_by', 
        )