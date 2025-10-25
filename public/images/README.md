# 📸 Guide de Gestion des Photos - Vilas Elec

## 📁 Structure des dossiers

```
public/images/
├── hero/           ← Photos pour la bannière principale (hero section)
├── services/       ← Photos illustrant les services
└── realisations/   ← Photos de vos chantiers terminés
```

---

## 🔄 Comment remplacer les photos Unsplash par vos vraies photos

### Étape 1 : Préparer vos photos

**IMPORTANT - Optimisation des photos :**

1. **Taille recommandée** :
   - Hero (bannière) : 1920x1080px (format paysage)
   - Cartes services : 800x600px
   - Galerie réalisations : 800x800px

2. **Format** :
   - JPG pour les photos (meilleure compression)
   - WebP pour encore plus de performance (optionnel)

3. **Poids maximum** :
   - Maximum 500 Ko par photo
   - Utilisez un outil comme **TinyPNG.com** pour compresser sans perte de qualité

### Étape 2 : Placer vos photos dans les dossiers

**Exemple :**
```
public/images/
├── hero/
│   └── hero-electricien.jpg          ← Photo principale
├── services/
│   ├── installation-pro.jpg          ← Service 1
│   ├── renovation-habitat.jpg        ← Service 2
│   └── depannage-rapide.jpg          ← Service 3
└── realisations/
    ├── tableau-electrique-1.jpg
    ├── renovation-maison-1.jpg
    ├── eclairage-led-bureau.jpg
    ├── domotique-maison.jpg
    ├── installation-industrielle.jpg
    └── borne-recharge.jpg
```

### Étape 3 : Modifier le code Astro

#### 🎯 Photo Hero (Bannière principale)

**Fichier :** `src/pages/index.astro` (ligne 23)

**Avant (Unsplash) :**
```html
style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop');"
```

**Après (votre photo) :**
```html
style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero/hero-electricien.jpg');"
```

---

#### 🏢 Photos des Services

**Fichier :** `src/pages/index.astro` (lignes 130, 160, 190)

**Carte 1 - Installations Pro :**
```html
<!-- Avant -->
<img src="https://images.unsplash.com/photo-1581092918056..." />

<!-- Après -->
<img src="/images/services/installation-pro.jpg" alt="Installations électriques professionnelles" />
```

**Carte 2 - Rénovation Habitat :**
```html
<img src="/images/services/renovation-habitat.jpg" alt="Rénovation électrique habitat" />
```

**Carte 3 - Dépannage :**
```html
<img src="/images/services/depannage-rapide.jpg" alt="Dépannage électrique rapide" />
```

---

#### 📷 Galerie de Réalisations

**Fichier :** `src/pages/index.astro` (lignes 251, 271, 290, 309, 328, 347)

**Photo 1 :**
```html
<img src="/images/realisations/tableau-electrique-1.jpg" alt="Installation tableau électrique professionnel" />
```

**Photo 2 :**
```html
<img src="/images/realisations/renovation-maison-1.jpg" alt="Rénovation électrique complète" />
```

**Photo 3 :**
```html
<img src="/images/realisations/eclairage-led-bureau.jpg" alt="Installation éclairage LED professionnel" />
```

**Photo 4 :**
```html
<img src="/images/realisations/domotique-maison.jpg" alt="Installation domotique maison connectée" />
```

**Photo 5 :**
```html
<img src="/images/realisations/installation-industrielle.jpg" alt="Installation électrique industrielle" />
```

**Photo 6 :**
```html
<img src="/images/realisations/borne-recharge.jpg" alt="Installation borne de recharge électrique" />
```

---

#### 🌄 Section Parallaxe (milieu de page)

**Fichier :** `src/pages/index.astro` (ligne 212)

**Avant :**
```html
style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1504328345606...');"
```

**Après :**
```html
style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero/parallaxe-section.jpg');"
```

---

## 🎨 Conseils pour vos photos

### ✅ Photos de BONNE qualité :
- **Bien éclairées** : Prenez vos photos en journée ou avec bon éclairage
- **Nettes** : Pas floues, pas pixelisées
- **Professionnelles** : Chantier propre, résultat fini (pas de travaux en cours)
- **Variées** : Différents types de chantiers (pro, particulier, neuf, réno)

### ❌ À éviter :
- Photos sombres ou mal cadrées
- Chantiers en désordre
- Photos avec informations personnelles visibles (numéros de téléphone clients, etc.)
- Selfies ou photos trop personnelles

---

## 🛠️ Outils gratuits recommandés

### Pour redimensionner/compresser :
- **TinyPNG.com** - Compression sans perte de qualité
- **Squoosh.app** - Compression et conversion d'images (Google)
- **Canva.com** - Redimensionner facilement

### Pour prendre des photos :
- **Smartphone** : Mode Photo avec HDR activé
- **Appareil photo** : Réglages automatiques OK pour débuter
- **Lumière naturelle** : Privilégiez la journée

---

## 📝 Checklist avant de publier

- [ ] Toutes les photos sont compressées (< 500 Ko)
- [ ] Les photos sont au bon format (JPG ou WebP)
- [ ] Les noms de fichiers sont descriptifs (ex: `tableau-electrique-commerce-besancon.jpg`)
- [ ] Pas de caractères spéciaux dans les noms (pas d'accents, espaces, etc.)
- [ ] Les photos sont dans les bons dossiers
- [ ] Le code a été mis à jour avec les nouveaux chemins
- [ ] Le site a été testé en local (vérifier que les images s'affichent)

---

## 🆘 Besoin d'aide ?

Si vous avez des difficultés pour remplacer les photos, contactez votre développeur ou consultez la documentation Astro : https://docs.astro.build/en/guides/images/
