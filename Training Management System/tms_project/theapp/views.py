from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User, auth
from .models import Trainee, Contents, Mandatory_trainings
from django.urls import reverse



# Create your views here.

def moftms(request):
    return render(request, 'landing.html')




def traineeRegister(request):
    return render(request, 'trainee/traineeRegister.html')




def coachRegister(request):
    if request.method == 'POST':
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        trainingarea = request.POST['trainingarea']
        specialization = request.POST['specialization']

        user = User.objects.create_user(username=username, password=password1, email=email, first_name=firstname, last_name=lastname, trainingarea=trainingarea, specialization=specialization)
        user.save()
        print('user created')
        return redirect(reverse('coachpost'))
    return render(request, 'coaches/coachRegister.html')




def traineeLog(request):  
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect(reverse('traineeHome'))
        else:
            messages.info(request, ("There were an error occured loggin in try to check your UserId or password"))
            return redirect(reverse('traineelogin'))
    else:
        return render(request, 'trainee/traineeLogger.html')




def coachLog(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect(reverse('coachpost'))
        else:
            messages.info(request, ("There were an error occured loggin in try to check your UserId or password"))
            return redirect(reverse('coachlogin'))
    return render(request, 'coaches/coachLogger.html')




def traineeHome(request):
    allcontent = Contents.objects.all()
    print(allcontent)
    return render(request,'trainee/traineeHome.html', {'allcontent': allcontent})

def traineeHomeMandatory(request):
    allmandatorycontent = Mandatory_trainings.objects.all()
    print(allmandatorycontent)
    return render(request, 'trainee/traineeHome.html', {'allmandatorycontent': allmandatorycontent})


def coachpost(request):
    print("Form is sumbitted successfully")
    titles = request.POST['title'],
    descriptions = request.POST['description']
    departments = request.POST['department']
    videos = request.POST['video_urls']
    documents = request.POST['documents_urls']
    images = request.POST['image']
    estimating_time = request.POST['estimated_time']

    contents = Contents(title=titles, description=descriptions, department=departments, video=videos, document=documents,image=images, estimated_time=estimating_time)
    contents.save()
    return render(request, 'coaches/coachPost.html')