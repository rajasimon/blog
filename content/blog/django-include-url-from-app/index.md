---
title: "Django Include Url From App"
description: "How to import views into urls. How to include multiple apps urls into main project urls."
date: 2020-06-28T15:19:33+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
aliases: ["/django-include-url-from-app/"]
---
This article explains three way to configure `include` in urls.py file. 

Let’s see simple urls.py with few urls.

```
from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index, name="index")
]
```


### Module 
Django accepts string representations of the module apps. Meaning you can mention dot notation of the app urls in this method. 

```
from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("app1/", include("app1.urls", namespace="app1"))
]
```

### pattern_list
This method especially useful for people don’t like dot notation. Seriously it’s best way to include other app urls.

```
from django.urls import path, include

from . import views
from project.app1 import urls as app1_urls

urlpatterns = [
    path("", views.index, name="index"),
    path("app1/", include(app1_urls, namespace="app1"))
]
```

### Pattern List with App Namespace
This method useful when you don’t have app to import but you want to keep urls nested.

```
from django.urls import path, include

from . import views
from project.app1 import urls as app1_urls

app1_urlpatterns = [
    path("", views.notification, name="notification"
]

urlpatterns = [
    path("", views.index, name="index"),
    path(
        "services/", include((app1_urlpatterns, "services"), namespace="services")
    ),
]
```