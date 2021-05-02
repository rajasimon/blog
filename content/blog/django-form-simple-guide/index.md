---
title: "Django Forms Simple Guide"
description: "Simple guide for working with Django Forms"
date: 2020-06-23T01:08:41+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
banner: "content/django-form-simple-guide-banner.png"
aliases: ["/django-form-simple-guide/"]
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
        model = TestTable
        fields = "__all__"
```

What we just created is ModelForm that connected with Database table. You can tell the class function to use which columns you want in fields. I've used "______all______" because I want to tell the ModelForm to consider all of my fields.

Now that we created model forms now it's time to use it in view function and as well as the html file.

```python
from .forms import TestTableForm


def index(request):
    form = TestTableForm()
    return render(request, "index.html", {"forms": form})
```

I've just created the model form instance in view function and passing it via the index.html via context.

Now in index.html file I can call the the form and that will display the input fields.

```html
<form action="/your-view-url" method="post">
  {% csrf_token %}
  {{ form }}
  <button type="submit">Submit</button>
</form>
```

What we did is using the `form` context we are telling the Django template to convert that into actual form fields and render it.

### Save The User Entered Input

So far our view function will not do anything. We want to tell the view function to save the value whenever user submit the form.

```python
if request.method == "POST":
    form = TestTableForm(request.POST)
    if form.is_valid():
        form.save()

    return render(request, "index.html", {"form": form})
```

I just created the if clause for POST method. This will be executed only when request is POST. Here I'm just creating another form instance but this time I'm passing the `request.POST` as the argument. So Django will take care of passing the incoming request and map the data with the class fields. Finally I'm checking the validation. Once the validation is done I"m calling the `save` method.
