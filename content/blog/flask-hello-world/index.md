---
title: "Flask Hello World"
description: "How to code hello world in python flask web framework. Hello World in Flask Web Application Framework"
date: 2020-07-11T12:56:15+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["flask"]
aliases: ["/flask-hello-world/"]
---

Flask is the Python framework for building web application. It's so pupular because of the simplicity. So simple that it doesn't ship with batteris like ORM. But it has huge collection of third-party libraries. You can use that to create web application without righting lot of codes. Enough of the build up let's see how easy to create web application in Flask.

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
		return "Hello World"
```

This is how you write hello wolrd application in Flask. Look at the code it's so mininal. Not more than 5 lines. You can run this code with wsgi server like gunicorn but flask also ship with CLI tool. To run using flask cli you need to export your `app` instance like this.

```shell
export FLASK_APP=helloworld.py
```

That's it now you can issue this command `flask run` and it will start the development server. And then you can browse localhost ip address in browser.

