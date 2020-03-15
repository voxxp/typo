---
layout: page
title: "آرشیو موضوعات"
description: آرشیو پست‌ها بر اساس موضوع
permalink: "/categories"
---
<section class="mx-3 tag-list">{% capture site_categories %}{% for category in site.categories %}{{ category | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %} {% assign categories_list = site_categories | split:',' | sort %} {% for item in (0..site.categories.size) %}{% unless forloop.last %} {% capture this_word %}{{ categories_list[item] | strip_newlines }}{% endcapture %} <a class="btn btn-outline-secondary btn-sm" href="#{{ this_word }}" role="button">{{ this_word }}<span class="badge badge-light">{{ site.categories[this_word].size }}</span></a>
	{% endunless %}{% endfor %}
	<hr>{% for item in (0..site.categories.size) %}{% unless forloop.last %} {% capture this_word %}{{ categories_list[item] | strip_newlines }}{% endcapture %}
	<h2 id="{{ this_word }}">{{ this_word }}</h2>
	<ul>{% for post in site.categories[this_word] %}{% if post.title != null %}
		<li><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
		</li>{% endif %}{% endfor %}</ul>{% endunless %}{% endfor %}</section>
