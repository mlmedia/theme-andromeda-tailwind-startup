# Development

## Prerequisites

- Node.js and npm installed.
- Clone this repository and choose the implementation you want to work on (`frontend-11ty` for Eleventy or `frontend-react` for React).

## Project structure

- `frontend-11ty/`: Eleventy static site with Tailwind CSS.
- `frontend-react/`: React + Vite build with Tailwind CSS.

## Installing dependencies

Run `npm install` inside the implementation you plan to use:

```bash
cd frontend-11ty && npm install
# or
cd frontend-react && npm install
```

## Scripts

Documented by implementation.

### Eleventy (`frontend-11ty`)

- `npm run dev`: Serve Eleventy locally while watching templates and Tailwind output (`npx eleventy --serve --watch` + Tailwind watch).
- `npm run build`: Clean `dist/`, build Eleventy pages, and generate minified Tailwind CSS into `dist/assets/css/style.css`.
- `npm run tailwind`: Watch and build Tailwind CSS only to `dist/assets/css/style.css`.
- `npm run sass`: Watch and compile SCSS from `assets/scss` to compressed CSS in `assets/css`.

### React (`frontend-react`)

- `npm run dev`: Start the Vite dev server.
- `npm run build`: Build the production bundle to `dist/`.
- `npm run preview`: Preview the Vite production build locally.

## Running locally

Choose one implementation and run its dev script:

```bash
cd frontend-11ty && npm run dev
# or
cd frontend-react && npm run dev
```

## Formatting

Prettier keeps formatting consistent across the project. From the repository root:

```bash
npx prettier --check "**/*.{js,jsx,ts,tsx,json,css,scss,html,md}"
```

To automatically format files:

```bash
npx prettier --write "**/*.{js,jsx,ts,tsx,json,css,scss,html,md}"
```

With VS Code, enable `"editor.formatOnSave": true` to format files on save using the project `.prettierrc`.
