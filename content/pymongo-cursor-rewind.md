---
title: "Pymongo Cursor Rewind"
description: "Ways to refetch the cursor value."
date: 2020-05-29T09:21:32+05:30
draft: false
categories: [development]
tags: [pymongo]
---
I was doing the some coding in Python with PyMongo. Task is to get the collection of documents from mongoDB and perform different operation on the fetched documents. 

```
def process():
    process = db.test_collection.find({user_email: user_email})
    
    for each in process:
        call_first_operation(each)
        
    # Below for loop never executed.
    for each in process:
		    call_second_operation(each)
```

I wonder why the second for loop is not working. It took me awhile to realise that mongoDB collection fetched one time only. 

Like `read()` this operation is one time only. If we need the document again we need to fetch it again. 

## So what’s the story about `rewind` ?

This rewind help fetch the same collection of documents without you writing queries. 

Here is the modified code that re-fetch the collection.

```python
def process():
    process = db.test_collection.find({user_email: user_email})
    
    for each in process:
        call_first_operation(each)
        
    for each in process.rewind():
		    call_second_operation(each)
```

----

