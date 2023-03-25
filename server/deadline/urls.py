from django.urls import path
from .views import get_deadlines, create_deadline

urlpatterns = [ 
    path('deadlines/<int:subject_id>/', get_deadlines, name='get_deadlines'),
    path('deadlines/create/<int:subject_id>/', create_deadline, name='create_deadline'),
    #path('deadlines/delete/', delete_deadline, name='delete_deadline'),
    #path('deadlines/update/', update_deadline, name='update_deadline'),
]