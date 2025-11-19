# Henly Website

Henly is Pakistan's Poultry Marketplace.

## Development

- Install deps: npm install
- Run dev: npm run dev
- Typecheck: npm run typecheck
- Build: npm run build

## SEO

This site includes basic SEO setup:

- Global meta tags in `index.html` (description, theme-color, Open Graph, Twitter).
- Per-page tags via `react-helmet-async` using the `SEO` component in `src/components/SEO.tsx`.
- Robots and sitemap in `public/robots.txt` and `public/sitemap.xml`.
- Social share image at `public/og-image.svg`.

To add a new route:
- Add a `<SEO .../>` to the page component with a unique title and description.
- Add the route URL to `public/sitemap.xml`.
- Ensure internal links reference the new page.

## Production Deployment (Namecheap Shared Hosting)

Simple flow: push to `main` → GitHub Action builds → uploads files via FTP to `public_html`.

### One-time setup
1. Create FTP account in cPanel pointing to `public_html`.
2. Add GitHub repo secrets:
	- `FTP_SERVER` (e.g. server hostname or `ftp.henly.co` after DNS points)
	- `FTP_USERNAME`
	- `FTP_PASSWORD`
	- `DEPLOY_DOMAIN` = `henly.co`
3. Ensure `.htaccess` in `public/` contains SPA rewrite rules (it is already included).
4. Compliance pages (`/privacy`, `/account-deletion`) are now served directly by the React SPA; no separate static HTML copies are required. Ensure the build deploys `.htaccess` for route rewriting.

### Manual verification
After first deploy or any major change:
```bash
curl -I https://henly.co/
curl -I https://henly.co/privacy
curl -I https://henly.co/account-deletion
curl -I https://henly.co/sitemap.xml
```
Expect HTTP 200 for all routes.

### Rebuilding locally
```bash
npm ci
npm run build
```
The Vite build outputs to `dist/`. The workflow in `.github/workflows/deploy.yml` will upload that directory.

### Common issues
- 404 on deep link: Check `.htaccess` deployed and not renamed.
- Missing styles: Confirm `assets/` folder uploaded (build creates hashed files).
- FTP failure: Recheck secrets & server host; try server hostname instead of domain until DNS propagates.

## Media / Image Management via cPanel

You can manage user-facing marketing images directly in cPanel without rebuilding the app.

### Directory
Public media assets live in `public/media/` (the folder exists with a `.keep` file so Git tracks it). During deployment the GitHub Action excludes `media/**` so existing files are never deleted or overwritten.

### Adding or Updating Images
1. Open cPanel File Manager.
2. Navigate to `public_html/media/` (after first deploy this mirrors `public/media/`).
3. Upload new images (optimize them locally first: compress to reasonable size, use `.webp` or `.avif` where possible, fallback `.jpg`/`.png` if needed).
4. Reference them in React components with an absolute path `/media/your-image.webp`.

### Referencing in Components
```tsx
<img src="/media/hero-banner.webp" alt="Henly hero banner" loading="lazy" />
```

### Cache & Performance
Consider adding long cache headers for the media directory in `.htaccess`:
```apache
<IfModule mod_headers.c>
	<FilesMatch "\.(png|jpe?g|gif|webp|avif|svg)$">
		Header set Cache-Control "public, max-age=2592000, immutable"
	</FilesMatch>
</IfModule>
```
When you replace an existing file, browsers may serve the cached version—use unique filenames or add a query param (e.g. `/media/hero-banner.webp?v=2`) when you change content.

### Do Not Store
- User uploads (use a storage service or object storage for dynamic content).
- Secrets or configuration (media folder is public).

### Backups
Because `media/**` is excluded from deploy deletion, always keep a local copy or periodically download the folder for backup. You can also create a secondary FTP account restricted to `media/` for limited access.

### Adding New Media Folder Variants
If you want separate folders (e.g. `media/team/`), just create them in cPanel; they remain untouched by automated deploys as long as they are under `media/`.

### Troubleshooting
- 404 after upload: Confirm file placed under `public_html/media/` and path matches `/media/<filename>`.
- Broken image after replacement: Clear browser cache or append version query.
- Large images slowing page: Resize to display dimensions and compress.


