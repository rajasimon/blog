---
title: "Mongodb With Python Async"
description: "Guide for integrating mongoDB motor driver with ASGI starlette framework."
date: 2020-05-24T07:43:18+05:30
draft: false
tags: [starlette]
categories: [development]
---

# How to use mongoDB with Python Async?

I've been a Django developer for a four year. The simplicity and the flexibility to create large system is awesome. But this time I decided to try out async framework and with mongoDB as the primary database.

## Introduction to Starlette

I've experimented with channels before but seems that's too complicated for this learning. So the next obvious choice is Starlette.

Starlette offer simple and easy approach to ASGI. Very familiar to Flask but not in a full way. And the modularity is make this framework standout.

## Introduction to Motor

Motor is the async driver for python. It's very similar to PyMongo but supports for await and other useful goodies added for fully async support.



And the API also very similar and infact you can acces all of the mongo API from it.



## Integration

This integration is very easy. Unlike PyMongo you can't declare the mongoDB initialisation in the top. Here you have to initialise on every function that want to access the mongoDB.



```python
def get_something_from_db(username):
    return await db.users.find({"username": username})
```

Okay that's reasonable but how do I intiailse? let me tell you that. Motor have the client that accepts io_loop.

Wait what `io_loop` ? yes, It's how the async works in Python and all of the ASGI implementation done in top of this.

Okay so what should I do now?

First import this in your python file.

```python
import motor.motor_asyncio.AsyncIOMotorClient
```

Create a class function that accepts argument AsyncIOMotorClient

```python
class DataBase:
    client: AsyncIOMotorClient = None
```

And then you have to connet with your application start and stop time.

```python
async def get_database():
		return db.client["test_db"]

async def database_connect():
		return db.client = AsyncIOMotorClient(DATABASE_URL)

async def database_disconnect():
		db.client.close()
```

And one last final piece is to hook this with ASGI startup and shutdown.



```python
# Connect to cloud mongoDB
app.add_event_handler("startup", database_connect)
app.add_event_handler("shutdown", database_disconnect)
```
