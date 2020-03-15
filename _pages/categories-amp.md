---
layout: page-amp
title: "آرشیو موضوعات"
description: آرشیو پست‌ها بر اساس موضوع
permalink: "/categories-amp.html"
sitemap: false
---
{% capture site_categories %}{% for category in site.categories %}{{ category | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %} {% assign tags_list = site_categories | split:',' | sort %}
<ul class="entry-meta">{% for item in (0..site.categories.size) %}{% unless forloop.last %} {% capture this_word %}{{ categories_list[item] | strip_newlines }}{% endcapture %}
	<li><a href="#{{ this_word }}" class="tag"><span class="count">{{ site.categories[this_word].size }}</span><span class="term">{{ this_word }}</span></a>
	</li>{% endunless %}{% endfor %}</ul>{% for item in (0..site.categories.size) %}{% unless forloop.last %} {% capture this_word %}{{ categories_list[item] | strip_newlines }}{% endcapture %}
<h2 id="{{ this_word }}" class="tag-heading">{{ this_word }}</h2>
<ul>{% for post in site.categories[this_word] %}{% if post.title != null %}
	<li class="entry-title"><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
	</li>{% endif %}{% endfor %}</ul>{% endunless %}{% endfor %}
