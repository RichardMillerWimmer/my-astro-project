---
theme: moon
---

# Astro

![Astro Logo](AstroPost.jpg)

---

## What is Astro?

Astro is a modern static site builder that focuses on developer experience and lightweight output.

---

## Why use Astro

You can use Astro for websites that are going to be changing less frequently and have less interaction than monsterous mondern web applications.

Using Astro allows you to ship HTML and CSS with as little JavaScript as possible creating a very fast user experience.

---

## Key Features

<div class='align-left'>
🚀 Astro syntax - .astro file extension

<!-- .element: class="fragment" -->

🚀 Partial Hydration - Island Architecture

<!-- .element: class="fragment" -->

🚀 Use your favorite framework or frameworks in an Astro app

<!-- .element: class="fragment" -->
</div>

---

## Astro Syntax

Astro uses its own files marked by the .astro extension.
There is a VS Code extension for working with .astro files.
This looks a lot like HTML (and JSX) plus the top frontmatter.

---

## Partial Hydration

By default everything is rendered to HTML and no JavaScript is send to the client.
Astro has an opt-in mentality for components that need JavaScript on the frontend.
Including the `client` prop on the component allows you to hydrate that component on the front end.

---

## Frameworks

Astro support rendering frameworks inside an Astro app.

- React
- Svelte
- Vue
- Solid
- Preact
- Alpine
- Lit
- Vanilla JS

---

## Getting Started

🚀`npm init astro` - no need to install a new package globally

<!-- .element: class="fragment" -->

🚀`npm install`

<!-- .element: class="fragment" -->

🚀`npm run dev`

<!-- .element: class="fragment" -->

🚀`npm run build`

<!-- .element: class="fragment" -->

---

## Let's look at a sample project!
