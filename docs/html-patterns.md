# Shared HTML Patterns

## Shell pattern
Use this same header/footer structure across all pages.

```html
<link rel="stylesheet" href="/assets/css/main.css" />
<script defer src="/assets/js/main.js"></script>
<header class="site-header">...</header>
<main id="main-content">...</main>
<footer class="site-footer">...</footer>
```

## Hero pattern
```html
<section class="hero reveal">
  <h1>Page title</h1>
  <p>Lead copy</p>
</section>
```

## Card grid pattern
```html
<div class="card-grid">
  <article class="card reveal">
    <h3>Card title</h3>
    <p>Card summary</p>
    <a class="btn-link" href="#">Read more</a>
  </article>
</div>
```

## Embedded media pattern
```html
<div class="media-wrap reveal">
  <iframe src="https://www.youtube.com/embed/EXAMPLE" title="Video title" loading="lazy" allowfullscreen></iframe>
</div>
```
