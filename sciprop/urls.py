__author__ = 'gugs'
from django.conf.urls import url, include
from django.contrib.auth import views
from django.views.generic import TemplateView

from rest_framework import routers

from views import *

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'proposal_campaign', ProposalCampaignViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),

    url(r'^$',
        HomeView.as_view(),
        name='home'),
]