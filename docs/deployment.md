# Deployment

## Build outputs

- **Eleventy (`frontend-11ty`)**: `npm run build` generates static files in `dist/` with compiled Tailwind CSS in `dist/assets/css/style.css`.
- **React (`frontend-react`)**: `npm run build` creates a production bundle in `dist/` via Vite.

## Hosting

- Deploy the contents of the appropriate `dist/` directory to any static hosting provider (Netlify, GitHub Pages, Cloudflare Pages, etc.).
- Configure your hosting service to serve the `dist/` directory as the site root.

## Previewing production builds locally

- Eleventy: `npm run build` then serve the `dist/` folder with any static server (e.g., `npx serve dist`).
- React: `npm run preview` to serve the Vite build locally.
