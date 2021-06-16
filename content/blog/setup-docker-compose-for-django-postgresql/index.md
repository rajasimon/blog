---
title: "How to Setup docker-compose for Django, Postgresql"
description: "Here is the details you need about setting up docker compose for Django based projects."
date: 2021-06-16T20:19:10+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
banner: "blog/setup-docker-compose-for-django-postgresql/banner.png"
---

In old days I always set up a virtual environment for Django-based projects but recently it’s changed. I have used the words “old days” and I know it’s not that old but in software engineering it’s old. 

Okay, now you have another question what is the new tech stack I am using to create the Django-based web applications? And the answer is Docker Compose
  
This all started by experimenting but I soon realized it’s one of the best tools for developing a web-based applications. This helps you and your team to work on the same stack so that when in deployment it won’t go haywire. 

Alright now talks about Docker and Compose for a second.  Docker lets you create a virtual machine in your local computer so that you can work on Ubuntu while you are in Windows or MacBook. This makes the development easier. I say easier because when comes to developing an application in Python the Linux environment is always the best. 

Enough about the mumbling, here is the actual code you need. 

1. Create a "Dockerfile" in your root project folder.
2. Create a "docker-compose.yml" next to it. 

### Dockerfile

```
# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
```

### docker-compose.yml

```
version: "3.9"
   
services:
  redis:
    image: redis
  db:
    image: postgres
    volumes:
      - ./data/db:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    depends_on:
      - db
```