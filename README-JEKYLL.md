# Jekyll Site for GitHub Pages

This is a Jekyll-based static site converted from Next.js, ready to deploy on GitHub Pages.

## Setup

1. Install Ruby and Bundler (if not already installed)
2. Install dependencies:
   ```bash
   bundle install
   ```

## Local Development

Run the Jekyll server:
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site.

## Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to your repository Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: `main` (or `gh-pages`)
5. Select folder: `/ (root)`
6. Click Save

GitHub Pages will automatically build and deploy your site.

## Project Structure

- `_config.yml` - Jekyll configuration
- `_data/` - YAML data files (company.yml, products.yml)
- `_layouts/` - HTML layouts
- `_includes/` - Reusable components (icons.html)
- `assets/` - CSS, JS, and images
- `index.html` - Main page with Liquid templating

## Notes

- All React components have been converted to HTML/Liquid templates
- React state management replaced with vanilla JavaScript
- Lucide React icons replaced with inline SVG icons
- Data files converted from JavaScript to YAML format

