# /public/admin/ - Decap CMS Configuration

## Purpose

Configuration files for **Decap CMS** (formerly Netlify CMS).
The CMS allows non-technical users to edit website content via `/admin` interface.

## Structure

```
admin/
├── index.html    # CMS entry point
└── config.yml    # CMS configuration (collections, fields, validation)
```

## Key Files

### config.yml
- **Purpose:** Main CMS configuration
- **Defines:**
  - Backend (git-gateway with GitHub)
  - Collections (Blog, Services, Home, Settings, etc.)
  - Field validation rules
  - Media folder paths
  - Workflow settings

### index.html
- **Purpose:** Loads Decap CMS UI
- **Auto-generated:** Usually don't need to edit

## Current Collections

1. **📝 Articles de Blog** - Blog posts (9 articles)
2. **🔧 Services** - Services (6 services)
3. **🏗️ Réalisations** - Portfolio (empty)
4. **💬 Témoignages** - Testimonials (empty)
5. **🏠 Page d'Accueil** - Hero + Stats (JSON)
6. **⚙️ Paramètres** - General + SEO settings

## Recent Changes

- [2025-10-25 20:25] Added "Dépannage" category to blog
- [2025-10-25 20:25] Added validation (title 10-70 chars, excerpt 50-160 chars)
- [2025-10-25 20:25] Organized fields into groups (SEO, Visuel, Classification)
- [2025-10-25 20:25] Added "Page d'Accueil" collection (Hero + Stats)
- [2025-10-25 20:25] Added "Services" collection
- [2025-10-25 20:25] Limited keywords to max 7 per article

## Validation Rules

### Blog Articles
```yaml
- Title: 10-70 characters (SEO optimized)
- Excerpt: 50-160 characters (meta description)
- Keywords: Max 7
- Category: Must be one of: Conseils, Domotique, Rénovation, Sécurité, Réglementation, Dépannage, GREEN'UP
```

### Services
```yaml
- Title: Required
- Icon: Emoji (🔧, ⚡, 🏠, etc.)
- Excerpt: Required
- Order: Number (for sorting)
- Price: String (ex: "À partir de 150€")
```

## How CMS Works

1. User goes to `/admin`
2. Authenticates via Netlify Identity or GitHub
3. Selects a collection
4. Creates/edits content
5. Saves → Creates Git commit
6. Publishes → Pushes to GitHub
7. Netlify detects push → Rebuilds site
8. Changes live in 2-3 minutes

## Backend Configuration

```yaml
backend:
  name: git-gateway
  branch: main

publish_mode: editorial_workflow
```

- **git-gateway:** Netlify proxy to GitHub
- **editorial_workflow:** Draft → Review → Publish workflow

## Media Handling

```yaml
media_folder: "public/images/uploads"
public_folder: "/images/uploads"
```

- Uploaded images saved to `public/images/uploads/`
- Referenced in content as `/images/uploads/filename.jpg`

## Common Issues

### CMS Not Loading
- Check Netlify Identity is enabled
- Check Git Gateway is configured
- Clear browser cache

### Changes Not Saving
- Check user permissions
- Check GitHub authentication
- Look for validation errors

### Build Fails After CMS Edit
- Invalid category used
- Field validation not met
- Check Netlify build logs

## Testing CMS Locally

```bash
# Dev server
npm run dev

# Access CMS
# http://localhost:4321/admin

# Note: May need to proxy to production for authentication
```

## Notes

- Always test changes with `npm run build` before deploying
- CMS creates commits automatically - sync with `git pull` before local edits
- Validation rules prevent most errors
- Editorial workflow adds PR step (optional)
