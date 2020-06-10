---
title: "Psql Cheatsheet"
description: "Working with PostgreSQL Cheatsheet"
date: 2020-06-05T11:40:34+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["postgresql"]
---

Listing general PostgreSQL commands here for my future self.

## Start

This is the command I'm using to check if the `psql` running locally.

```bash
/etc/init.d/postgresql status

service postgresql status
```

Note: I'm using `MacOS`

## Status

To check the status of the postgres services in your machine use this below command.

```bash
psql postgres
```

## Create

### User

Always create user when you're working with PostgreSQL instance. It's okay to create just database and use but using the username and password in the `DATABASE_URL` is the recommended way.

```bash
CREATE USER rajasimon with PASSWORD 'password';
```

Replace password with your user password.

### Database

Creating database is easy with single line comment.

```bash
create database dbname
```

## Permission

Assigning permission is really important if you're working with user and database together.

```bash
GRANT ALL PRIVILEGES ON DATABASE "dbname" to rajasimon;
```

## Password

TO change the password please use this command.

```bash
\password <password>
```

## Connect

To use the database we must connect with it.

```bash
\connect webaccount
```

I've also created the gist for quick glance incase if you want to check my
original source.

[psql cheatsheet](https://gist.github.com/rajasimon/4c6e2b7219d814991bc3?cardthispage=true)
