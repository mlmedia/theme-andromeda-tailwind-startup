# Andromeda Tailwind Starter Theme

Andromeda is a minimalist one‑page theme built with Tailwind CSS and Eleventy. It provides a responsive layout with dark mode support and basic animations.

## Features

- Predefined sections: hero, services, portfolio, team and contact
- Image shortcode for responsive assets
- Dark‑mode toggle and mobile navigation

## Getting Started

1. Install dependencies
    ```bash
    npm install
    ```
2. Build the site
    ```bash
    npm run build
    ```
    Compiles templates with Eleventy and outputs static files to `dist/`.
3. Start the development server
    ```bash
    npm run dev
    ```
    Serves the site with Eleventy and watches CSS changes via Tailwind.
4. Optional: watch only CSS changes
    ```bash
    npm run tailwind
    ```

## Deployment

Upload the contents of the `dist/` directory to your static hosting provider (Netlify, GitHub Pages, etc.).

## Customization

Edit the data files under `src/data/` to update services, team members and portfolio items.

## Code formatting with Prettier

Use the command line `npx prettier` to format the entire directory.

Check first (optional)

```
npx prettier --check "**/*.{js,jsx,ts,tsx,json,css,scss,html,md}"
```

Write

```
npx prettier --write "**/*.{js,jsx,ts,tsx,json,css,scss,html,md}"
```
