---
layout: layout.njk
title: "Blog & Publikacje"
permalink: /blog/
---

<h1>Blog & Publikacje</h1>

<p style="opacity:.6">Liczba wpisów: {{ collections.posts | length }}</p>

<ul>
{% for post in collections.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <small>— {{ post.date | date("yyyy-LL-dd") }}</small>
  </li>
{% endfor %}
</ul>

{% if collections.posts | length == 0 %}
  <p>Brak wpisów na blogu.</p>
{% endif %}
