# 🛡️ Guide d'installation reCAPTCHA v3

## Pourquoi reCAPTCHA v3 ?

Le formulaire de contact dispose déjà d'un **honeypot** (champ caché anti-spam), mais reCAPTCHA v3 ajoute une couche de protection supplémentaire :
- ✅ Invisible pour les utilisateurs
- ✅ Analyse comportementale automatique
- ✅ Bloque 99% des robots
- ✅ Gratuit jusqu'à 1 million de requêtes/mois

---

## 📝 Étape 1 : Obtenir les clés reCAPTCHA

1. **Allez sur Google reCAPTCHA**
   - URL : https://www.google.com/recaptcha/admin/create

2. **Connectez-vous avec un compte Google**
   - Utilisez le compte Google de VILAS ELEC

3. **Créez un nouveau site reCAPTCHA v3**
   - **Label :** VILAS ELEC - Formulaire Contact
   - **Type de reCAPTCHA :** ✅ reCAPTCHA v3
   - **Domaines :**
     ```
     vilas-elec.fr
     www.vilas-elec.fr
     localhost (pour les tests)
     ```
   - Acceptez les conditions

4. **Copiez vos clés**
   Vous recevrez 2 clés :
   - **Site Key (clé publique)** : `6Lc...` (à mettre dans le HTML)
   - **Secret Key (clé secrète)** : `6Lc...` (à NE PAS partager, pour le backend)

---

## 🔧 Étape 2 : Intégrer reCAPTCHA dans le formulaire

### A. Ajouter le script reCAPTCHA dans `/src/pages/contact.astro`

**À la ligne 3** (dans le frontmatter), ajoutez :

```astro
---
// Page Contact - Vilas Elec
import Layout from '../layouts/Layout.astro';

// Configuration reCAPTCHA v3
const RECAPTCHA_SITE_KEY = "VOTRE_SITE_KEY_ICI"; // Remplacer par votre clé
---
```

### B. Modifier le Layout pour inclure le script reCAPTCHA

**Dans `/src/layouts/Layout.astro`**, ajoutez dans le `<head>` :

```html
<!-- Google reCAPTCHA v3 -->
<script src="https://www.google.com/recaptcha/api.js?render=VOTRE_SITE_KEY_ICI"></script>
```

### C. Modifier le formulaire pour générer un token

**Dans `/src/pages/contact.astro`**, remplacez le formulaire actuel (ligne 36) :

```html
<!-- Formulaire (compatible Netlify Forms + reCAPTCHA v3) -->
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="space-y-6" id="contact-form">
	<!-- Champ honeypot caché pour anti-spam -->
	<input type="hidden" name="form-name" value="contact" />
	<input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
	<p class="hidden">
		<label>
			Ne pas remplir : <input name="bot-field" />
		</label>
	</p>

	<!-- ... reste du formulaire ... -->
</form>
```

### D. Ajouter le script de génération du token

**À la fin de `/src/pages/contact.astro`** (après le script d'obfuscation), ajoutez :

```html
<!-- Script reCAPTCHA v3 pour générer le token -->
<script>
  const SITE_KEY = 'VOTRE_SITE_KEY_ICI'; // Remplacer

  document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    grecaptcha.ready(function() {
      grecaptcha.execute(SITE_KEY, {action: 'contact_form'}).then(function(token) {
        // Injecter le token dans le formulaire
        document.getElementById('g-recaptcha-response').value = token;

        // Soumettre le formulaire
        document.getElementById('contact-form').submit();
      });
    });
  });
</script>
```

---

## 🔐 Étape 3 : Vérifier le token côté serveur (Netlify)

Pour vérifier le token reCAPTCHA avec Netlify Forms, il faut utiliser **Netlify Functions**.

### Créer une fonction Netlify pour validation

**Créez `/netlify/functions/verify-recaptcha.js`** :

```javascript
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  const { token } = JSON.parse(event.body);

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: 'POST' }
  );

  const data = await response.json();

  if (data.success && data.score >= 0.5) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, score: data.score })
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'Failed reCAPTCHA verification' })
    };
  }
};
```

### Ajouter la clé secrète dans Netlify

1. Allez dans **Netlify Dashboard** → Site Settings → Environment Variables
2. Ajoutez une nouvelle variable :
   - **Key :** `RECAPTCHA_SECRET_KEY`
   - **Value :** `VOTRE_SECRET_KEY_ICI`

---

## ⚠️ Note Importante

**reCAPTCHA v3 nécessite HTTPS** (donc attendez que le certificat SSL soit activé avant de tester).

---

## ✅ Alternative simple : Garder uniquement le Honeypot

Pour l'instant, le formulaire dispose déjà :
- ✅ **Honeypot** Netlify (champ caché anti-spam)
- ✅ **Protection email/téléphone** par obfuscation Base64

**Ces protections sont déjà efficaces à 80-90%.** reCAPTCHA v3 n'est nécessaire que si vous recevez beaucoup de spam malgré le honeypot.

---

## 🧪 Test

Une fois reCAPTCHA configuré :

1. Ouvrez la console développeur (F12)
2. Allez sur la page Contact
3. Remplissez le formulaire
4. Soumettez
5. Vérifiez dans la console :
   - Le token reCAPTCHA doit être généré
   - Le formulaire doit être soumis
6. Dans Google reCAPTCHA Admin, vérifiez les statistiques

---

## 📚 Ressources

- **Documentation officielle :** https://developers.google.com/recaptcha/docs/v3
- **Dashboard reCAPTCHA :** https://www.google.com/recaptcha/admin
- **Netlify Forms + reCAPTCHA :** https://docs.netlify.com/forms/spam-filters/

---

**Besoin d'aide ?** Contactez Claude pour intégrer reCAPTCHA v3 ! 🚀
