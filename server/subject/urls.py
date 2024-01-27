from django.urls import path
from .views import (
    get_subjects,
    get_subject,
    search_subjects,
    create_subject,
    update_subject,
    delete_subject,
)

urlpatterns = [
    path("subjects/", get_subjects, name="get_subjects"),
    path("subjects/subject/", get_subject, name="get_subject"),
    path("subjects/search/", search_subjects, name="search_subjects"),
    path("subjects/create/", create_subject, name="create_subject"),
    path("subjects/delete/<int:subject_id>/", delete_subject, name="delete_subject"),
    path("subjects/update/<int:subject_id>/", update_subject, name="update_subject"),
]
