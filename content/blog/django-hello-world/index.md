---
title: "Django Hello World"
description: "Django basics for starters."
date: 2020-06-21T11:54:14+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
banner: "content/django-hello-world-banner.png"
aliases: ["/django-hello-world/"]
---

Django is huge. It has so many API. Reading the Django docs is like swimming in the ocean. You get lost easily. Trust me, I never thoroughly read the polls tutorial too. Before starting a new Django project, you have to know some basics in Django. And then the rest you can use the search engine to find the answers. I'm here to explain some basics of Django. I think it will help you start a new Django project properly.

## Start

I'm not going to explain how to install Django; instead, I'm going to teach you how to start a Django project. If you read the Django documentation, then you know that `startproject` is the command. This command will generate Django project folders and files for the initial project. After that, you can use `runserver` to run the default web server to browse the website.

```bash
python manage.py runserver
```

When you browse you will see the Django landing page. Which you want to replace with your code.

In my previous blog post [django-project-strucutre](/django-project-structure/) I explained how to start a project initially so you can refer that for reference.

## App

We have to replace our Django default landing page with something `Hello World` in fact that is our final goal. So in order to do that we need to tell the Django to use our view function instead of the default landing one. View functions are usually goes into `apps` but sake of the simplicity in explanation I assume that you already created the apps. But remember you have to mention your created app in `INSTALLED_APP` then only Django will consider that as the Django apps.

## URL

Let's create a index url that points to index view function that returns `Hello World` html template to render. Well that sounds like simple approach but you need to be careful in every steps.

```python
# project/urls.py or app1/urls.py (Use include to import in root)
from django.urls import path


from . import views

urlpatterns = [
    path("", views.index, name="index")
]
```

If you run the application it will throw an error because we have not created index view functions yet.

## View

If you create app using `startapp` command then views.py file created automatically for you. Here where you write all of your business logic.

```python
from django.shortcuts import render


def index(request):
    return render(request, "index.html")
```

This is very simple view function. In Django every view function takes `request` as the first argument. And we have to return some http response back to html template and that's where we need help from `render` function.

Render function will take the request as the first argument and return wherever the HTML file we point to.

## HTML

By default Django will not create any HTML part so you need to create the HTML file. Create `templates` folder in your app and then create two files. One is `base.html`  and another one is `index.html`.

base.html file will act as the skeleton for our whole project. And `index.html` file will use that base skeleton to extend the web page.

In other simple terms part of index.html file will come into base.html file and that's how the Django template system works.

```html
<--- base.html -->
<body>
  <main>
    {% block content %}{% endblock content %}
  </main>
  <footer></footer>
</body>
```

Remember the base.html is just the skeleton all of our `main` content that comes from `index.html`. If you look at the view function that return index.html file only not that base.html.

So when you return the index.html Django will use the skeleton and place part of index.html content and then return the complete html file.

```html
{% extends 'base.html' %}

{% block content %}
  <p>Hello World</p>
{% endblock content %}
```

Extends is the keyword will tell the Django to use which skeleton to use. And the block keyword will use to replace the content.
