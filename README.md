# Elkanah — portfolio

A single-page-app portfolio built with React, Vite and React Router.

    npm install
    npm run dev      # local dev server
    npm run build    # production build into dist/
    npm run lint

---

## Where your images go

Every picture currently in the project is a **placeholder**. Each one has a
purple box that says REPLACE THIS FILE. Overwrite the file — keep the exact same
name — and the site picks it up. Nothing else needs changing.

| File to overwrite | What to put there | Shape |
| --- | --- | --- |
| `src/assets/images/me.jpg` | Your photo, shoulders up | square (1:1) |
| `src/assets/images/projects/project-01.png` | Screenshot of project 1 actually running | wide (16:10) |
| `src/assets/images/projects/project-02.png` | Screenshot of project 2 actually running | wide (16:10) |
| `src/assets/images/projects/project-03.png` | Screenshot of project 3 actually running | wide (16:10) |
| `src/assets/brand/logo.png` | Your logo | square (1:1) |
| `public/logo.png` | Same logo. This is the browser-tab icon | square (1:1) |

Session 5, Part C — names matter:

- **Lowercase, no capitals.** `me.jpg`, not `Me.JPG`.
- **Dashes, not spaces.** `project-01.png`, not `Screenshot 2026-09-27 at 14.32.png`.
- **Rename before you copy it in.** It is cleaner than doing it after.

If you swap a `.png` for a `.jpg`, you must update the one `import` line at the
top of `src/data/projects.js` to match.

### The logo is in two places on purpose

`public/logo.png` is served by the browser directly, which is what the tab icon
needs (`<link rel="icon">` in `index.html`). `src/assets/brand/logo.png` is the
one Vite processes for the page itself.

---

## Where things live

```
src/
  assets/
    brand/logo.png              your logo
    images/
      me.jpg                    your photo
      projects/project-01..03.png
  components/
    Navbar.jsx                  shown on every page
    Footer.jsx                  shown on every page
    ScrollManager.jsx           hash jumps + scroll-to-top on route change
    Hero.jsx  About.jsx  Skills.jsx  Projects.jsx  Contact.jsx
    ProjectPage.jsx             the shared shape of a detail page
  data/
    projects.js                 names, pictures and paths -- written ONCE
  pages/
    Home.jsx                    the dashboard: a bit of everything
    ProjectOne/Two/Three.jsx    the whole story of one thing
    NotFound.jsx
  App.jsx                       <Navbar> <Routes> <Footer>
  main.jsx                      wraps App in <BrowserRouter>
  index.css                     colour + spacing tokens, shared classes
  App.css                       per-section layout
public/
  logo.png                      browser-tab icon
  _redirects                    "/* /index.html 200" for Netlify
```

### Two rules this project follows

**Say it once.** No colour is typed twice — they all live as named tokens at the
top of `src/index.css`. No project path is typed twice — they all live in
`src/data/projects.js`, which both the cards and the routes read. That is why a
card can never point at a page that does not exist.

**One thing shouts.** `Get in touch` is the only solid button on the page.
Everything else whispers.

---

## Deploy

Netlify builds from GitHub. `public/_redirects` must exist, with an **s**, with
no file extension. Without it, every page except the home page returns 404 the
moment somebody refreshes it.
