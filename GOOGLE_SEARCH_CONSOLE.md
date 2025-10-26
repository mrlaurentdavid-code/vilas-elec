# 🔍 Guide Google Search Console - VILAS ELEC

## Pourquoi utiliser Google Search Console ?

Google Search Console (GSC) vous permet de :
- ✅ Soumettre votre sitemap à Google
- ✅ Vérifier l'indexation de vos pages
- ✅ Voir les performances SEO (clics, impressions, position)
- ✅ Détecter les erreurs d'exploration
- ✅ Surveiller les rich snippets (Schema.org)

**Gratuit et essentiel pour être visible sur Google !**

---

## 📝 Étape 1 : Créer un compte Google Search Console

1. **Allez sur Google Search Console**
   - URL : https://search.google.com/search-console

2. **Connectez-vous avec un compte Google**
   - Utilisez le compte Gmail de VILAS ELEC (ou créez-en un)

3. **Cliquez sur "Ajouter une propriété"**
   - Choisissez **"Préfixe d'URL"**
   - Entrez : `https://vilas-elec.fr`
   - Cliquez sur **"Continuer"**

---

## 🔐 Étape 2 : Vérifier la propriété du site

Google propose plusieurs méthodes. Voici **la plus simple pour Netlify** :

### **Méthode 1 : Fichier HTML (Recommandée)**

1. **Google vous donne un fichier HTML**
   - Exemple : `googleXXXXXXXXXXXXXXXX.html`

2. **Uploadez ce fichier dans `/public/` du projet**
   ```bash
   # Téléchargez le fichier depuis Google Search Console
   # Placez-le dans /Users/laurentdavid/vilas-elec/public/
   ```

3. **Commitez et pushez**
   ```bash
   git add public/googleXXXXXXXXXXXXXXXX.html
   git commit -m "Add Google Search Console verification file"
   git push
   ```

4. **Attendez 2-3 minutes** que Netlify déploie

5. **Retournez sur Google Search Console** et cliquez sur **"Vérifier"**

---

### **Méthode 2 : Balise meta HTML (Alternative)**

1. **Google vous donne une balise meta**
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXX" />
   ```

2. **Ajoutez-la dans `/src/layouts/Layout.astro`** (dans le `<head>`)

3. **Commitez, pushez, attendez le déploiement**

4. **Retournez sur Google Search Console** et cliquez sur **"Vérifier"**

---

## 📊 Étape 3 : Soumettre le sitemap

Une fois la propriété vérifiée :

1. **Allez dans "Sitemaps"** (menu de gauche)

2. **Entrez l'URL de votre sitemap**
   ```
   https://vilas-elec.fr/sitemap-index.xml
   ```

3. **Cliquez sur "Envoyer"**

4. **Attendez 1-2 jours**
   - Google va explorer votre site
   - Les pages seront progressivement indexées

---

## 📈 Étape 4 : Suivre l'indexation

### **Vérifier l'indexation**

Dans Google Search Console :
1. Allez dans **"Pages"** (menu de gauche)
2. Vous verrez :
   - **Pages indexées** (nombre de pages dans Google)
   - **Pages non indexées** (et pourquoi)

**Note :** L'indexation prend **3-7 jours** en moyenne.

---

### **Forcer l'indexation d'une page (optionnel)**

1. Allez dans **"Inspection d'URL"** (menu du haut)
2. Entrez l'URL : `https://vilas-elec.fr`
3. Cliquez sur **"Demander l'indexation"**
4. Répétez pour les pages importantes (Contact, Services, Blog)

---

## 🎯 Étape 5 : Créer Google My Business (GMB)

**Pourquoi GMB ?**
- Apparaître sur Google Maps
- Afficher horaires, adresse, téléphone dans Google
- Recevoir des avis clients

### **Créer la fiche**

1. **Allez sur Google My Business**
   - URL : https://business.google.com

2. **Créez votre profil d'entreprise**
   - Nom : **VILAS ELEC**
   - Catégorie : **Électricien**
   - Adresse : **6 Rue des Joncs, 25410 Saint-Vit**
   - Téléphone : **06 64 82 55 52**
   - Site web : **https://vilas-elec.fr**

3. **Vérifiez votre entreprise**
   - Google envoie un **code postal** à l'adresse
   - Délai : 5-14 jours

4. **Complétez votre profil**
   - Ajoutez des **photos** (chantiers, logo, équipe)
   - Ajoutez les **horaires** (Lun-Ven 8h-18h)
   - Ajoutez une **description** (copier celle du site)
   - Ajoutez les **services** (domotique, rénovation, etc.)

---

## ✅ Checklist Complète SEO

| Étape | État | Description |
|-------|------|-------------|
| ✅ robots.txt | Fait | Créé et déployé |
| ✅ Sitemap XML | Fait | Généré automatiquement |
| ✅ Schema.org | Fait | LocalBusiness en place |
| ✅ URL canoniques | Fait | Évite le contenu dupliqué |
| ⏳ Google Search Console | À faire | Soumettre le sitemap |
| ⏳ Google My Business | À faire | Créer la fiche GMB |
| ⏳ Vérification indexation | À faire | Attendre 3-7 jours |

---

## 📊 Suivi des Performances

### **Dans Google Search Console, surveillez :**

1. **Performances** (menu de gauche)
   - Clics, impressions, CTR, position moyenne
   - Requêtes : quels mots-clés génèrent du trafic

2. **Couverture** (Pages)
   - Nombre de pages indexées
   - Erreurs d'exploration

3. **Améliorations**
   - Ergonomie mobile
   - Données structurées (Schema.org)
   - Core Web Vitals (performance)

---

## 🎯 Requêtes Cibles à Surveiller

Voici les mots-clés que vous devriez voir apparaître dans **1-2 mois** :

| Mot-clé | Volume | Difficulté | Priorité |
|---------|--------|-----------|----------|
| électricien saint-vit | Moyen | Faible | ⭐⭐⭐⭐⭐ |
| électricien besançon | Élevé | Moyenne | ⭐⭐⭐⭐ |
| électricien doubs | Moyen | Faible | ⭐⭐⭐⭐ |
| domotique besançon | Faible | Très faible | ⭐⭐⭐ |
| borne recharge saint-vit | Très faible | Très faible | ⭐⭐⭐ |
| tableau électrique besançon | Faible | Faible | ⭐⭐⭐ |

---

## ⏱️ Timeline Réaliste

| Délai | Étape |
|-------|-------|
| **Jour 1-3** | Soumission sitemap Google Search Console |
| **Jour 3-7** | Premières pages indexées |
| **Semaine 2-4** | Site complet indexé |
| **Mois 1-2** | Premières positions dans Google |
| **Mois 2-6** | Amélioration progressive du ranking |

---

## 🚨 Erreurs Courantes à Éviter

1. ❌ **Ne pas vérifier la propriété Google Search Console**
   - Sans vérification, Google n'indexera pas votre sitemap

2. ❌ **Ne pas créer Google My Business**
   - Vous passez à côté de 40% du trafic local

3. ❌ **Ne pas suivre les performances**
   - Consultez GSC au moins 1x/mois

4. ❌ **Ne pas demander d'avis Google**
   - Les avis améliorent le SEO local

---

## 📞 Besoin d'Aide ?

Si vous avez des questions ou besoin d'aide pour :
- Vérifier la propriété Google Search Console
- Soumettre le sitemap
- Créer Google My Business

Demandez à Claude ! 🤖

---

**🎉 Votre site est maintenant SEO-ready !**

Une fois Google Search Console configuré et le sitemap soumis, votre site sera visible dans Google dans 1-2 semaines.
