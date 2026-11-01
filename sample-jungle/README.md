# The Jungle Cook


## Web 4: https://in-info-web4.luddy.indianapolis.iu.edu/~cadabany/n315homework6/

The Jungle Cook is a recipe website built as a class project. It uses a playful visual style with warm colors, custom fonts, and responsive login and sign-up pages.

## Tech stack

- Vanilla JavaScript with ES modules
- Vite
- Sass (SCSS)
- Google Fonts: Caveat, Lato, and Inter

## Getting started

Install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview a production build:

```bash
npm run preview
```

## Project structure

- [index.html](index.html) — HTML shell containing the shared header, footer, and app container.
- [src/main.js](src/main.js) — Imports the styles, initializes the app, handles hash-route changes, and displays form-submission toast messages.
- [src/model/model.js](src/model/model.js) — Loads page modules dynamically based on the current hash route.
- [src/pages/home.js](src/pages/home.js) — Home page content.
- [src/pages/login.js](src/pages/login.js) — Login page markup.
- [src/pages/signup.js](src/pages/signup.js) — Sign-up page markup.
- [src/sass/styles.scss](src/sass/styles.scss) — Imports the project’s SCSS files.
- `src/sass/auth.scss`, `src/sass/login.scss`, and `src/sass/signup.scss` — Shared and page-specific authentication styles.
- [src/sass/home.scss](src/sass/home.scss) — Home page styling.
- [src/sass/header.scss](src/sass/header.scss) and [src/sass/footer.scss](src/sass/footer.scss) — Shared header and footer styling.

## Navigation

The app uses hash-based routes. For example, `#home`, `#login`, and `#signup` load their corresponding page modules into the `#app` container. Page files use default-exported functions that return HTML template strings.

## Forms

The login and sign-up forms use native browser validation. Submissions are handled on the client and display a toast message; they do not currently authenticate users or save account information to a backend.

## Notes

Some header and footer links point to routes that may not have page modules yet. Those routes display the app’s not-found message until the corresponding pages are added.