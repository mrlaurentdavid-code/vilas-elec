// Configuration des collections de contenu pour Astro
// Documentation : https://docs.astro.build/en/guides/content-collections/

import { defineCollection, z } from 'astro:content';

// Collection Blog
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    category: z.enum(["Conseils", "Domotique", "Rénovation", "Sécurité", "Réglementation", "GREEN'UP"]),
    date: z.string().or(z.date()),
    author: z.string().default("VILAS ELEC"),
    readTime: z.string().default("5 min"),
    draft: z.boolean().default(false),
    keywords: z.array(z.string()).optional(),
  }),
});

// Collection Réalisations
const realisations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    gallery: z.array(z.object({ image: z.string() })).optional(),
    category: z.enum(["professionnel", "renovation", "domotique", "tableau", "greenup"]),
    location: z.string().default("Doubs (25)"),
    date: z.string().or(z.date()),
    services: z.array(z.string()).optional(),
  }),
});

// Collection Témoignages
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    location: z.string().default("Besançon"),
    rating: z.number().min(1).max(5).default(5),
    date: z.string().or(z.date()),
  }),
});

// Collection Pages
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    heroImage: z.string().optional(),
    ctaText: z.string().optional(),
  }),
});

// Collection Settings (JSON)
const settings = defineCollection({
  type: 'data',
  schema: z.object({
    siteName: z.string().optional(),
    tagline: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    hours: z.object({
      weekdays: z.string().optional(),
      saturday: z.string().optional(),
      sunday: z.string().optional(),
    }).optional(),
    social: z.object({
      facebook: z.string().optional(),
      linkedin: z.string().optional(),
      instagram: z.string().optional(),
    }).optional(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
  }),
});

// Export des collections
export const collections = {
  blog,
  realisations,
  testimonials,
  pages,
  settings,
};
