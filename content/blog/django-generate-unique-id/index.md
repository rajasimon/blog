---
title: "Django Generate Unique Id"
description: "Django Generate Unique Id or String for your application. Django UUID generate very unique primary key."
date: 2020-06-26T15:58:24+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
aliases: ["/django-generate-unique-id/"]
---
When comes to unique key in database table we have to use auto generated key. But in some cases we need to use custom generated key. The places like in url or any other external facing application. One of the best way to generate unique key is with UUID.

This is the best way user can generate unique key. And Django also support this. All you have to do is import uuid and create [UUIDField](https://docs.djangoproject.com/en/3.0/ref/models/fields/#uuidfield) in models.py

```
import uuid
from django.db import models

class MyUUIDModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # other fields
```

After this you can forget about create unique key because Django automatically take care of it.

Just save the object and then the id will be uuid.

```
uuid_obj = MyUUIDModel.objects.create()
```