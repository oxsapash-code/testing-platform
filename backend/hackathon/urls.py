from django.contrib import admin 
from django.urls import path 
urlpatterns = [path('admin/', admin.site.urls),] 
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import TopicViewSet

router = DefaultRouter()
router.register(r'topics', TopicViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]