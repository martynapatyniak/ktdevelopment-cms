---
layout: layout.njk
title: "Blog & Publikacje"
permalink: /pl/blog/
---

<div class="blog-container">
  <h3>Blog &amp; Publikacje</h3>

  {% set posts = collections.posts_pl %}
  <ul>
  {% for post in posts %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
  </ul>

  {% if posts | length == 0 %}
    <p>Tutaj wkrótce pojawią się wpisy o AI, strategii i podejmowaniu decyzji w XXI wieku.</p>
  {% endif %}
</div>
