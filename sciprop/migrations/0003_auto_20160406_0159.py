# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-06 01:59
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sciprop', '0002_proposalcampaign_deadline_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proposalcampaign',
            name='emails',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='proposalcampaign',
            name='forms',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True),
        ),
    ]
