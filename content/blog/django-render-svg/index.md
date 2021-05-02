---
title: "Django Render SVG"
description: "How to render Django static SVG files."
date: 2020-06-30T19:38:02+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
---
To display SVG in HTML file normally we place the SVG code inside the HTML file. And that works almost no issues. But in some cases you need to serve the SVG from Django. This is useful where you can change the SVG over static without modifying the HTML file. Also dynamic SVG rendering is possible with this approach.

To render SVG in Django, place that SVG in static folder. Once SVG file placed in in static folder you can use the `static` to point into that SVG.

And use `img` tag to display SVG in html file. 

```
{% load static %}

<img src="{% static 'svgs/awesome.svg' %} />
```
