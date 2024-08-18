from django.shortcuts import render

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