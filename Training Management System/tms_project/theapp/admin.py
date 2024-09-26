from django.contrib import admin
from .models import Contents
from .models import Trainee
from .models import Mandatory_trainings

# Register your models here.

admin.site.register(Contents)
admin.site.register(Trainee)
admin.site.register(Mandatory_trainings)
