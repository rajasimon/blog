---
title: "How to run periodic background task using Django Channels"
description: "Guide to run background task in Django project without celery."
date: 2020-02-29T21:20:25+05:30
draft: false
type: "posts"
tags: [django]
categories: [development]
aliases: ["/django-channels-background-task/"]
---

This post explains how to run Django background task with Django Channels. I've created the `beatserver` python package for those who wanted to run background task inside the Django server without using external dependencies. Well, Channel itself another dependency but soon it will merge in to Django so I say now you need just Channels as the first dependecies.

## Installation

Can be easily installed using python packaing index aka pypi.

`pipenv install beatserver`

### Configuration

Once you installed the package all you have to do is create beatconfig file in your root folder next to settings.py file. I will explain in short what is beatconfig file but before let's see some sample beatconfig file it is.

beatconfig.py

```python
from datetime import timedelta

BEAT_SCHEDULE = {
    'testing-print': [
        {
            # will call test_print method of PrintConsumer
            'type': 'test.print',
            # message to pass to the consumer
            'message': {'testing': 'one'},
            # Every 5 seconds
            'schedule': timedelta(seconds=5)
        },
        {
            'type': 'test.print',
            'message': {'testing': 'two'},
            # Precisely at 3AM on Monday
            'schedule': '0 3 * * 1'
        },
    ]
}
```

### Explanation

Let's write simple Consumer function. If you follow the Channels tutorial you may already knows about how to write view function for channels. Normally you will write channels function in `consumers.py` file and then  will write all the consumer urls in `routing.py` file.

```python
# Consumers
class PrintConsumer(SyncConsumer):
    def test_print(self, message):
        print(message)

# Routers
application = ProtocolTypeRouter({
    "channel": ChannelNameRouter({
         "testing-print": consumers.PrintConsumer
    })
})
```

After seeing the beatconfig and explanation code now you know about some degree of idea how the beatserver works. Actually we will call the `testing-print` channel url and you it directly connected with PrintConsumer but lot of function inside consumer so the type argument uses to call the particular function.

> if the function name is `test_print` then the type name will be `test.print`

This is the naming conversion you need careful with and beatserver support both timedelta and cron like syntax so you can just write something like this in your beatconfig.

* `'schedule': timedelta(seconds=5)`
* `'schedule': '0 3 * * 1' `

### Running

Right now you have to run beatserver in the separate process to run along with runserver. And this will pick all the beatconfig file and run those function in the time inerval.

```
python manage.py beatserver
```

### Conclusion

We saw that you to create a consumer function and hook with routing urls and create the beatconfig file to trigger the particular view function in the timely manner.

[Github Beatserver](https://github.com/rajasimon/beatserver)
