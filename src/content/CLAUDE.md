# /src/content/ - CMS Managed Content

## Purpose

This folder contains all **content managed via Decap CMS**.
All files here can be edited through the `/admin` interface.

Content is organized in **collections** (folders) with markdown or JSON files.

## Structure

```
content/
├── blog/              # Blog articles (Markdown)
│   ├── 2025-01-borne-recharge-greenup-saint-vit-vehicule-electrique.md
│   ├── 2025-01-comment-choisir-electricien-saint-vit.md
│   ├── 2025-01-diagnostic-electrique-obligatoire-vente-immobiliere-doubs.md
│   ├── 2025-01-domotique-besancon-maison-connectee-netatmo.md
│   ├── 2025-01-electricien-saint-vit-installation-electrique.md
│   ├── 2025-01-panne-electrique-besancon-que-faire-urgence.md
│   ├── 2025-01-preparer-installation-electrique-hiver-franche-comte.md
│   ├── 2025-01-renovation-electrique-maison-ancienne-franche-comte.md
│   └── 2025-01-tableau-electrique-doubs-mise-aux-normes.md
├── services/          # Services (Markdown)
│   ├── bornes-recharge-greenup.md
│   ├── depannage-electricite.md
│   ├── domotique-maison-connectee.md
│   ├── mise-aux-normes.md
│   ├── renovation-electrique.md
│   └── tableaux-electriques.md
├── home/              # Homepage content (JSON)
│   ├── hero.json     # Hero section (title, subtitle, description, CTA)
│   └── stats.json    # Statistics (20+, 500+, 100%, 5+)
├── settings/          # Site settings (JSON)
│   ├── general.json  # Company info (name, phone, email, hours)
│   └── seo.json      # SEO defaults (meta, keywords, og:image)
├── realisations/      # Portfolio (Markdown) - EMPTY
└── testimonials/      # Testimonials (Markdown) - EMPTY
```

## Collections Status

### ✅ Blog (9 articles)
- **Format:** Markdown with YAML frontmatter
- **Editable via:** /admin → "📝 Articles de Blog"
- **Fields:**
  - title (string, 10-70 chars)
  - excerpt (text, 50-160 chars)
  - image (image)
  - category (select: Conseils, Domotique, Rénovation, Sécurité, Réglementation, Dépannage, GREEN'UP)
  - date (datetime)
  - author (string, default: "VILAS ELEC")
  - readTime (string, ex: "8 min")
  - draft (boolean)
  - keywords (list, max 7)
  - body (markdown)

### ✅ Services (6 services)
- **Format:** Markdown with YAML frontmatter
- **Editable via:** /admin → "🔧 Services"
- **Fields:**
  - title (string)
  - icon (string, emoji)
  - excerpt (text)
  - order (number, for sorting)
  - price (string, ex: "À partir de 150€")
  - body (markdown)
- **Status:** ⚠️ Files created but services.astro not reading them yet

### ✅ Home - Hero (hero.json)
- **Format:** JSON
- **Editable via:** /admin → "🏠 Page d'Accueil" → "Hero"
- **Fields:**
  - title (default: "⚡ Vilas Elec")
  - subtitle (default: "Électricien Professionnel à Besançon")
  - description (text)
  - ctaText (default: "Demander un devis gratuit")
  - ctaLink (default: "/contact")
- **Integration:** ✅ Connected to index.astro

### ✅ Home - Stats (stats.json)
- **Format:** JSON
- **Editable via:** /admin → "🏠 Page d'Accueil" → "Statistiques"
- **Fields:**
  - experience: { value: "20+", label: "Années d'expérience" }
  - projects: { value: "500+", label: "Chantiers réalisés" }
  - clients: { value: "100%", label: "Clients satisfaits" }
  - certifications: { value: "5+", label: "Certifications" }
- **Integration:** ✅ Connected to index.astro

### ✅ Settings - General (general.json)
- **Format:** JSON
- **Editable via:** /admin → "⚙️ Paramètres" → "Informations générales"
- **Fields:**
  - siteName (default: "VILAS ELEC")
  - tagline
  - address
  - phone (06 64 82 55 52)
  - email (vilas.elec@outlook.fr)
  - hours (weekdays, saturday, sunday)
  - social (facebook, linkedin, instagram)

### ✅ Settings - SEO (seo.json)
- **Format:** JSON
- **Editable via:** /admin → "⚙️ Paramètres" → "SEO par défaut"
- **Fields:**
  - metaDescription
  - keywords (list)
  - ogImage

### ⏳ Réalisations (Empty)
- **Format:** Markdown with YAML frontmatter
- **Editable via:** /admin → "🏗️ Réalisations"
- **Fields defined:**
  - title, excerpt, image, gallery, category, location, date, services, body
- **Status:** Collection configured but no content yet
- **TODO:** Create 2-3 example realisations

### ⏳ Testimonials (Empty)
- **Format:** Markdown with YAML frontmatter
- **Editable via:** /admin → "💬 Témoignages"
- **Fields defined:**
  - name, location, rating, body, date
- **Status:** Collection configured but no content yet
- **TODO:** Create 3-5 example testimonials

## Recent Changes

- [2025-10-25 20:55] Created 6 services markdown files
- [2025-10-25 20:30] Created hero.json and stats.json for homepage
- [2025-10-25 20:25] Updated CMS config with improved validation and groups
- [2025-10-25 20:15] Updated general.json (saturday hours: "Sur rendez-vous")
- [2025-10-25 20:10] Fixed blog article category "Dépannage" (was causing build errors)

## Content Patterns

### Blog Article Example
```markdown
---
title: "Article Title (10-70 chars)"
excerpt: "Short description (50-160 chars)"
image: "https://images.unsplash.com/photo-xxx or /images/uploads/photo.jpg"
category: "Conseils"
date: "2025-01-24"
author: "VILAS ELEC"
readTime: "8 min"
draft: false
keywords:
  - keyword1
  - keyword2
---

## Heading 1

Content in markdown...
```

### Service Example
```markdown
---
title: "Service Name"
icon: "🔧"
excerpt: "Short service description"
order: 1
price: "À partir de 150€"
---

## Service Details

Full markdown content...
```

## Accessing Content in Astro

### From JSON files
```astro
---
import heroData from '../content/home/hero.json';
---
<h1>{heroData.title}</h1>
```

### From Markdown collections
```astro
---
import { getCollection } from 'astro:content';
const services = await getCollection('services');
const sortedServices = services.sort((a, b) => a.data.order - b.data.order);
---

{sortedServices.map(service => (
  <div>
    <h2>{service.data.icon} {service.data.title}</h2>
    <p>{service.data.excerpt}</p>
    <p>{service.data.price}</p>
    <div set:html={service.compiled.html()} />
  </div>
))}
```

## CMS Workflow

1. Go to `/admin`
2. Login with Netlify Identity or GitHub
3. Select a collection (Blog, Services, etc.)
4. Click "New [Collection]" or edit existing
5. Fill in fields
6. **Save** (creates a draft commit)
7. **Publish** (commits to GitHub → triggers Netlify rebuild)

## Important Rules

### Blog Categories (Strictly Enforced)
```
Conseils | Domotique | Rénovation | Sécurité | Réglementation | Dépannage | GREEN'UP
```
**Using any other category will cause build failures!**

### Field Validation
- **Blog title:** 10-70 characters
- **Blog excerpt:** 50-160 characters
- **Blog keywords:** Maximum 7
- All fields marked "required" must be filled

### Image Paths
- **CMS uploads:** `/images/uploads/filename.jpg`
- **Static images:** `/images/folder/filename.jpg`
- **External:** `https://images.unsplash.com/...`

## Common Issues

### Build Fails After CMS Edit
**Cause:** Invalid category or field validation failure
**Fix:** Check the commit from CMS, find the invalid field, fix it

### CMS Changes Not Visible
**Cause:** Netlify hasn't rebuilt yet or browser cache
**Fix:** Wait 2-3 minutes, clear browser cache (Cmd+Shift+R)

### Collection Not Showing in CMS
**Cause:** Collection folder empty or misconfigured
**Fix:** Check `/public/admin/config.yml` for that collection

## Next Steps

1. **High Priority:** Connect services.astro to read from services/*.md
2. **Medium Priority:** Create 2-3 realisations examples
3. **Medium Priority:** Create 3-5 testimonials examples
4. **Low Priority:** Add more blog articles (10 more planned)

## Notes

- CMS creates commits automatically (via GitHub integration)
- Always `git pull` before local edits to avoid conflicts
- Markdown supports full HTML if needed
- Images uploaded via CMS go to `/public/images/uploads/`
