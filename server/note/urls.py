from django.urls import path
from .views import get_notes, get_note, search_notes, create_note, update_note, delete_note, add_image, delete_image

urlpatterns = [ 
    path('notes/<int:subject_id>/', get_notes, name='get_notes'),
    path('notes/note/<int:subject_id>/<int:note_id>/', get_note, name='get_note'),
    path('notes/image/<int:subject_id>/<int:note_id>/', add_image, name='add_image'),
    path('notes/delete_image/<int:image_id>/', delete_image, name='delete_image'),
    path('notes/search/<int:subject_id>/', search_notes, name='search_notes'),
    path('notes/create/<int:subject_id>/', create_note, name='create_note'),
    path('notes/delete/<int:subject_id>/<int:note_id>/', delete_note, name='delete_note'),
    path('notes/update/<int:subject_id>/<int:note_id>/', update_note, name='update_note'),
]