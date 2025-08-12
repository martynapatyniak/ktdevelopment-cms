---
layout: layout.njk
title: "Blog & Publikacje"
permalink: /blog/
---

<h1>Blog &amp; Publikacje</h1>

<ul>
{% for post in collections.posts %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
