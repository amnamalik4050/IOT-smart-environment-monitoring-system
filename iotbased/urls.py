from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # ✅ iot_app ke URLs load karo
    path('', include('iot_app.urls')),
]
