---
title: "Introduction Django Admin"
description: "Beginner Guide to Django Admin"
date: 2020-06-24T12:50:31+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
banner: "content/introduction-django-admin-banner.png"
aliases: ["/introduction-django-admin/"]
---

Let's talk about Django Admin? Django Admin is nothing but the interface provided by Django. It comes with default when you install the Django package using pip. It's automatically added into `INSTALLED_APPS` by Django when you generate the Django project using `startproject`.

```python
INSTALLED_APPS = [
    ---
    'django.contrib.admin',   
    ---
]
```



Django has great ORM feature. But if you want to modify the database records either go to Python Django shell or database cli. In order to avoid this Django introduced admin feature. There will be a web interface. There you can do your CRUD operation. And also Django backs other cool feature in it.

### Access Admin

CRUD operation is very tricky and you don't want unauthenticated user delete all of your records. So Django Admin comes with login system that uses the Django authentication. 

```shell
python manage.py createsuperuser
```

When you run the above program in terminal it will ask you email/username and password. After that you can login into Django Amdin portal by following this link `http://localhost:8000/admin`. 

*Note: Make sure you have the Admin url mentioned in urls.py*

After login you will see the admin interface. Navigate around and play around with it. If it's the fresh project then there will not lot of link there.You can find only Users and Groups. Click Users and there you can see your admin object. Here you can change the Admin password and permissions.

### Access Model

Now let's see how we can link our models.py Models into Django Admin interface. This allow us to run the CRUD operation on our models.

Let's assume that you have `TestTable`. To link this to Django Admin you have to open admin.py file and register your models. there. 

```python
from .models import TestTable


admin.site.register(TestTable)
```

Once you register the model. It will be appear in your Django Admin interface next time refresh the UI. 

After that you can add and delete objects in to `TestTable` with the comfort of Django Admin. 


