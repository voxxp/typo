---
layout: page
title: "آرشیو تگ‌ها"
description: آرشیو پست‌ها بر اساس تگ
permalink: "/tags"
---

<section class="mx-3 tag-list">
  {% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
  {% assign tags_list = site_tags | split:',' | sort %}
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
  <a class="btn btn-outline-secondary btn-sm" href="#{{ this_word }}" role="button">{{ this_word }}<span class="badge badge-light">{{ site.tags[this_word].size }}</span></a>
  {% endunless %}{% endfor %}
  <hr>
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
  <h2 id="{{ this_word }}">{{ this_word }}</h2>
  <ul>
    {% for post in site.tags[this_word] %}{% if post.title != null %}
    <li><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
    {% endif %}{% endfor %}
  </ul>
  {% endunless %}{% endfor %}
</section>
