---
title: "Vscode Run Django Server"
description: "Simple way to run Django server in vscode"
date: 2020-06-29T13:14:19+05:30
draft: true
type: "posts"
categories: ["development"]
tags: ["django"]
aliases: ["/vscode-run-django-server/"]
---
One of the advantages of using Visual Studio Code is debugger. Instead of using run server in terminal and use pdb to debug we can use vscode default debugger. Activating the debugger is very easy just follow these steps. 

Make sure you have installed `Microsoft Python Extension`. After you installed click the debugger icon and select the Python and choose Django. 

That is it for the configuration to run the Django. Now click the start debugging, it will run the django runserver inside the vscode.

> Just make sure you run mentioned the python path in the vscode   workspace settings.