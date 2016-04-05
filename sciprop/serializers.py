from rest_framework import serializers
from django.contrib.auth.models import User,Group
from models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

class  GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url','name')

class ProposalCampaignSerializer(serializers.HyperlinkedModelSerializer):
     class Meta:
        model = ProposalCampaign
        fields = ('url','name','publication_date','deadline_date','status','template','forms','emails')
