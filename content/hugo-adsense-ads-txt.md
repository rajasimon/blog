---
title: "Hugo Adsense Ads Txt"
description: "How to add Adsense Ads Txt in Hugo Blog"
date: 2020-07-02T08:53:28+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["hugo"]
---
You are here because you just got approved by Adsense and you want to place ads.txt in your blog. But, you don’t know where to begin. I’ve the simple solution for you to serve ads.txt from your hugo blog. 

> Authorized Digital Sellers, or ads.txt is an IAB Tech Lab initiative that helps ensure that your digital ad inventory is only sold through sellers (such as AdSense) who you've identified as authorized. Creating your own ads.txt file gives you more control over who's allowed to sell ads on your site and helps prevent counterfeit inventory from being presented to advertisers.

Hugo allows you to customise the `robots.txt` but not the `ads.txt` and it’s impossible to serve through layout design patterns. Instead, It’s recommended to place the `ads.txt` file in your `static` folder. 

```
static
├── ads.txt
```

This is the best way to place `ads.txt` in your blog and once you place that file in static folder then it will be available in `localhost:1313/ads.txt` 