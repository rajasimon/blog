---
title: "Django Project Structure Best Practices 2020"
description: "Proper way to create folder structure for your Django Project."
date: 2020-02-23T12:56:11+05:30
draft: false
type: "posts"
tags: [django]
categories: [development]
---

In this blog post you'll learn how to create best folder structure for your Django project.  Django folder structure is consist of project root and apps. If you are not creating the right folder structure then everything will look complex.

This guide is for starting the project from scratch. For an established project, please keep this idea in mind and try to add these methods one by one.

## Create a project

Creating the project is very easy in Django; It's just the `startproject` command, and it will create a few files and folders in your project. Let's see what those are…

    python manage.py startproject projdir

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

Now we've created the Django project, and now we have two options to proceed. One is to create the apps next to projdir or create an app inside the project folder and will continue developing from it.

**Two Methods**

1. Create apps after the project folder
2. Create apps inside the project folder.

I like the second approach better because that will gives a clean look into the overall project. It's very easy and will look like everything seems organised. So let's create the apps for our project.

## Create apps

For the second approach we need to create the folder by hand then run the `startapp` command. This way we can avoid the command error that cause by folder not present in the first place.

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

## Installed apps

We must tell the Django that our newly created apps dotted path.  Then only Django will recognise our app as Django apps otherwise you can't run migrations and other benefits. Okay let's see how we can add dotted path in installed apps.

There is two approach in there one is using the dotted path upto the apps directory or the AppConfig directory.

1. Dotted path from root project folder to apps.
2. Dotted path from root project folder to AppConfig.

I can just use the first approach but Django recently pushing developers to use AppConfig much. I say first one is pretty easy to mention. In our case it will be `projdir.app1`

But the second approach is bit different you need to change the apps.py file `name` variable then only Django will consider the AppConfig dotted path as valid.

```
class App2Config(AppConfig):
    name = "prouder.app2"
```

And in the installed app just mention the path upto AppConfig like this...

    projdir.app2.apps.App2Config

## Conclusion

So far, we have seen how to create a folder structure in Django, both normally like and inside the root project folder to avoid the mess.

You can find all the code in[github/django-project-structure](https://github.com/rajasimon/django-project-structure) repository.

Please support me by subscribing to my newsletter. By subscribing you get to read all my previous article in this category.