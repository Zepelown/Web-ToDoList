from django.shortcuts import render

# Create your views here.

def index_page(request):
    return render(request, 'main/index.html')

def calender_page(request):
    return render(request, 'main/calender.html')

def todo_page(request):
    return render(request, 'main/todo.html')

def text_page(request):
    return render(request, 'main/text.html')