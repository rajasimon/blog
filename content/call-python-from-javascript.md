---
title: "Call Python From Javascript"
description: "Execute backend Python script from frontend Javascript"
date: 2020-06-25T18:50:38+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["javascript"]
---
These days website is powered by Javascript. Frameworks like React allows one to create a single page application very easily. But javascript ability stops in browser. Beyond that you don’t have any control over that. To run scripts in the backend you need to follow certain methods. These methods defined by backend frameworks. But in the javascript side you just need to make the API call to the backend. Let’s see how that can be done. 

```
fetch('/backend/url/).then(resp => resp.json())
  .then(response => console.log(response))
```

What I’ve created in the above snippet is simple Javascript `fetch` API call to the backend URL. As you can see all it can do is make the network request to backend URL. And I’m parsing the response as the JSON. Make sure your backend returns the JSON output. 

We saw that how to make the backend request from Javascript fetch let’s see how that we can capture it in backend. As I mentioned previously each backend frameworks works very differently.

But all of the frameworks follow these methods. First implement the URL for your view function. In our example the API call hit the particular backend URL and then execute the backend view function. 

Here I am using the `Flask` framework. Flask framework is very easy the hello world requires 4 lines of code. Let’s write the hello world.

```
from flask import Flask

app = Flask(__name__)

@app.route("/backend/url/")
def backend_url():
    # Execute any python code here you want.
    return JsonResponse({"status": True})
```

what I’ve created is very basic function that executes when the `backend/url` gets called. And it returns JSON output to the frontend. 

This is how you execute the python code from Javascript file.