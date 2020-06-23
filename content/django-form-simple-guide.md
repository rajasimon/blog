---
title: "Django Forms Simple Guide"
description: "Simple guide for working with Django Forms"
date: 2020-06-23T01:08:41+05:30
draft: true
type: "posts"
categories: ["development"]
tags: ["django"]
banner: "content/django-form-simple-guide-banner.png"
---

This guide is to understand what is Django Forms and How we can use it in our application. One of the advantages of Forms is validation. Since Django more of a server rendering application. It's time consuming to add form validation on the frontend. Instead, we can add Django Forms validation that will take care of Email, Integer and other validations on entered input. 

### ModelForm

Let's talk about the ModelForm. The obvious question is why we need the ModelForm in the first place. Well the answer is if you have the Django Models and you wanted to save the user input into that Models. 

Checkout this page [Django Models Simple Guide](/django-models-simple-tutorial/) if you want touch base how to create Django Models. Assume that you have the model `TestTable` and it has only one field `test_text`. I want Djagno form to save user entered input values into database with the help from Django.

I've not mentioned what is ModelForm in this subject. ModelForm will connect with TestTable. 

```python
# forms.py
from django.forms import ModelForm

from .models import TestTable


class TestTableForm(ModelForm):
    class Meta:
        fields = "__all__"
```

What we just created is ModelForm that connected with Database table. 
