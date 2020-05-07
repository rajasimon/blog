---
title: "Python Convert Timestamp Datetime"
description: "Python way to convert timestamp to datetime."
date: 2020-05-06T17:59:15+05:30
draft: false
tags: ["python"]
categories: ["development"]
---

Timestamp is really helpful in API usage. You can send timestamp down the wire so that your client can decode it in their favourite language. For example I've the date object something like this `datetime.datetime(2020, 5, 7, 12, 35, 36, 492168)` but the frontend (Js) is really hard to parse the value so if you send the timestamp then you can convert into datetime object easily.

## Analyze the timestamp.

Bascially timestamp will be 10 digits after you converted into integer but sometime it will be 13 digits. A 13 digits timestamp is used in Javascript to represent time in milliseconds. So first step is to figure out the length of the timestamp and then convert into datetime object.

```python
if len(str(timestamp)) == 13:
        timestamp = float(timestamp) / 1000.0
```

But in sometimes the timestamp contains seconds decimal point. so it's important to convert into float for that.

```python
try:	
   	# assume, that timestamp is given in seconds with decimal point
   	ts = float(timestamp)
except ValueError:
		return None
```

## Convert to datetime

fromtimestamp function can be used to convert from timestamp to datetime object. The final code will be

```python
def from_timestamp_to_datetime(timestamp):
    # If the timestamp is 13 digits then convert that to seconds
    if len(str(timestamp)) == 13:
        timestamp = float(timestamp) / 1000.0

    try:
        # assume, that timestamp is given in seconds with decimal point
        ts = float(timestamp)
    except ValueError:
        return None
    return datetime.fromtimestamp(ts)
```

