---
title: "Django One to One Exists"
description: "How to check Django ORM One-To-One objects exists in queryset object."
date: 2020-07-01T22:13:34+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
---
When working with Django ORM we often encounter the problem with whether the object exist or not. For example in One-To-One relationship there is no API to check if objects exist in object.

```
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_subscribed = models.BooleanField(default=False)
```

Above is the simple snippet that extends the User object with One-To-One relationship. We often access this object in views or templates like this `request.user.profile.is_subscribed`  but that works when the profile objects attached to request.user. 

So how to check the attribute exists in that object. We can use `hasattr` Python keyword to check the existence.

```
if hasattr(request.user, 'profile'):
    # Profile attribute exists in the request.user.
    print(request.user.profile.is_subscribed.
```
