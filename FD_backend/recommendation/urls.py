from django.urls import include, path

from . import views

urlpatterns = [
    path('<str:username>', views.RecommendationView.as_view())
]
