# VILAS ELEC Website - Project Overview

## Purpose

Site vitrine professionnel pour **VILAS ELEC**, électricien certifié Legrand basé à Saint-Vit (25410), Doubs.

Le site présente :
- Services d'électricité (domotique, tableaux, rénovation, bornes recharge)
- Blog SEO pour référencement local
- Système de gestion de contenu (CMS) pour édition autonome
- Zone d'intervention : Saint-Vit, Besançon, Doubs, Franche-Comté

## Tech Stack

- **Framework:** Astro 4.x (Static Site Generator)
- **Styling:** Tailwind CSS
- **CMS:** Decap CMS (Netlify CMS fork)
- **Animations:** AOS (Animate On Scroll)
- **Hosting:** Netlify (auto-deploy from GitHub)
- **Content:** Markdown + JSON

## Project Structure

```
vilas-elec/
├── .claude/               # Session continuity files
│   ├── WORKFLOW.md       # "GIT AND CLAUDE" command documentation
│   ├── QUICK_START.md    # Read this first each session!
│   └── SESSION_HISTORY.md # All sessions log
├── public/
│   ├── admin/            # CMS configuration
│   │   ├── config.yml    # Decap CMS config
│   │   └── index.html    # CMS entry point
│   └── images/           # Static images
│       ├── hero/         # Hero images (parallaxe.jpg)
│       └── uploads/      # CMS uploaded images
├── src/
│   ├── content/          # CMS managed content
│   │   ├── blog/        # Blog articles (9 articles)
│   │   ├── services/    # Services (6 services)
│   │   ├── home/        # Homepage content (hero.json, stats.json)
│   │   ├── settings/    # Site settings (general.json, seo.json)
│   │   ├── realisations/ # Portfolio (empty)
│   │   └── testimonials/ # Client testimonials (empty)
│   ├── layouts/
│   │   └── Layout.astro # Main layout
│   └── pages/           # Routes
│       ├── index.astro  # Homepage (✅ CMS integrated)
│       ├── services.astro # Services page (❌ Not CMS integrated)
│       ├── blog.astro   # Blog list
│       ├── about.astro  # About page
│       └── contact.astro # Contact form
└── package.json
```

## Key Features

### ✅ Implemented
- Responsive design (mobile-first)
- Parallax hero section (custom JavaScript)
- CMS integration (Hero, Stats, Services, Blog, Settings)
- SEO optimized blog (9 articles)
- Contact form
- Automatic sitemap generation
- AOS animations

### ⏳ In Progress
- Services page not reading from markdown files (still hardcoded)

### 🎯 Planned
- Réalisations/Portfolio examples
- Témoignages/Testimonials examples
- robots.txt
- Advanced SEO (Open Graph, Twitter Cards)

## Important Files

### Configuration
- `/astro.config.mjs` - Astro configuration
- `/tailwind.config.cjs` - Tailwind configuration
- `/public/admin/config.yml` - CMS configuration
- `/tsconfig.json` - TypeScript configuration

### Content (CMS Editable)
- `/src/content/home/hero.json` - Homepage hero content
- `/src/content/home/stats.json` - Homepage statistics (20+, 500+, etc.)
- `/src/content/services/*.md` - 6 services
- `/src/content/blog/*.md` - 9 blog articles
- `/src/content/settings/general.json` - Company info
- `/src/content/settings/seo.json` - SEO settings

### Pages
- `/src/pages/index.astro` - Homepage (integrated with CMS)
- `/src/pages/services.astro` - Services (NOT integrated yet)
- `/src/pages/blog.astro` - Blog list
- `/src/pages/blog/[...slug].astro` - Blog article template
- `/src/pages/contact.astro` - Contact form
- `/src/pages/about.astro` - About page

## Recent Changes

- [2025-10-25 21:00] Created session continuity system (.claude/ folder)
- [2025-10-25 20:55] Created 6 services as markdown files (editable via CMS)
- [2025-10-25 20:35] Integrated hero.json and stats.json into index.astro
- [2025-10-25 20:30] Created hero.json and stats.json for CMS editing
- [2025-10-25 20:25] Improved CMS config (validation, groups, new sections)
- [2025-10-25 20:10] Fixed all "15+ years" → "20+ years" mentions (4 locations)
- [2025-10-25 19:00] Fixed parallax effect (build errors, category issues)

## Development

### Start Dev Server
```bash
npm run dev
# → http://localhost:4321
```

### Build for Production
```bash
npm run build
# Output: dist/
```

### Preview Production Build
```bash
npm run preview
```

### Access CMS
```bash
# Dev: http://localhost:4321/admin
# Prod: https://celadon-valkyrie-2ac058.netlify.app/admin
```

## Deployment

- **Platform:** Netlify
- **Auto-deploy:** Yes (on push to `main` branch)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Site URL:** https://celadon-valkyrie-2ac058.netlify.app

## CMS Workflow

1. User goes to `/admin`
2. Logs in with Netlify Identity / GitHub
3. Edits content (Blog, Services, Hero, Stats, Settings)
4. Saves → Creates a commit
5. Publishes → Creates a pull request OR commits directly
6. Netlify auto-rebuilds the site

## Contact Info (Client)

- **Company:** VILAS ELEC
- **Owner:** Laurent David (via mrlaurentdavid-code)
- **Phone:** 06 64 82 55 52
- **Email:** vilas.elec@outlook.fr
- **Address:** 6 Rue des Joncs, 25410 Saint-Vit
- **Service Area:** Saint-Vit, Besançon, Doubs (25), Bourgogne-Franche-Comté

## Repository

- **GitHub:** https://github.com/mrlaurentdavid-code/vilas-elec
- **Branch:** main
- **Owner:** mrlaurentdavid-code

## Notes

### Blog Categories (Allowed)
```
Conseils, Domotique, Rénovation, Sécurité, Réglementation, Dépannage, GREEN'UP
```

### Color Scheme
- Primary: Blue (#1E40AF, #2563EB)
- Secondary: Yellow (#FBBF24, #FCD34D)
- Text: Gray (#1F2937, #4B5563, #6B7280)
- Background: White (#FFFFFF), Light Gray (#F9FAFB)

### Fonts
- Default system fonts (good for performance)

### Critical Paths
- Hero image: `/public/images/hero/parallaxe.jpg` (797KB, 5818x3273px)
- CMS uploads: `/public/images/uploads/`

### Known Issues
- Services page (`/src/pages/services.astro`) is hardcoded HTML, not reading from markdown files
- Réalisations and Testimonials collections are configured but empty
- No robots.txt yet (should be added for SEO)

### Session Continuity
**⚠️ IMPORTANT:** At the start of EVERY session, read `.claude/QUICK_START.md` first!
