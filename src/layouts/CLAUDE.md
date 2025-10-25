# /src/layouts/ - Astro Layouts

## Purpose

Layout components that wrap page content.
Provides consistent structure (header, footer, SEO) across all pages.

## Structure

```
layouts/
└── Layout.astro   # Main layout used by all pages
```

## Key Files

### Layout.astro
- **Purpose:** Main layout wrapper for all pages
- **Used by:** All pages in `/src/pages/`
- **Provides:**
  - HTML structure (`<html>`, `<head>`, `<body>`)
  - SEO meta tags
  - Favicon links
  - Global styles (Tailwind CSS)
  - Navigation header
  - Footer
  - External scripts (AOS animations)

## Props

```typescript
interface Props {
  title: string;          // Page title
  description?: string;   // Meta description
  keywords?: string;      // Meta keywords
  image?: string;         // og:image for social sharing
}
```

## Usage Example

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Page Title"
  description="Page description for SEO"
  keywords="keyword1, keyword2, keyword3"
>
  <h1>Page Content</h1>
  <p>Your page content here...</p>
</Layout>
```

## Features

### Header/Navigation
- Logo with link to homepage
- Main navigation menu
- Mobile responsive (hamburger menu)
- Sticky header on scroll

### Footer
- Company info
- Quick links
- Contact information
- Social media links
- Copyright

### SEO
- Dynamic title tag
- Meta description
- Meta keywords
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Canonical URL

### Scripts Loaded
- **AOS (Animate On Scroll):** For scroll animations
  - CDN: unpkg.com/aos@2.3.1
  - Initialized on page load
- **Tailwind CSS:** Via CDN or build process

### Styles
- Tailwind CSS utilities
- Custom CSS for specific components
- Responsive design (mobile-first)

## Recent Changes

- [2025-10-25 Initial] Created main Layout.astro with header, footer, SEO

## Customization

### Adding Global Styles
```astro
<style is:global>
  /* Your global CSS here */
  .custom-class {
    /* styles */
  }
</style>
```

### Adding External Scripts
```astro
<script src="https://cdn.example.com/script.js"></script>
```

### Modifying Header/Footer
Edit the respective sections in Layout.astro

## Notes

- Layout is server-rendered (no client-side hydration needed)
- AOS animations work automatically on all pages
- SEO tags are auto-generated from props
- Mobile navigation uses JavaScript for toggle

## Future Improvements

- Add dark mode toggle
- Add breadcrumbs for SEO
- Add schema.org structured data
- Add cookie consent banner
- Optimize script loading (defer, async)
