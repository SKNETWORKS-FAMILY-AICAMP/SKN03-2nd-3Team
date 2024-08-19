from django.urls import path
from .views import getMain, getDesc, getAboutus, getTest,getMap

urlpatterns = [
    path('', getMain, name="user-Main"),
    path('desc/', getDesc, name="user-Desc"),    
    path('map/', getMap, name="user-Map"),
    path('aboutus/', getAboutus, name="user-Aboutus"),
    path('test/', getTest, name="user-Test")
]