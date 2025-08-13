---
title: Blog & Publications
layout: layout.njk
permalink: /en/blog/
---

<div class="blog-container">
  <h3>Blog &amp; Publications</h3>

  {% set posts = collections.posts_en %}
  <ul>
  {% for post in posts %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
  </ul>

  {% if posts | length == 0 %}
    <p>Here you will soon find posts about AI, strategy, and decision-making in the 21st century.</p>
  {% endif %}
</div>
