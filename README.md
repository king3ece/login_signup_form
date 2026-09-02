# 🔐 LoginSignupForm

Une application web moderne développée avec **Angular** permettant de gérer une interface complète de connexion (`Login`) et d'inscription (`Signup`) des utilisateurs.

---

## 📌 Description

**LoginSignupForm** est un projet conçu pour fournir une interface simple, moderne et fluide (responsive) permettant de :
- 🔑 **Se connecter** en toute sécurité à un compte existant.
- 📝 **Créer un nouveau compte** utilisateur.
- 🔒 **Saisir et confirmer** un mot de passe avec masquage/affichage dynamique.
- ✅ Bénéficier d'une **validation des champs** en temps réel.
- 📱 Utiliser l'application confortablement sur ordinateur, tablette et mobile.

---

## 🛠️ Technologies Utilisées

L'application s'appuie sur un écosystème moderne et performant :
* **Framework :** Angular v22.1.6
* **Langages :** TypeScript, HTML5, CSS3
* **Outil de Build & CLI :** Angular CLI
* **Tests :** Vitest (pour les tests unitaires)

---

## 📂 Structure du Projet

Voici un aperçu de l'organisation des principaux fichiers et dossiers de l'application :

```text
LoginSignupForm/
├── src/
│   ├── app/
│   │   ├── components/       # Composants de l'interface (Login, Signup, etc.)
│   │   ├── services/         # Logique métier et gestion des données
│   │   ├── app.component.ts  # Composant principal (Logique)
│   │   ├── app.component.html# Gabarit principal (Vue)
│   │   └── app.component.css # Styles principaux (Design)
│   │
│   ├── assets/               # Images et ressources statiques
│   ├── index.html            # Point d'entrée HTML
│   └── styles.css            # Styles globaux de l'application
│
├── public/                   # Fichiers publics statiques
├── angular.json              # Configuration d'Angular CLI
├── package.json              # Dépendances et scripts du projet
├── tsconfig.json             # Configuration TypeScript
└── README.md                 # Documentation du projet
```

---

## 🚀 Installation & Configuration

Suis ces étapes pour installer et lancer le projet sur ta machine locale :

### 1. Cloner le projet
```bash
git clone <URL_DU_REPOSITORY>
```

### 2. Accéder au dossier du projet
```bash
cd LoginSignupForm
```

### 3. Installer les dépendances npm
```bash
npm install
```

---

## ▶️ Lancer l'Application

Démarre le serveur de développement local à l'aide d'Angular CLI :

```bash
ng serve
```

Une fois le serveur actif, ouvre ton navigateur et accède à l'adresse suivante :
👉 **[http://localhost:4200/](http://localhost:4200/)**

> 💡 **Astuce :** L'application intègre le *Hot Module Replacement (HMR)*. Elle se recharge automatiquement à chaque modification de fichier.

---

## 🧩 Commandes Utiles (Angular CLI)

### Générer un nouveau composant
```bash
ng generate component nom-du-composant
# Ou la version courte :
ng g c nom-du-composant
```

### Afficher l'aide des commandes de génération
```bash
ng generate --help
```

---

## 📦 Production & Build

Pour compiler et optimiser le projet en vue d'un déploiement de production :

```bash
ng build
```

Les fichiers finaux, minifiés et optimisés pour de meilleures performances, seront générés directement dans le dossier :
📁 **`dist/`**

---

## 🧪 Exécution des Tests

### Tests Unitaires
Le projet utilise **Vitest** pour valider le bon fonctionnement de ses composants et services.

* **Lancer les tests en mode interactif (Watch) :**
  ```bash
  ng test
  ```
* **Exécuter les tests une seule fois (CI/Pipeline) :**
  ```bash
  ng test --watch=false
  ```

### Tests End-to-End (E2E)
Pour exécuter la suite de tests de bout en bout :
```bash
ng e2e
```
*Note : Angular CLI ne fournit pas de framework E2E par défaut. Tu peux ajouter et configurer la solution de ton choix (comme Playwright ou Cypress) selon tes besoins.*

---

## ✨ Fonctionnalités Détaillées

### 🔑 Interface de Connexion (Login)
- Champ de saisie pour l'adresse **email**.
- Champ de saisie pour le **mot de passe** avec option pour afficher/masquer les caractères.
- Système complet de **validation des données** saisies.
- Messages d'erreur explicites en cas de format incorrect.

### 📝 Interface d'Inscription (Signup)
- Formulaire complet : **Nom d'utilisateur**, **Adresse email**, **Mot de passe** et **Confirmation**.
- **Contrôle de sécurité :** Validation automatique de la correspondance parfaite entre le mot de passe et sa confirmation.

### 🔒 Validation stricte des Formulaires
- **Champs obligatoires** signalés visuellement.
- Vérification du format strict des adresses email.
- Analyse de la **complexité du mot de passe** (sécurisé).

### 📱 Design Réactif (Responsive Design)
L'intégralité de l'interface utilisateur s'adapte automatiquement à toutes les tailles de dalles :
- 💻 **Desktop** (Ordinateurs de bureau)
- 📟 **Tablette**
- 📱 **Mobile**

---

## 📸 Aperçu de l'Application

Visualise l'interface utilisateur en ajoutant des captures d'écran dans un dossier local (ex: `screenshots/`) :

```text
screenshots/
├── login.png
├── signup.png
└── responsive.png
```

![Login Interface](./screenshots/login.png)

---

## 🌱 Améliorations Futures

Voici une liste des fonctionnalités prévues pour les prochaines versions du projet :
- 🔌 Connexion et communication avec une **API backend**.
- 🛠️ Gestion de l'authentification sécurisée avec **JWT (JSON Web Tokens)**.
- 🚪 Bouton de déconnexion de la session utilisateur.
- 🔑 Module de récupération de **mot de passe oublié**.
- 📧 Envoi d'un email de confirmation d'adresse à l'inscription.
- 🌐 Authentification tierce (ex: **Connexion avec Google**).
- 🧑‍💻 Page dédiée à la gestion du profil utilisateur.
- 🛡️ Protection et restriction d'accès aux vues via les **Guards Angular**.
- 👥 Gestion fine des rôles et des autorisations d'accès.
- 🔔 Système de notifications toast après chaque connexion/inscription réussie.

---

## 📚 Documentation Complémentaire

Pour approfondir tes connaissances sur l'utilisation et la configuration d'**Angular CLI**, tu peux consulter la [Documentation Officielle d'Angular CLI](https://angular.dev/tools/cli).

---

## 👨‍💻 Auteur

**Ton Nom** – *Développeur Principal*

Projet réalisé avec ❤️ et propulsé par la puissance d'**Angular**.

---

## 📄 Licence

Ce projet est distribué sous licence libre et reste destiné à des fins d'apprentissage, d'expérimentation et de développement personnel.
