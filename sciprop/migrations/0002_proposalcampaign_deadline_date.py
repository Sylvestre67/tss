# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-05 17:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sciprop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='proposalcampaign',
            name='deadline_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
