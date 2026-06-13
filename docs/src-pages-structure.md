# /src/pages/ - Astro Pages & Routes

## Purpose

This folder contains all **Astro page components** that define the routes of the website.
Each `.astro` file here becomes a route automatically (file-based routing).

## Structure

```
pages/
├── index.astro          # Homepage (/)
├── services.astro       # Services page (/services)
├── blog.astro           # Blog list (/blog)
├── blog/
│   └── [...slug].astro  # Individual blog post (/blog/article-title)
├── about.astro          # About page (/about)
├── contact.astro        # Contact form (/contact)
└── realisations.astro   # Portfolio (/realisations)
```

## Key Files

### index.astro (Homepage)
- **Status:** ✅ Fully integrated with CMS
- **Purpose:** Main landing page with hero, stats, services preview
- **CMS Integration:**
  - Imports `hero.json` for hero content
  - Imports `stats.json` for statistics (20+, 500+, 100%, 5+)
  - Dynamic rendering of hero title, subtitle, description, CTA
  - Dynamic stats with labels
- **Features:**
  - Parallax hero effect (JavaScript-based)
  - AOS animations
  - Stats badges
  - Services preview grid
  - Blog preview

### services.astro
- **Status:** ❌ NOT integrated with CMS (hardcoded HTML)
- **Purpose:** Display all electrical services offered
- **Current Issue:** All 15+ services are hardcoded in HTML
- **TODO:** Read from `/src/content/services/*.md` files and loop dynamically
- **Features:**
  - Domotique section (6 services)
  - Électricité générale section (9 services)
  - Zones d'intervention
  - CTA section

### blog.astro
- **Status:** ✅ Reads from content collection
- **Purpose:** List all blog articles
- **Features:**
  - Grid of blog cards
  - Category filters
  - Read time
  - Pagination (if needed)

### blog/[...slug].astro
- **Status:** ✅ Dynamic route for blog articles
- **Purpose:** Individual blog post page
- **Features:**
  - Full markdown rendering
  - SEO meta tags
  - Share buttons
  - Related articles

### about.astro
- **Status:** ⚠️ Static content (could be CMS-ified)
- **Purpose:** About the company page
- **Features:**
  - Company presentation
  - Certifications
  - Team info

### contact.astro
- **Status:** ⚠️ Static form (could integrate Netlify Forms)
- **Purpose:** Contact form
- **Features:**
  - Contact form
  - Company info
  - Map (if implemented)

## Recent Changes

- [2025-10-25 20:35] **index.astro** - Integrated hero.json and stats.json for CMS editing
- [2025-10-25 20:30] **index.astro** - Added imports for CMS JSON files
- [2025-10-25 20:10] **index.astro** - Fixed all "15+ years" → "20+ years" (3 locations)
- [2025-10-25 19:30] **index.astro** - Fixed parallax JavaScript and CSS

## Code Patterns

### Importing CMS Content (JSON)
```astro
---
import heroData from '../content/home/hero.json';
import statsData from '../content/home/stats.json';
---

<h1>{heroData.title}</h1>
<p>{statsData.experience.value}</p>
```

### Importing Content Collections (Markdown)
```astro
---
import { getCollection } from 'astro:content';

const blogPosts = await getCollection('blog');
const services = await getCollection('services');
---

{blogPosts.map(post => (
  <article>
    <h2>{post.data.title}</h2>
    <p>{post.data.excerpt}</p>
  </article>
))}
```

## Next Steps

### High Priority
1. **services.astro** - Replace hardcoded HTML with dynamic content from markdown files
   ```astro
   ---
   import { getCollection } from 'astro:content';
   const services = await getCollection('services');
   const sortedServices = services.sort((a, b) => a.data.order - b.data.order);
   ---
   ```

### Medium Priority
2. **about.astro** - Create CMS collection for about page content
3. **contact.astro** - Integrate Netlify Forms or other form service

### Low Priority
4. Add more dynamic sections to index.astro
5. Create pagination for blog.astro if > 10 articles

## Notes

- All pages use the same layout: `/src/layouts/Layout.astro`
- SEO metadata is defined in each page's frontmatter
- Parallax effect is specific to index.astro
- AOS animations are imported in Layout.astro and work on all pages

## Common Issues

### Build Errors
If a page fails to build, check:
- Frontmatter syntax (YAML)
- Import paths
- Content collection schema compliance
- Missing required fields in markdown frontmatter

### CMS Integration Issues
- Always test `npm run build` after CMS changes
- Ensure content collections have correct schema in `/src/content/config.ts` (if exists)
- Check that markdown frontmatter matches CMS config.yml

## Useful Commands

```bash
# Create new page
touch src/pages/new-page.astro

# Test page locally
npm run dev
# → http://localhost:4321/new-page

# Build to check for errors
npm run build
```
