from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from . import settings
from django.conf import settings
import debug_toolbar

urlpatterns = [
    path('admin', admin.site.urls),
    path('account/', include('Account.urls')),
    path('archive/', include('Archive.urls')),
    path('ranking/', include('Ranking.urls')),
    path('restaurant/', include('Restaurant.urls')),
    path('review/', include('Review.urls')),
    path('tag/', include('Tag.urls')),
    path('user/', include('users.urls')),

   path('__debug__/', include(debug_toolbar.urls)),

]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
