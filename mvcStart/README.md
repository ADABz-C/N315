# MVC Start

A starter template for building web applications using an MVC (Model-View-Controller) architecture pattern with Sass for styling.

## Project Overview

This is a modular web application structure that demonstrates best practices for organizing frontend code. The project uses vanilla JavaScript modules, Sass preprocessing for stylesheets, and a clean separation between views and models.

## Project Structure

```
mvcStart/
├── index.html           # Main HTML entry point
├── package.json         # Project dependencies and scripts
├── app/
│   └── app.js          # Main application file (ES6 module)
├── model/
│   └── model.js        # Data models and business logic
├── scss/
│   ├── styles.scss     # Main Sass file (compilation target)
│   ├── card.scss       # Card component styles
│   ├── contactwrapper.scss  # Contact wrapper styles
│   └── structure.scss   # Layout and structure styles
├── css/
│   └── style.css       # Compiled CSS output (generated)
└── images/            # Image assets directory
```

## Features

- **Modular JavaScript**: Uses ES6 modules for code organization
- **Sass Preprocessing**: Organized Sass files with component-based styling
- **Live Server**: Built-in development server with auto-reload
- **MVC Architecture**: Clear separation between data models and views

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling via compiled Sass
- **Sass**: CSS preprocessor for organized and maintainable styles
- **Vanilla JavaScript**: ES6 modules, no framework dependencies
- **Live Server**: Local development server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

## Available Scripts

### Start Development Server
```bash
npm run serve
```
Launches `live-server` for local development with automatic browser refresh.

### Compile Sass
```bash
npm run compile:sass
```
Compiles `scss/styles.scss` to `css/style.css` with watch mode enabled.

## Development Workflow

1. Open two terminal windows:
   - **Terminal 1**: Run `npm run compile:sass` to watch for Sass changes
   - **Terminal 2**: Run `npm run serve` to start the development server

2. Make changes to:
   - HTML in `index.html`
   - JavaScript in `app/app.js`
   - Styles in `scss/` files

3. The browser will automatically refresh as you save changes.

## Navigation

The application includes a navigation menu with the following sections:
- HOME
- ABOUT
- CONTACT
- SERVICES

The main content is rendered in the `#app` div, with a "Load Data" button in the `#callback` div for dynamic data loading.

## How It Works

1. **index.html** - The entry point that loads the compiled CSS and JavaScript modules
2. **app/app.js** - Main application file that handles routing and UI updates
3. **model/model.js** - Contains data models and business logic
4. **scss/** - Component-based styling organized into logical files

## License

ISC
