from django.shortcuts import render

# Create your views here.

def index_page(request):
    return render(request, 'account/index.html')

def login_page(request):
    return render(request, 'account/login.html')

def signup_page(request):
    return render(request, 'account/signup.html')