# Web 4 link 
https://in-info-web4.luddy.indianapolis.iu.edu/~cadabany/Homework3/

# Lanterns Interest Page

This project is a small front-end web application built to present several reasons why someone should watch the TV series *Lanterns*. It uses a simple JavaScript routing pattern with hash-based navigation and renders content dynamically into the page.

## Overview

The app is a lightweight single-page experience with:

- a top navigation bar
- multiple content sections for different reasons
- dynamic page loading based on the URL hash
- custom styling written in Sass

## Features

- Home landing section with a featured image
- Four supporting reasons pages
- Smooth navigation via `#home`, `#reason1`, `#reason2`, `#reason3`, and `#reason4`
- Dynamic rendering using JavaScript modules
- Sass-based styling for layout and page presentation

## Project Structure

```text
.
├── app/
│   └── app.js
├── css/
│   └── styles.css
├── images/
├── model/
│   └── model.js
├── pages/
│   ├── home.js
│   ├── reason1.js
│   ├── reason2.js
│   ├── reason3.js
│   └── reason4.js
├── scss/
│   ├── header.scss
│   ├── page1.scss
│   ├── page2.scss
│   ├── page3.scss
│   ├── page4.scss
│   ├── page5.scss
│   ├── structure.scss
│   └── styles.scss
├── index.html
├── package.json
└── README.md
```

## Tech Stack

- HTML
- CSS
- Sass
- Vanilla JavaScript
- Live Server for local development

## Getting Started

1. Open the project folder in your editor.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run serve
   ```

4. Open the local preview in your browser.

## Sass Compilation

If you want to rebuild the stylesheet while editing Sass files, run:

```bash
npm run compile:sass
```

## Notes

This project is a simple educational/front-end exercise focused on SPA navigation and content rendering without the use of a framework or backend.
