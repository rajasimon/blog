---
title: "How to include curly bracket in Python string?"
description: "A way to include curly bracket in string output."
date: 2021-04-09T09:00:00+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["python"]
aliases: ["/include-curly-bracket-in-python-string/"]
---

# How to include curly bracket in Python string output?
I was doing this Stripe payment API integration. One of the problem I faced during the development is to pass the `{CHECKOUT_SESSION_ID}`  in the string with curly bracket .

Because when the payment is done I get the checkout session id from the stripe success redirect URL.  The end result what I want is something look like this `/success?session_id={CHECKOUT_SESSION_ID}` .  

Initially I tried using this normal method.  There is something wrong with this approach, you wish have to specify each curly bracket value and then in the render it will change with the value you have provided.

```python
x = "string here contains {CHECKOUT_SESSION_ID} hello {key}"
```

Now what should we do it right now is to use the format method Or the f string to pass the entire curly bracket value into the string as context.

```python
curly_bracket = "{CHECKOUT_SESSION_ID}"
f"String here contains {curly_bracket}"
```

This is how you print curly bracket in the string. 
