---
layout: "layout.njk"
title: "Blog & Publikacje"
permalink: "/pl/blog/"
---

<h1>Blog & Publikacje</h1>

<ul>
{% for post in collections.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>

{% if collections.posts | size == 0 %}
  <p>Brak wpisów na blogu.</p>
{% endif %}
