---
title: "Django Compare UUID with String"
description: "How to compare UUID field value with string in Django template"
date: 2020-11-15T15:54:43+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
aliases: ["/django-compare-uuid-with-string/"]
---

### Introduction
I've below code that compare UUID with string variable in template.

```
{% ifequal request.GET.space_id space.id %}is-active{% endif %}
```

If you're like me who thought this is easy with django template language then you're wrong. When I was writing the if condition to check the string the expected behavior it not happend.
Then after several quick search I finally found the way to do it. Here is the explantion of how I achived that.

### Solution
First you need to convert UUID into the string format otherwise Django template language will not compare properly. So I've checked the template language documentation and found this `stringformat` is the way to do it.

[stringformat](https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#stringformat)
This is helpful and I can convert UUID into string format and later I can check with the actual string.
[old-string-formatting](https://docs.python.org/3/library/stdtypes.html#old-string-formatting)
And Python has the printf-style String Formatting options that we can use with Django template language `stirngformat`

```
request.GET.space_id|stringformat:"S"
```

### Conclusion

Above code will convert the UUID into string. So the final code for checking the UUID with string like this.

```
{% ifequal request.GET.space_id|stringformat:"s" space.id %}is-active{% endif %}
```
