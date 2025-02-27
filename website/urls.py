from django.urls import path
from . import views


app_name = 'website'

urlpatterns = [
    path('', views.home, name="home"),
    path('facts/', views.facts, name='facts'),
    path('laboratory/', views.laboratory, name="laboratory"),
    path('theory/', views.theory, name="theory"),
    path('test/', views.tests, name="tests"),
    path('table/', views.table, name="table"),
    
]