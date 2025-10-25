# 🎛️ Guide Decap CMS - Vilas Elec

## 📖 Table des matières

1. [Qu'est-ce que Decap CMS ?](#quest-ce-que-decap-cms-)
2. [Comment accéder à l'interface d'administration ?](#comment-accéder-à-linterface-dadministration-)
3. [Configuration après déploiement sur Netlify](#configuration-après-déploiement-sur-netlify)
4. [Gestion du contenu](#gestion-du-contenu)
5. [Résolution de problèmes](#résolution-de-problèmes)

---

## Qu'est-ce que Decap CMS ?

**Decap CMS** (anciennement Netlify CMS) est un **système de gestion de contenu** (CMS) basé sur Git qui vous permet de gérer facilement le contenu de votre site web via une **interface visuelle** sans avoir à toucher au code.

### ✅ Avantages

- ✏️ **Interface intuitive** : modifiez vos articles, réalisations, témoignages via une interface simple
- 📁 **Basé sur Git** : tout le contenu est versionné et sauvegardé sur GitHub
- 🔒 **Sécurisé** : authentification via Netlify Identity
- 📝 **Workflow éditorial** : brouillon → révision → publication
- 🖼️ **Gestion d'images** : uploadez et gérez vos photos facilement

---

## Comment accéder à l'interface d'administration ?

### 🌐 En production (après déploiement)

Une fois votre site déployé sur Netlify, vous pourrez accéder à votre interface d'administration à l'adresse :

```
https://votre-site.netlify.app/admin/
```

**Exemple :** Si votre site est `vilas-elec.netlify.app`, allez sur :
```
https://vilas-elec.netlify.app/admin/
```

### 🔐 Connexion

1. Rendez-vous sur `/admin/`
2. Cliquez sur **"Login with Netlify Identity"**
3. Entrez votre email (celui que vous avez configuré dans Netlify Identity)
4. Vérifiez votre boîte mail et cliquez sur le lien de confirmation
5. Définissez votre mot de passe
6. Vous êtes connecté ! 🎉

---

## Configuration après déploiement sur Netlify

### Étape 1 : Activer Netlify Identity

1. Connectez-vous à votre dashboard Netlify
2. Sélectionnez votre site (vilas-elec)
3. Allez dans **Site configuration** > **Identity**
4. Cliquez sur **"Enable Identity"**

### Étape 2 : Configurer Git Gateway

1. Dans **Identity**, allez dans **Services** > **Git Gateway**
2. Cliquez sur **"Enable Git Gateway"**
3. Cela permettra à Decap CMS de gérer vos fichiers via GitHub

### Étape 3 : Inviter des utilisateurs

1. Dans **Identity**, cliquez sur **"Invite users"**
2. Entrez votre adresse email (ou celle de votre équipe)
3. Vous recevrez un email d'invitation
4. Cliquez sur le lien, définissez votre mot de passe
5. Vous pouvez maintenant vous connecter à `/admin/`

### Étape 4 : Paramètres d'inscription (optionnel)

Par défaut, seules les personnes invitées peuvent créer un compte. Pour modifier cela :

1. **Identity** > **Settings** > **Registration**
2. Choisissez :
   - **Invite only** (recommandé) : seulement les invités peuvent s'inscrire
   - **Open** : n'importe qui peut s'inscrire (⚠️ non recommandé)

---

## Gestion du contenu

### 📝 Articles de Blog

**Chemin dans le CMS :** `📝 Articles de Blog`

1. Cliquez sur **"New Blog Post"**
2. Remplissez les champs :
   - **Titre** : titre de l'article (60-70 caractères max pour SEO)
   - **Description courte** : résumé (150-160 caractères)
   - **Image de couverture** : uploadez une photo (1200x630px recommandé)
   - **Catégorie** : Conseils, Domotique, Rénovation, etc.
   - **Date de publication**
   - **Contenu** : rédigez votre article en Markdown (ou utilisez l'éditeur visuel)
3. **Enregistrer en brouillon** ou **Publier** directement

**Workflow :**
- **Brouillon** : pas encore publié
- **En révision** : en attente de validation
- **Prêt** : publié sur le site

### 🏗️ Réalisations

**Chemin dans le CMS :** `🏗️ Réalisations`

1. Cliquez sur **"New Réalisation"**
2. Remplissez :
   - **Titre du projet**
   - **Description courte**
   - **Image principale** (800x800px recommandé)
   - **Images supplémentaires** (galerie)
   - **Catégorie** : professionnel, renovation, domotique, tableau, greenup
   - **Lieu** : Besançon, Saint-Vit, etc.
   - **Description détaillée** : décrivez le projet en détail
3. **Publier**

### 💬 Témoignages

**Chemin dans le CMS :** `💬 Témoignages`

1. Cliquez sur **"New Témoignage"**
2. Remplissez :
   - **Nom du client** (ex: M. Dupont)
   - **Ville**
   - **Note (sur 5)**
   - **Témoignage** (texte)
   - **Date**
3. **Publier**

### 📄 Pages

Vous pouvez modifier les pages fixes du site :
- **🏠 Accueil** : modifier le titre hero, sous-titre, image, texte de présentation
- **👤 À propos** : modifier le contenu de la page À propos

### ⚙️ Paramètres du site

**Informations générales :**
- Nom de l'entreprise
- Adresse, téléphone, email
- Horaires d'ouverture
- Liens réseaux sociaux

**SEO :**
- Meta description par défaut
- Mots-clés principaux
- Image de partage (Open Graph)

---

## Résolution de problèmes

### ❌ Je ne peux pas me connecter à `/admin/`

**Solutions :**
1. Vérifiez que vous avez activé **Netlify Identity** dans votre dashboard
2. Vérifiez que **Git Gateway** est activé
3. Assurez-vous d'avoir reçu l'email d'invitation et d'avoir défini votre mot de passe
4. Essayez de vider le cache de votre navigateur (Ctrl+Shift+R)

### ❌ Erreur "Unable to access config.yml"

**Solutions :**
1. Vérifiez que le fichier `public/admin/config.yml` existe
2. Vérifiez que votre branche Git est bien `main` (et non `master`) dans `config.yml`
3. Redéployez votre site sur Netlify

### ❌ Les images ne s'uploadent pas

**Solutions :**
1. Vérifiez que le dossier `public/images/uploads` existe
2. Vérifiez les permissions de Git Gateway
3. Essayez avec une image plus petite (< 2 Mo recommandé)

### ❌ Mes modifications ne s'affichent pas sur le site

**Solutions :**
1. Attendez 2-3 minutes après publication (temps de build Netlify)
2. Vérifiez le statut du déploiement dans Netlify Dashboard > **Deploys**
3. Videz le cache de votre navigateur
4. Vérifiez que l'article n'est pas en brouillon (`draft: false`)

---

## 📚 Ressources utiles

- [Documentation Decap CMS](https://decapcms.org/docs/)
- [Guide Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

---

## 💡 Conseils

### Pour les articles de blog
- Utilisez des **titres accrocheurs** (60-70 caractères)
- Ajoutez des **images de qualité** (1200x630px pour le partage social)
- Rédigez des **descriptions courtes** engageantes (150-160 caractères)
- Utilisez des **catégories cohérentes**
- Ajoutez des **mots-clés SEO** pertinents

### Pour les réalisations
- **Photos avant/après** si possible
- **Description détaillée** du projet
- Mentionnez les **produits/services** utilisés (Céliane, Drivia, etc.)
- Précisez le **lieu** et la **date**

### Pour les témoignages
- Demandez l'**autorisation** au client avant publication
- Utilisez des **initiales** si le client préfère rester anonyme
- Ajoutez la **ville** pour la crédibilité locale

---

## 🆘 Besoin d'aide ?

Si vous rencontrez des problèmes avec Decap CMS, vous pouvez :
1. Consulter la [documentation officielle](https://decapcms.org/docs/)
2. Vérifier les logs de déploiement dans Netlify
3. Contacter votre développeur web

**Bon usage de Decap CMS ! 🚀**
