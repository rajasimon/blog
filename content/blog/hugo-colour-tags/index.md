---
title: "How to add colour to Hugo Tags"
description: "Add colors to Hugo tags and categories. Blog post tags differnt color for each tag."
date: 2020-07-07T22:53:01+05:30
draft: false
type: "posts"
categories: ["development"]
tags: ["hugo"]
banner: "content/hugo-colour-tags-banner.png"
---

Glad that I've chosen Hugo for blogging. It's one of the best static site generator. If you want me to describe Hugo in two words, then it's simple and impressive. Hugo using GO language and their templating method seems boring from the beginner's perspective, but it's suitable for all use cases. 

 When designing the templating for the rajasimon.io blog, I want to create a colorful tag appearance in my blog feed. It's was no easy task at the beginning but glad that I got it working. Here is the detail about how to implement the same effect on your blog. 

First, create the custom params in your Hugo config. I've using toml, and here is the detail for how to add custom params. 

```python
[params]
    hugo = "#c9177e"
```

After you add the above params, make sure you set the tags custom block in your markdown file. 

```markdown
hugo-colour-tags.md
---
tags: ["hugo]
---
```

### Partials

Create partials HTML file called `colotags.html` this will be the html file that contains the code for coloring the tags.

Now in your `list.html`file add `{{ partial "colortags" . }}` and then follow the next steps to customize the partials.

### Coloring

First you need to assign the parmas.tags to range variable because tags will be multiple in some cases. And after that you can check the tag is `hugo` or differnt, based on the tag you can return the value. 

Here is the code for that if else statement. 

```html
{{ range $tag := .Params.tags }}
{{ if eq $tag "hugo" }}
  <span class="tag" style="background-color: {{ $.Site.Params.hugo }};">{{ $tag }}</span>
{{ else if eq $tag "gatsby" }}
  <span class="tag" style="background-color: {{ $.Site.Params.gatsby }};">{{ $tag }}</span>
{{ else }}
  <span class="tag" style="background-color: #000000;">{{ $tag }}</span> 
{{ end }}
```

This is how you add colors to the hugo tags. And add more tags for your blog and start coloring the tags. 