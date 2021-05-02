---
title: "Auto Populate Database Fields"
date: 2020-03-23T11:22:32+05:30
draft: false
description: "Easy way to create N number of records."
type: "posts"
tags: [sql]
categories: [package]
aliases: [/auto-populates-database-fields/]
---

Few years back I've created many open source projects and we have seen the successfull one beatserer in my previous blog although there is another repository lying in Github and I really really thought it was cool so here I'm telling you all about that hoping you will like it.

The idea was started when my manager wanted me to populate empty database with values. It's tidious and manual process so I've created the tool that take the JSON from the user which contains just the set of rules and when you start running it will automatically populate the field with actual values.

### Installation

You can install this library from the Python PYPI index using below command.

```
pipenv install sqlg
```

You can also generate the compile version it from the source. For details go to my gitub repo of [sqlg](https://github.com/rajasimon/sglg)

### Configuration

To use the `sqlg` we need to create a JSON file. This JSON file contains all the columns and rows information. Once you created this JSON and you can feed in to sqlg.

For more information about how to configure the sqlg you can find the information in [sql](https://rajasimon.github.io/sqlg/column-properties/)
