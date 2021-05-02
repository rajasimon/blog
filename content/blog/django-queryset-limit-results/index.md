---
title: "Django Queryset Limit Results"
description: "How to limit the number of results in Django Querysets. Limit queryset results in Django template."
date: 2020-06-27T13:21:07+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
aliases: ["/django-queryset-limit-results/"]
---
When we do queryset.all() it will return all the objects in the database. But in some case we need to limit the results. Let’s see how we can limit the results. 

```
TestDjango.objects.all() 
```

Currently it will return all the objects when you do queryset.all(). But the queryset objects is acting like Python list. So you can use the square bracket to limit the results.

```
limitted_test_django_objects = TestDjango.objects.all()[:5]
```

Above code will return limited results from database. You can also do `[5:10]` to get the objects from 6 to 10.

What if you want to limit the queryset result in frontend instead of doing it in backend. That’s where `slice` comes in. You can use the slice to limit the results in the backend.

```
{% for test_django in test_django_objects|slice:":10" %}
    {{ test_django }}
{% endfor %}
```