---
title: "How to PostCSS in Hugo"
description: "how to PurgeCSS in hugo with PostCSS Pipe"
date: 2021-04-28T16:00:39+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["hugo"]
banner: "content/postcss-in-hugo-banner.png"
---

This blog website you are reading is powered by Hugo. Hugo is one of the best static site framework out there. It’s boring because there is a steep learning curve is there to learn all the things Hugo offer. But most of the time it’s simple enough for a beginner who just started blogging. Also, it’s powerful enough for most of the customization you need for a very big blog site. 

If you see the source code you come to know that I am not using bootstrap. Instead, I am using Bulma. Another CSS-only framework to create a modern application without much of the class attributes. I was using CDN for the Bulma to load in my browser and now I am switching to Hugo to serve the static files. It’s because I want to reduce the Bulma size. The current version of the Bulma loads Gzip size of 26.7KB.  And after the process now it’s reduced to 3.5K. Which is highly low and because of that now the web page loads instantly. 

### Get Static file for processing
The first thing you need is to get the CSS file. I have placed my Bulma file under the static folder. 

``` 
static/
    bulma/
        bulma.css
```

After I have placed Bulma CSS inside the static folder now I have to convert it into Hugo go variable.  To do that we need to use `resources`. I have to mention here in my config file I have mentioned my asset folder as static in case if you use the different static folder you need to mention that in config asset folder. `assetDir = "static"`

Now that we got the static folder defined it’s time to do the actual coding. Now in my baseOf.html file, I have a link tag that previously pointed to CDN.  And now I am using resources to get the local static file and do the Hugo pipe process. 

``` go
{{ $css := resources.Get "bulma/bulma.css" }}
```

Note that I am not using static anywhere in the code. This line of code gets the bulma.css file and assigns to the `$css` variable.  After this, we can use the PostCSS from resources to pipe it. 

```go
{{ $css := $css | resources.PostCSS }}
{{ $css = $css | minify | fingerprint | resources.PostProcess }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
```

And that’s pretty much for the actual coding in the baseOf.html file. You see once we got the Hugo variable from resources then I am using PostProcess to convert it into fingerprint and minify and once all of the piping is complete we can use the Hugo method RelPermalink to get the CSS file.

### PostCSS configuration. 
First, you need to install these modules from NPM and then create postcss.config.js file.
```bash
npm i @fullhuman/postcss-purgecss autoprefixer postcss postcss-cli
```

Once all the mentioned packages are installed write purge process code in PostCSS config file. This will help reduce the unwanted class variables from the file output. 

```js
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  }
});

module.exports = {
  plugins: [
    require('autoprefixer'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [purgecss]
      : []
  ]
}
```

Please make sure you only apply the PurgeCSS in production. And I think it’s okay to have that in local development as well. If you notice I have hugo_stats in local. This is created by Hugo if you mention `writeStats: true` in config. This will create a file with all of the class variables used in the Hugo theme template HTML file. And that will help the PurgeCSS to remove the unwanted CSS classes. 

### Conclusion
Have to get the static file and then use PostCSS to remove the unwanted CSS classes to reduce the final CSS file dramatically. 