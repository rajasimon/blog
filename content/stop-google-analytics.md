---
title: "Stop Google Analytics for development"
date: 2020-02-11T17:25:35+05:30
draft: false
---

For every project that I’ve set up Google Analytics, I wish Google automatically detects when I’m in local development and completely turn off analytics. For some environment, you can’t exclude the local environment just by using IP and ISP. You just need some solid way to detect you’re in the local environment. 

Well, the best person for that job is the host value. Yes, whenever you do make the HTTP call on the browser you get host attached on the request payload. 

i.e)  If you search something on google.com and you click some link on the search result and then you redirected to a different website but if you open the network tab and click the site name you will see www.google.com in the host value. 

![analytics filter local development](/images/analytics_filter_local_development.png)

Okay, so we get the host value and how we exclude the google analytics using just by host value?. First, click the New Filter and select the custom filter type and the click exclude and the select field as the hostname. And then in the filter pattern enter localhost

Now you have successfully completed the setup. Fire up the local server and browse website without fear. 

Happy Coding 
