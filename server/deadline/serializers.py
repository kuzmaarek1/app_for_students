from .models import Deadline
from rest_framework import serializers

class DeadlineSerializer(serializers.ModelSerializer):
     class Meta:
        model = Deadline
        read_only_fields = (
            'created_by',
        )
        fields=(
            'id',
            'description',
            'exam',
            'date',
            'created_by'
        )