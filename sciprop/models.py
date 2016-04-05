from django.db import models
from django.contrib.postgres.fields import JSONField

class ProposalCampaign(models.Model):
    PROPOSAL_STATUS_CHOICES = (
        ('draft','draft'),
        ('waiting_for_launch','waiting_for_launch'),
        ('launched','launched'),
        ('under_review','under_review'),
        ('closed','closed')
    )

    name = models.CharField(max_length=256)
    publication_date = models.DateField(null=True,blank=True)
    deadline_date = models.DateField(null=True,blank=True)
    status = models.CharField(max_length=255,default='draft',choices=PROPOSAL_STATUS_CHOICES)
    template = models.FileField(upload_to='campaign',null=True,blank=True)
    forms = JSONField()
    emails = JSONField()

    def __unicode__(self):
        return self.name

