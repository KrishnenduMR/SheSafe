from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('login/', views.loginpage, name='login'),
    path('report/', views.report, name='report'),
    path('livereport/', views.livereport, name='livereport'),
    path('showvideo/', views.showvideo, name='showvideo'),
    path('story/', views.story, name='story'),
    path('location/', views.location, name='location'),
    path('get-location/', views.getmylocation, name='get-location'),
    path('predict-sos/', views.predictSOS, name='predict-sos'),
    path('predict-violence/', views.predictViolence, name='predict-violence'),
    path('predict-help-hand-signal/', views.predicthelpHandSignal, name='predict-help-hand-signal'),
]
