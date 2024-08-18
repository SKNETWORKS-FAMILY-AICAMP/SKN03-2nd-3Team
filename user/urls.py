from django.urls import path
from .views import getMain,getMap, getCulture, getDesc, getPark, getStudy, getAboutus, getTest

urlpatterns = [
    path('', getMain, name="user-Main"),
    path('desc/', getDesc, name="user-Desc"),    
    path('map/', getMap, name="user-Map"),
    path('park/', getPark, name="user-Park"),    
    path('study/', getStudy, name="user-Study"),
    path('culture/', getCulture, name="user-Culture"),
    path('aboutus/', getAboutus, name="user-Aboutus"),
    path('test/', getTest, name="user-Test")
]