---
title: "Mongodb Motor Find"
description: "Easy way to use find in Mongodb Motor library"
date: 2020-05-30T22:57:25+05:30
draft: false
categories: [development]
tags: [motor]
---

MongoDB keep amaze me about performance. Everytime I tries to do some heavy operation it returns the result immediately. Right now I'm going to explain how to use the `find` operation in MongoDB with Motor.

Motor is very similar to PyMongo but for latest Python. So if you're using Python3.6 and chances are you will be using Aysnc, ASGI features. PyMongo is not support for keyword await and async operation. So MongoDB created this Motor package where you can perfor some async queries.

### So what's the problem with Find?

Find is very similar to PyMongo and it's not required await keyword. But to get the value from it you have to use async.

I wanted to get all the task for the particular user using Motor in my Python Starlette ASGI framework application.

````python
db.task.find({"username": username})
````

This is the query operation I need to perform. Even though if we are not provided the await argument it will return the async feature and we can to use asynchronous way to get the values from it.

One of the simplest way is to use async for loop. Here is the code that mongoDB find using motor library.

`````python
async def task_list(username):
    db = await get_database()
    tasks = [item async for item in db.task.find({"username": username})]

`````

