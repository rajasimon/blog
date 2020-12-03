---
title: "Serverless Flask With Dynamodb"
description: "Create flask application using DynamoDB as the database and deploy to AWS Lambda"
date: 2020-12-03T09:35:43+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["flask"]
---

Unlike Django, Flask is not directly tie up with any database. So we can use Flask with either SQL and No-SQL. And that make the Flask framework superior amoung other web frameworks and most suitable for serverless architecture.  In this article I'm going to explain about how to code flask application and database as DynamoDB and deploy to AWS Lambda.

## Introduction

The application architecture will look like this, First I've created the file resources.py where I initiate boto3 client. And I've creatd models.py file that holds all the class reference. And finally I've the JSON file to create the DynamoDB table automatically from script.

## Models

Unlike DJango this models reference this model all are the class reference. I've
also mixed with flask login so that you can create authentication with this code.

```
from flask_login import UserMixin

class User(UserMixin):
    def __init__(self):
          self.email = None
           self.first_name = None
           self.last_name = None

   def get_id(self):
        return self.VE


    def init_user(self, response):
        self.email = response["email"]["S"]

        if "first_name" in response:
            self.first_name = response["first_name"]["S"]

        return self
```

## Resources

In order to make the CRUD operation very easy i've created the prepare function.
That takes the args, kwargs and turn into the dict. This dict will be useful in
update operation.

And the get function nothing but make the DynamoDB call and convert into the
class object. And then you can use this class object in your template. Also you can
pass the class object to jinja2 template and use it in the template as you like.

```
import boto3

dynamo_client = boto3.client("dynamodb")
dynamodb_resource = boto3.resource("dynamodb")
```

```
def prepare_user(email, first_name=None, last_name):
    return {"email": email, "first_name": first_name, "last_name": last_name}
```

Main purpose of this prepare user is to create the dict that directly use in CRUD operation.

```
def get_user(email):
    response = dynamo_client.get_item(Key={"email": {"S": email}}, TableName="User")

    if "Item" in response:
        return User().init_user(response["Item"])

    return None
```



