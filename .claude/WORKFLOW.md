# Workflow de Continuité de Session - VILAS ELEC Website

## Commande "GIT AND CLAUDE"

Cette commande exécute un workflow complet pour maintenir la continuité entre les sessions Claude Code.

### Quand utiliser "GIT AND CLAUDE" ?

- ✅ Après avoir complété une fonctionnalité majeure
- ✅ Après avoir modifié 5+ fichiers
- ✅ Avant de passer à une nouvelle tâche
- ✅ À la fin de chaque session de travail
- ✅ Après chaque milestone important

### Workflow Complet

Lorsque l'utilisateur dit **"GIT AND CLAUDE"**, Claude exécute :

#### 1. Mise à jour des CLAUDE.md
- Parcourir tous les fichiers modifiés dans cette session
- Mettre à jour le CLAUDE.md correspondant de chaque dossier
- Ajouter une entrée "Recent Changes" avec timestamp
- Format : `- [YYYY-MM-DD HH:MM] Description du changement`

#### 2. Mise à jour SESSION_HISTORY.md
- Ajouter une nouvelle entrée avec :
  - Date et heure
  - Résumé des tâches accomplies
  - Fichiers créés/modifiés
  - Problèmes rencontrés et solutions
  - État actuel du projet
  - Prochaines étapes suggérées

#### 3. Mise à jour QUICK_START.md
- Mettre à jour la section "Current Status"
- Mettre à jour "Last Session Summary"
- Mettre à jour "Next Priorities"
- Indiquer les fichiers récemment modifiés importants

#### 4. Git Commit & Push
```bash
git add .claude/ CLAUDE.md */CLAUDE.md
git commit -m "📝 Session update: [résumé court]"
git push origin main
```

#### 5. Affichage du Résumé
Afficher à l'utilisateur :
- ✅ Fichiers mis à jour
- ✅ Commit créé
- ✅ Push effectué
- ✅ Résumé de la session
- ✅ Prochaines étapes recommandées

---

## Protocole de Démarrage de Session

À chaque nouvelle session, Claude doit :

1. **Lire `.claude/QUICK_START.md` en PREMIER**
   - Comprendre l'état actuel du projet
   - Identifier la dernière tâche en cours
   - Voir les priorités

2. **Lire `.claude/SESSION_HISTORY.md`**
   - Consulter les 2-3 dernières sessions
   - Comprendre le contexte récent
   - Identifier les patterns et décisions prises

3. **Lire le CLAUDE.md du dossier de travail**
   - Si travail sur `/src/pages/`, lire `/src/pages/CLAUDE.md`
   - Si travail sur `/src/content/`, lire `/src/content/CLAUDE.md`
   - etc.

4. **Confirmer avec l'utilisateur**
   - Résumer ce qui a été compris
   - Demander confirmation avant de continuer
   - Proposer les prochaines étapes

---

## Structure des Fichiers de Documentation

### `.claude/QUICK_START.md`
- Current Status (état actuel)
- Last Session Summary (résumé dernière session)
- Next Priorities (priorités)
- Important Files to Know (fichiers clés)

### `.claude/SESSION_HISTORY.md`
- Liste chronologique inversée (plus récent en premier)
- Chaque session avec :
  - Date/heure
  - Tâches accomplies
  - Fichiers modifiés
  - Problèmes et solutions
  - État du projet
  - Next steps

### `CLAUDE.md` (root et dans chaque dossier clé)
- Purpose (but du dossier/projet)
- Structure (organisation des fichiers)
- Key Files (fichiers importants)
- Recent Changes (changements récents, newest first)
- Notes (notes importantes)

---

## Suggestions Proactives

Claude doit suggérer "GIT AND CLAUDE" automatiquement :

- ✅ Après avoir créé/modifié 5+ fichiers
- ✅ Après avoir complété une feature
- ✅ Après avoir résolu un problème complexe
- ✅ Avant de changer de contexte (ex: passer de frontend à CMS)
- ✅ Quand l'utilisateur dit "fini", "terminé", "c'est bon"

**Exemple de suggestion :**
```
🎯 Milestone atteint ! Voulez-vous exécuter "GIT AND CLAUDE" pour sauvegarder le contexte de cette session ?
```

---

## Exemple de Session Complète

### Début de session
```
Claude : *Lit .claude/QUICK_START.md automatiquement*

Bonjour ! D'après QUICK_START.md, la dernière session travaillait sur l'intégration CMS.
L'état actuel est : Hero et Stats éditables, 6 services créés.

Prochaine priorité suggérée : Connecter services.astro aux fichiers markdown.

Confirmez-vous que c'est la tâche à continuer ? Ou souhaitez-vous travailler sur autre chose ?
```

### Pendant la session
```
User : [fait des modifications...]
Claude : [après 5 fichiers modifiés]
🎯 Vous avez modifié plusieurs fichiers. Souhaitez-vous exécuter "GIT AND CLAUDE" pour sauvegarder ?
```

### Fin de session
```
User : "GIT AND CLAUDE"
Claude :
✅ Mise à jour de 3 CLAUDE.md avec les changements récents
✅ Ajout d'une entrée dans SESSION_HISTORY.md
✅ Mise à jour de QUICK_START.md avec l'état actuel
✅ Commit créé : "📝 Session update: Intégration services dynamiques"
✅ Push vers GitHub réussi

📊 Résumé de cette session :
- Fichiers modifiés : src/pages/services.astro, src/content/services/*.md
- Tâche accomplie : Services maintenant éditables via CMS
- État actuel : 80% du CMS fonctionnel
- Prochaine étape suggérée : Créer collection Témoignages et Réalisations

La session est sauvegardée ! À la prochaine fois, je reprendrai exactement où nous nous sommes arrêtés. 🚀
```

---

## Notes Importantes

- **Toujours** lire QUICK_START.md au début d'une session
- **Ne jamais** commencer une tâche sans avoir confirmé avec l'utilisateur
- **Suggérer** proactivement "GIT AND CLAUDE" aux moments opportuns
- **Maintenir** tous les CLAUDE.md à jour avec Recent Changes
- **Garder** SESSION_HISTORY.md chronologique (newest first)
