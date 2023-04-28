from django.urls import path
from .views import get_todolists_not_done, get_todolists_done, create_todolist, doned_todolist, update_todolist, delete_todolist, get_todolists_not_done, get_todolists_done

urlpatterns = [ 
    path('todolists/notDone/<int:subject_id>/', get_todolists_not_done, name='get_todolists_not_done'),
    path('todolists/done/<int:subject_id>/', get_todolists_done, name='get_todolists_done'),
    path('todolists/create/<int:subject_id>/', create_todolist, name='create_todolist'),
    path('todolists/doned/<int:subject_id>/<int:list_id>/', doned_todolist,  name='doned_todolist'),
    path('todolists/delete/<int:subject_id>/<int:todolist_id>/', delete_todolist, name='delete_todolist'),
    path('todolists/update/<int:subject_id>/<int:todolist_id>/', update_todolist, name='update_todolist'),
]