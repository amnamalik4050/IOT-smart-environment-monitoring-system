from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages

def login(request):
    return render(request, "login.html")

def aboutUs(request):
    return HttpResponse("Welcome to IOT-Based Smart Environment Monitoring System")

def signup(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists")
            return redirect('signup')

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()

        messages.success(request, "Signup successful!")
        return redirect('login')  # login page par redirect karein

    return render(request, "signup.html")