---
title: "Django Folder Structure Best Practices 2020"
date: 2020-02-22T12:56:11+05:30
draft: true
---

How to create a best folder structure for your Django application. Django folder structure is consist of project and apps. If we are not creating the right folder structure in the beginning of the project everything will messed up. 

In this guide is for who starting the project from scratch. For established project please keep this idea in mind and try to add these features one by one.

## Create project
Creating the project is easy in Django it will create few files and folders in your project. Let's see what those are...

    python manage.py startproject project

Now the project tree will look like this. 

```
├── manage.py
└── projdir
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

Now we've created the Django project and now we have two options to go proceed. One is to create the apps next to `projdir` or create a `apps` inside the project folder and will continue developing from it.

Two approach
1. Create apps after the project folder
2. Create apps inside the project folder. 

I personally like the second approach because that will gives the clean look in to the overall project. So let's create the apps for our project.

## Create apps
For the second approach we need to create the folder by hand then run the `startapp` command this way you can avoid command error that cause by folder not present in the first place. 

```
cd projdir
mkdir app1
cd ..
python manage.py startapp core projdir/core
```

Now that we have created the folder structure lets see how the tree structure look like.
```
├── manage.py
└── projdir
    ├── __init__.py
    ├── app1
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   │   └── __init__.py
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

Apps created by the `startapp` command will have all the necessary files for the Django app. Now how do we point this to installed apps. 

# Installed apps
We must tell the Django that our newly created apps dotted path.