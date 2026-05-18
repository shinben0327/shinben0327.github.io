---
layout: page
permalink: /interests/
title: interests
description: A few things outside of work that I enjoy.
nav: true
nav_order: 4

_styles: >
  .music-shelf { line-height: 0; }
  .music-shelf figure.cover { line-height: 1.2; vertical-align: top; }
  .music-shelf figure.cover img,
  .music-shelf figure.cover iframe { height: 200px; border-radius: 4px; display: block; }
  .music-shelf figure.cover iframe { width: 356px; border: 0; }
  .music-shelf figure.cover figcaption {
    margin-top: 0.4rem;
    font-size: 0.85rem;
    max-width: 356px;
    white-space: normal;
  }
  .music-shelf figure.cover figcaption .title { font-weight: 600; }
  .music-shelf figure.cover figcaption .artist { color: var(--global-text-color-light); }
---

## Music

<div class="music-shelf">
{% for entry in site.data.music %}
  <figure class="cover">
    {% if entry.youtube %}
      <iframe
        src="https://www.youtube.com/embed/{{ entry.youtube }}"
        title="{{ entry.title | default: 'YouTube video' }}"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    {% elsif entry.cover %}
      {% if entry.link %}<a href="{{ entry.link }}" target="_blank" rel="noopener">{% endif %}
        <img alt="{{ entry.title }}{% if entry.artist %} — {{ entry.artist }}{% endif %}"
             src="{{ entry.cover | relative_url }}">
      {% if entry.link %}</a>{% endif %}
    {% endif %}
    {% if entry.title or entry.artist or entry.note %}
      <figcaption>
        {% if entry.title %}<div class="title">{{ entry.title }}</div>{% endif %}
        {% if entry.artist %}<div class="artist">{{ entry.artist }}</div>{% endif %}
        {% if entry.note %}<div class="note">{{ entry.note }}</div>{% endif %}
      </figcaption>
    {% endif %}
  </figure>
{% endfor %}
</div>
