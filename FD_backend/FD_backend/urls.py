from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from . import settings
from django.conf import settings
import debug_toolbar

urlpatterns = [
    path('admin', admin.site.urls),
    path('account/', include('accounts.urls')),
    path('archive/', include('archive.urls')),
    path('restaurant/', include('restaurant.urls')),
    path('review/', include('review.urls')),
    path('tag/', include('tag.urls')),
    path('user/', include('user.urls')),
    path('recommend/', include('recommendation.urls')),
    path('__debug__/', include(debug_toolbar.urls)),

]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
