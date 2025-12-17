# Andromeda Tailwind Starter Theme

Andromeda is a minimalist one‑page theme built with Tailwind CSS and Eleventy. It provides a responsive layout with dark mode support and basic animations.

## Features

-   Predefined sections: hero, services, portfolio, team and contact
-   Image shortcode for responsive assets
-   Dark‑mode toggle and mobile navigation

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

We use Prettier to keep code style consistent. Prettier automatically formats code so spacing, semicolons, and indentation are the same for everyone.

Check formatting (shows files that need changes):

```
npx prettier --check "**/*.{js,jsx,ts,tsx,json,css,scss,html,md}"
```

Format files (writes changes in place):

```
npx prettier --write "**/*.{js,jsx,ts,tsx,json,css,scss,html,md}"
```

If you install the Prettier – Code Formatter extension in VS Code and enable `"editor.formatOnSave": true`, files will format automatically on save using the project’s `.prettierrc`.
