from django.urls import path
from .views import get_notes, search_notes, create_note, update_note

urlpatterns = [ 
    path('notes/<int:subject_id>/', get_notes, name='get_notes'),
    path('notes/search/<int:subject_id>/', search_notes, name='search_notes'),
    path('notes/create/<int:subject_id>/', create_note, name='create_note'),
    #path('notes/delete/', delete_note, name='delete_note'),
    path('notes/update/<int:subject_id>/<int:note_id_id>/', update_note, name='update_note'),
]