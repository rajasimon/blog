---
title: "Why I'm no longer pursuing Blogstreak"
description: "The reason for why I stopped working for my blogstreak project."
date: 2021-03-01T09:00:00+05:30
draft: false
type: "posts"
categories: ["personal"]
tags: ["life"]
aliases: ["/longer-pursuing-blogstreak/"]
---

I got frustrated with the project development. It’s because of that I can’t do it but it’s like the project itself very simple to develop but I want the secure and most easy way and there is no one. 

So I’m putting pause for the blogstreak application development and have to focus on my freelancer career. This is like I’m going to secure more stable job and then I will come back to the simple idea. 

I’m going to draw the technical detail here and you judge it here why I’m not going to work.  First of all the blogstreak is the third party component. If you’re my customer then you need to install the javascript library in your html file and then you need to place few more tags in your HTML file then only the clap button will appear correctly. It’s fine but the clap button to work user should authenticate right and that’s where the problem arise.

You can’t make anyone allow to clap the blog article and that’s why I’ve implemented the modal pop up like authentication flow. This authentication flow will exactly mimics the medium authentication but instead of the own domain and all it’s now running in entirely the client domain. So it’s impossible for me to set the JWT token securely in the client side.

In my server side I’m setting the Set-Cookie header but that’s working on the chrome browser but not on the safari side. The more I look into that stuff I realised that it’s not the ideal way to develop the application. In simple terms it’s not good practice to store JWT token in the localstorage nor the session storage. 

One other promising solution I found is that the CNAME record. I will ask the client to add the CNAME record that pointing to the subdomain and that allow me to make the API request with the credential true. I’m not 100% sure about that idea too but will try when I will restart the project.

I want to help the bloggers particularly the static blogger and that’s why I’ve created this project but later I realised that it’s all the fancy one and most of the blogs running perfectly without the clap and comment at all. Even if you need to contact the blogger then they can leave the email in it. Also I found that there is two open source that easily do the above mentioned problem. So let me put a pause here and to see what comes next.