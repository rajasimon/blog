---
title: "How to display today items in Django template"
description: "Compare queryset date object and list only today entries in Django Template"
date: 2020-07-02T19:48:35+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
aliases: ["/django-display-today-items-in-template/"]
---
There is a situation where I need to compare dates with a querysets variable in a Django template. For example, I want to list all of the database values stored in a database. There are plenty of ways we can do this operation, but I'm looking for a template method instead of writing it on the backend.

Let's assume that we have the blogentires querysets available in the template contexts, and it contains all the values from the table.  The task is to list only today entries in the HTML template.

```
blogentries = BlogEntry.objects.all().order_by("-published")
```

We clear about what we wanted to achieve. We can solve this in multiple ways, but I'm looking for a template method to answer because I don't want to deal with backend code changes.

List all the values in querysets.

```
{% for blogentry in blogentries %}
  {{ blogentry.title }}
{% endfor %}
```
The above code is using for the loop to prints all the entries from the querysets. To list the article today, we need to check the published date with today's date.

But HTML is not Python, and we can't store the values in the template. But Django offers now method with accepts the as a way to declare the value. That lives inside the page until the next refresh. This variable can accessible with Django template language syntax.

```
{% for blogentry in blogentries %}
  {%
    if blogentry.published.year != current_year
    and blogentry.published.month != current_month
    and blogentry.published.day != current_day
  %}
    <p>{{ blogentry.title }}</p>
  {% endif %}
{% endfor %}
```

Okay that’s great but do I have to pass those variables from backend to frontend? It’s not then how do I declare those variables in Django template. Well the answer is we can use `now` method.  This will assign the date values into those variables.

```
{% now "Y" as current_year %}
{% now "m" as current_month %}
{% now "d" as current_day %}
```

Great now that we have declared the custom date into those variables above if condition will work perfectly and I can see the today entries will display the HTML page.
