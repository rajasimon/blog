---
title: "Django Multiple Project with Single Database"
description: "How to connect single database with multiple projects."
date: 2020-06-20T08:45:59+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
---

How do we go with connecting single database for multiple Django project. I've this situation where I need to connect same database but different server. For example we have old Django project and instead of updating the project to new we decided to create a micro service architecture and migrate the apps one by one. But have to use the same database for authorization purpose. Anyhow, we created the application in latest Django framework and everything is ready but the annoying migration error message keep appear everytime we do runserver.

To get rid of the error message we need to disable the migration for specific Django apps. Disabling Django apps like admin and auth is good for this kind of architecture. So there is few method that we can use to stop the migration. One is to use `allow_migration` and other one is to use `MIGRATION_MODULES`

I'm going to talk about migration modules in this blog post. Because that's allow us to stop the migration and the warning error message completely. All you have to do is update your settings.py file with what app you want to stop the migration. For example I want to stop migration for sessions and auth. Why I want to stop that? is because those already exists in parent application. I'm just using this project for micro service and wanted to get the request.user detail fill in from the main database.

Your `settings.py` file looks something like this.

```python
MIGRATION_MODULES = {
    "auth": None,
    "admin": None,
    "contenttypes": None,
    "sessions": None,
}
```

The above settings will stop the migration for those apps only and remaining your project apps will migrate automatically.
