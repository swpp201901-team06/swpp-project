from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Account/', include('Account.urls')),
    path('Archive/', include('Archive.urls')),
    path('Ranking/', include('Ranking.urls')),
    path('Restaurant/', include('Restaurant.urls')),
    path('Review/', include('Review.urls')),
    path('Tag/', include('Tag.urls')),
    path('User/', include('users.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
