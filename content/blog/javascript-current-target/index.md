---
title: "Javascript Current Target"
description: "How to get the current target element in onclick"
date: 2020-06-02T23:46:09+05:30
draft: false
type: "posts"
categories: [development]
tags: [javascript]
aliases: ["/javascript-current-target/"]
---

If you’re reading this then chances are you’re working on the onclick event handler. This will return the event where it’s clicked instead of the parent element. If that’s the case then you’re in the right place. I’m going to explain how do we get the target element instead of where it’s clicked.

Let’s see the simple example here. And then I will explain about  how to get it done.

```html
<a onclick=handleCheck()>
    <span class="span">
        <i class="fas fa-check"></i>
    </span>
</a>
```

The about example is very simple but every time I click the element I'm getting different event not the parent `a` element. For example if you click somewhere in the middle you will get the event with target to `span` or `i` not the parent `a href` element.

## So How do we solve this?

The answer is `currentTarget`. In the event you can get the `currentTarget` which is the parent of all the element that responsible for the click event.

```javascript
function handleCheck(event) {
    console.log("Current Target", event.currentTarget)
}
```