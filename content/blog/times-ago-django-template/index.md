---
title: "How to add Times Ago in Django Template"
description: "Django add times ago template filter to display time since posted."
date: 2020-07-05T17:06:46+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
aliases: ["/times-ago-django-template/"]
---

I've database table that uses `created` field. And in frontend I need to display created `times ago `. Here is code example of what I wanted to achieve.

```python
# models.py
class Blog(models.Model):
    created = models.DateTimeField(auto_now_add=True)

# views.py
def index(request):
    blogs = Blog.objects.all()
    return render(request, {"blogs": blogs})
```

And in HTML I want to display blogs like this.

```html
{% for blog in blogs %}
<div>
    {{ blog.created }} ago
</div>
{% endfor %}
```

Now that we understand what I wanted to achieve. Let's figure out our options are. There is `date` template filter in Django. I can use that to create day or hour. But the problem is the blog object created 5 minutes ago or 3 days ago or 2 weeks ago. So using the `date` filter to format the created value is not enough.

Thankfully Django template comes with [timesince](https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#timesince) filter. It will calculate the created value and return the formatted value. 

```html
{% for blog in blogs %}
<div>
    {{ blog.created|timesince }} ago
</div>
{% endfor %}
```









