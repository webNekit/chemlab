from django.shortcuts import render
from .models import Facts

# Create your views here.
# метод открытия страницы - главная
def home(request):
    return render(request, 'website/home.html')

# метод открытия страницы - лаборатория
def laboratory(request):
    return render(request, 'website/laboratory.html')

# метод открытия страницы - тесты
def tests(request):
    return render(request, 'website/test.html')

# метод открытия страницы - факты
def facts(request):
    facts = Facts.objects.all().order_by('-id')
    return render(request, 'website/facts.html', context = {
        'facts': facts
    })

# метод открытия страницы - теория
def theory(request):
    return render(request, 'website/theory.html')

# метод открытия страницы - таблица Менделеева
def table(request):
    return render(request, 'website/table.html')