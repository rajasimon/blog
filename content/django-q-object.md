---
title: "How to use Django Q Object"
description: "What is Django Q Object and How we can use it in our application simple guide"
date: 2020-07-06T19:46:18+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["django"]
---

Django uses Object Relational Mapper for the querying database. It's good for most cases, but sometimes, you need to run more complex queries. For that, the Django ORM ship with `Q` objects and it can construct more complex database queries.

At the very beginning, when I study the Django material, I find it very hard to follow the docs. Already ORM is very complicated to understand, but the Q documentation makes it much harder to grasp. I know what it is now, and I'm here to tell you how easy it is to use it. Without further due, let's walk what Q objects are and how to use it.

### Normal Queries

For the regular queries, we use filter() function. For example, to query all the article title that starts with "How to" we need to write this in filter function. 

```python
Article.objects.filter(title__startswith="How to")
```

Now we can use a Q object between these standard queries like this.

```python
from django.db.models import Q

Article.objects.filter(Q(title__startswith="How to"))
```

You have to think of Q objects like the normal function, and then the rest of the implementation is straightforward.

### Complex Lookup

Now you know what Q objects are and how to use it in filter function. This time for you to understand the features of the Q objects. 

When you write the filter function by a comma-separated, they considered as the AND methods. Now with the help of Q objects, you can write OR methods too. For example, I'm writing the simple filter function that returns article title starts with How or What. 

```python
Article.objects.filter(
    Q(title__startswith="How") | 
    Q(title__startswith="What")
)
```

### Final Thoughts

You can also use Q objects to get, exclude. And combine these, you can make complex queries.
