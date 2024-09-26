from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('moftms/', views.moftms, name='moftms'),
    path('trainee-login/', views.traineeLog, name = 'traineelogin'),
    path('trainee-register/', views.traineeRegister, name = 'traineeregister'),
    path('coach-login/', views.coachLog, name = 'coachlogin'),
    path('coach-register/', views.coachRegister, name = 'coachregister'),
    path('home/', views.traineeHome, name = 'traineeHome'),
    path('training-post/',views.coachpost, name = 'coachpost'),
    
]

urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
