---
title: "Introduction to Django Async Views"
description: "Newly added async views support in Django enables lot of possibilites previously thought it's not possible"
date: 2020-08-13T17:14:54+05:30
draft: true
type: "posts"
categories: ["development"]
tags: ["django"]
banner: "content/django-async-views-banner.png"
---

Finally, Asynchoronus views come into Django with 3.1 release. It's a long-awaited request from Django developers, and it's here. Let's discuss how we can use that to build async views.

Now you can use `async` keyword inside the Django views to execute a function asynchronously. I'm going to write a short example of this async view function. So that you will know what to expect from async views and it's advantages.

## How to use it.

When you upgrade the Django to 3.1, it will enable default, and you can generally run your code. Do I want to change anything to support async views? The answer is No. Django runserver makes it a smooth transition.

You can have both standard WSGI views and async views both in the same code base. The one who uses \`async\` keyword will consider as the async view function. But you have to use ASGI to get full async benefits.

```
# view with no async support
def index(request):
    return HttpResponse("Hello World)


# view with async support
async def index(request):
    return HttpResponse("Hello World)
```

Usually, in WSGI, the async views will be run inside the one-off event loop. So you don't have to worry about the I/O blocking. But if your code needs to handle synchronous calls like database fetch, then you can use the asgiref `sync_to_async` function for it.

```
from asgiref.sync import sync_to_async

async def index(request):
    results = sync_to_async(Blog.objects.get)(pk=123)
    return HttpResponse("Hello World)
```

## Example of async views

The advantage of using async views is many, but I wanted to talk particularly one example here, which is calling multiple HTTPS URLs concurrently.

In this example, I'm going to use Python Requests library and Python HTTPX library to demonstrate the parallel calling. I'm using httpx because it supports async out of the box.

```
urls = [
    "https://httpbin.org/get?test=1",
    "https://httpbin.org/get?test=2",
    "https://httpbin.org/get?test=3",
    "https://httpbin.org/get?test=4",
]
```

This is the URLs that I wanted to run inside my view function and the results in JsonResponse.

Let's take a look at how we can do that in the normal WSGI view function.

```
def index(request):
    context = {"result": []}
    for url in urls:
        resp = requests.get(url)
        context["result"].append(resp.json()["args"])
    return JsonResponse(context)
```

Typically it takes around 6 seconds to run the above code but using the async
view function we can reduce into a couple of milliseconds.

```
async def fetch(url, client):
    return await client.get(url)


async def magic(request):
    context = {"result": []}
    async with httpx.AsyncClient() as client:
        responses = await asyncio.gather(*[fetch(url, client) for url in urls])
        context["result"].append([response.json()["args"] for response in responses])
    return JsonResponse(context)

```

I've used asyncio gather to fetch all the results once it's fetched and pass into
response context.