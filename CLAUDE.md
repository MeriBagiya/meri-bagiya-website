# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Meri Bagiya is a React.js e-commerce single-page application for a plant nursery and garden services business. Built with Create React App using React 19 and React Router v7.

## Common Commands

```bash
npm start          # Development server on http://localhost:3000
npm run build      # Production build to /build folder
npm test           # Run tests in watch mode
```

## Architecture

### Routing Structure (src/index.js)

Uses React Router v7 with nested routes under the App layout:

- `/` - Homepage (shop-homepage.jsx)
- `/catalog` - Product catalog
- `/shop-all` - All products grid
- `/single-product` - Product detail page
- `/contact` - Contact form with reCAPTCHA
- `/services` - Services overview
- `/service-single` - Service detail page
- `/blog` - Blog articles
- `/about` - About us page
- `/shop-cart` - Shopping cart

### Layout Pattern

`src/App.js` wraps all pages with shared Header and Footer components:

- `src/layout/header.jsx` - Navigation, search, cart/wishlist icons
- `src/layout/footer.jsx` - Company info, links, contact details

### Data

Product data is in `src/pages/Plantslist.json` (12 products with id, name, price, image URL, description, rating, discount).

### Static Assets

All CSS, JS libraries, and images are in `public/assets/`:

- CSS: Bootstrap, plugins, swiper, main styles
- JS: Swiper, custom carousels, contact form handling
- Images: Product photos, backgrounds, logos

### Styling Approach

Styling uses external CSS files loaded via `public/index.html`. Component-specific styling is minimal - most pages rely on Bootstrap classes and the theme's CSS.

## Key Files

| File                          | Purpose                                           |
| ----------------------------- | ------------------------------------------------- |
| `src/index.js`                | Entry point with React Router configuration       |
| `src/App.js`                  | Layout wrapper (Header + page content + Footer)   |
| `src/pages/shop-homepage.jsx` | Main landing page (largest component ~1600 lines) |
| `src/pages/Plantslist.json`   | Product data source                               |
| `public/index.html`           | HTML template with CSS/JS imports                 |

## Notes

- No state management library - components manage local state
- Firebase integration exists (see build/.firebase)
- ESLint uses standard react-app configuration
- reCAPTCHA integrated on contact form

## Plan

At the end of each plan give me a list of unresolved questions to answres, if any. make question extremly consiss. Serface the grammer for the sake of concision.

## Git

Use this https://github.com/MeriBagiya/ base git hub url to push the code.
