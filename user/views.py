from django.shortcuts import render
from django.core.paginator import Paginator
from django.shortcuts import render
from django.http import JsonResponse
from .models import CulturalFacility

# Create your views here.
def getMain(request):
    return render(request, "user/main.html")

def getDesc(request):
    return render(request, "user/desc.html")

def getMap(request):
    return render(request, "user/map.html")

def getPark(request):
    return render(request, "user/park.html")

def getStudy(request):
    return render(request, "user/study.html")

def getCulture(request):
    return render(request, "user/culture.html")

def getAboutus(request):
    return render(request, "user/aboutus.html")

def getTest(request):
    return render(request, "user/test.html")


# map
def index(request):
    page = request.GET.get('page', 1)

    try:
        page = int(page)
    except ValueError:
        page = 1  # 만약 페이지 번호가 유효하지 않다면 1페이지로 설정합니다.

    objects = CulturalFacility.objects.all().values()
    paginator = Paginator(objects, 25)  # 페이지당 10개의 객체

    try:
        page_obj = paginator.get_page(page)
    except:
        objects = []  # 만약 페이지 번호가 유효하지 않거나 페이지가 비어있다면 빈 리스트를 반환


    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'shop_list': list(page_obj.object_list)
        }, safe=False)

    context = {
        "objects" : page_obj,
        "shop_list" : list(page_obj.object_list)

    }
    return render(request, 'user/map.html',context)