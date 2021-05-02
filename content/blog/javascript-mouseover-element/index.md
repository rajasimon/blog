---
title: "Javascript Mouseover Element"
description: "How to add mouseover func in Javascript"
date: 2020-06-04T23:22:44+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["javascript"]
aliases: ["/javascript-mouseover-element/"]
---

How to properly add mouseover functionality in javascript. You can add `onmouseover` keyword argument in the element. 

```html
<div onmouseover="processMouseOver(this)">
    Your Children Element Here.
</div>
```

Make sure to call `this` then only function accepts element as argument otherwise will be `null`.

This is how the javascript code look like.

```javascript
function processMouseOver(element) {
    console.log(element)
}
```





> `addEventListener` works only if the element is already available in the DOM. If you add new element append to the DOM then chances are the addEventListener will not work.


