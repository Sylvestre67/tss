from django.shortcuts import render
from django.views.generic import FormView,TemplateView,ListView,DetailView,View,CreateView,UpdateView
from django.contrib.auth.models import User,Group

from rest_framework import viewsets

from mixins import *
from models import *
from serializers import *

######################
#
#    MAIN VIEWS
#
######################
class HomeView(EnsureCsrfCookieMixin, TemplateView):
    template_name = 'base.html'

######################
#
#    REST API
#
######################

class ProposalCampaignViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows proposal campaign to be viewed or edited.
    """
    queryset = ProposalCampaign.objects.all()
    serializer_class = ProposalCampaignSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

