---
title: "Django Models Simple Tutorial"
description: "Simple guide to show db records in web page"
date: 2020-06-22T09:23:28+05:30
draft: true
type: "posts"
categories: ["development"]
tags: ["django"]
banner: "content/django-models-simple-tutorial-banner.png"
---

One of the advantages of Django is ORM. Instead of writing raw SQL to fetch and display values we can use Django ORM. It's simple and easy way to get value from database and then display it in a web page.

In my previous post I've explained how to start a Django project from scratch. Please checkout [Django Hello World](/django-hello-world) if you want to retouch some basics. 

### Database Driver

Oh don't get confused with driver word. It's nothing but the bridge between your database and Django. It's database specific package. You have to install this package when you decide the database for your project. If you choose MySQL then you have to install mysql-connector package. Likewise, if you decide PostgreSQL then you have to install psycopg package. Please google it for appropriate driver for your project.

### Database Connect

In this blog I'm going to choose PostgreSQL. And I've to install psycopg2. After installation I need to tell the Django to use my PostgreSQL database. So open `settings.py` file and modify DATABASES value to below snippet. 

If you don't know how to create PostgreSQL database or How to create psql user or password then please checkout [PostgreSQL cheatsheet](/psql-cheatsheet/)

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydatabase',
        'USER': 'mydatabaseuser',
        'PASSWORD': 'mypassword',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
```

### Create Tables

Django comes with ORM and other interesting features that enable rabid development. One is migrations, It can able to create tables. It can able to revert back to the column datatypes and so on. So it's recommended you to stick with this apporach instead of creating table and schema outside of Django.

To create tables you need to open models.py file and create a class function there. Each class function that takes the `models.Model` will converted into database table. 

```python
class TestTable(models.Model):
    test_text = models.CharField(max_length=200)
```

### Database Migration

After you entered above code into models.py file then open the terminal and do below shell command. 

```shell
python manage.py makemigrations
python manage.py migrate
```

First command is makemigrations. This will create migrate script in the migration folder. Next command is migrate. This will apply created migration script into database and create tables and columns.

### Database fetch

To show the database values in to the html page we need to get the values first. So in views.py file I'm writing below code that get the database values.

```django
from app1.models import TestTable

def index(request):
    items = TestTable.objects.all()
    return render(request, "index.html", {"items": items})
```

What we are doing is using ORM to fetch all the values from database. And then pass into context via index.html.

Finally, We can display fetched items in html file like this.

```html
<div>
    {% for item in items %}
        {{ item }}
    {% endfor %}
</div>
```

This is just the for loop in Django template. We can't write Python for loops in HTML file but Django comes with Django template languages that we can use to write for loop and other interesting stuffs.


