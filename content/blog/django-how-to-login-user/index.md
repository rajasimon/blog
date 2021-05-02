---
title: "Django How to Login User"
description: "Simple guide to authenticate Django User"
date: 2020-06-25T12:35:51+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
banner: "content/django-how-to-login-user.png"
aliases: ["/django-how-to-login-user/"]
---
You will get to know how to properly authenticate the user. Authentication vital role for any web application. Instead, of implementing your own authentication mechanism, we can use Django Authentication System.

But first you need to have Django `User` in database. In my previous blog I’ve written how to create [models](/django-models-simple-tutorial/) and [forms](/django-form-simple-guide/). Use that technique to create a system that accepts username and password from user. Once you have the user saved into database then you can use this guide to authenticate the user.

### Django User
You can use Django User table or implement your own custom user. If you choose Django user then the rest of the process is very easy. Django user comes with username, email, password. But if you want to implement some more additional field then you can extend this Django user like this.

```
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    data_of_birth = models.DateField()
```

Above method is widely used by developers. But incase if you want more control than you can extend the user model with the help of Abstract user. In this case you have to mention your auth model in `settings.py`

```
AUTH_USER_MODEL = 'customauth.MyUser'
```

Decided which one you want based on your application and follow rest of the guide.

### Authentication
Now that your Django user records saved into database. We can authenticate using the `authenticate` method.
```
from django.contrib.auth import authenticate
```

All we need to do now is call the authenticate method with username and password parameter. This will return `user` object.

```
user = authenticate(username='rajasimonio', password='secret')
```

Then you can check the user object for validation. If the authenticate method can’t match username and password then it will return None.

And we can use `login` method to set the logged in status in session and other places.

```
from django.contrib.auth import authenticate, login

if user is not None:
    login(request, user)
```

After that we can get the user in request object like `request.user`