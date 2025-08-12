---
layout: layout.njk
title: "Blog & Publikacje"
permalink: /blog/
---

<div class="blog-container">
  <h3>Blog &amp; Publikacje</h3>

  <ul>
  {% for post in collections.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
  </ul>

  {% if collections.posts | length == 0 %}
    <p>Tutaj wkrótce pojawią się wpisy o AI, strategii i podejmowaniu decyzji w XXI wieku.</p>
  {% endif %}
</div>
