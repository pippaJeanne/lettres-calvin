# Projet d'édition critique numérique de la correspondance française de Jean Calvin 

[Le projet est désormais en ligne.](https://lettres-calvin.netlify.app)

L'édition est encore en cours de développement. De nouveau contenu et des lettres seront ajoutées prochainement.

Le processus de traitement des lettres et d'autres informations et fichiers de la chaîne éditoriale pouvent être trouvés [ici](https://github.com/pippaJeanne/ProcessDocs).

----

## Documentation

- [Français](#français-fr) — Documentation en français
- [English](#english-en) — Documentation in English

----

## Français (FR)

### Fonctionnalités

- **Interface bilingue** : Navigation en français et en espagnol.
- **Vues multiples des lettres** : Sources manuscrites ou imprimées, version texte de l'édition de base (celle de l'historien Jules Bonnet parue en 1854) (transcription fidèle), version modernisée (français moderne), traduction espagnole.
- **Recherche avancée** : Recherche plein texte avec FlexSearch, par catégories, thématiques, dates, etc.
- **Navigation** : Par ordre chronologique (timeline), catégories, thématiques, index des noms, carte interactive.
- **Fac-similés de manuscrits** : Affichage avec OpenSeadragon pour zoom et rotation.
- **Transcriptions diplomatiques** : Pages dédiées aux transcriptions des feuillets manuscrits originaux autographes (écriture de Jean Calvin).
- **Génération de PDF** : Export personnalisable —par un filtrage transversal— avec Paged.js pour explorer des tendances ou des aspects spécifiques, pour impression ou archivage.
- **API** : *Endpoint* pour récupérer les données des lettres depuis les fichiers TEI XML.
- **Détection d’erreurs** : Signalement des incohérences d’encodage, des informations manquantes et de certains problèmes d’alignement FR-ES afin de faciliter la révision éditoriale.

## Technologies utilisées

- **Framework** : SvelteKit (avec adaptateur Netlify).
- **Langages** : JavaScript/TypeScript, HTML, CSS, Sass.
- **Transformations** : SaxonJS pour XSLT 3.0 côté client, traitement des fichiers TEI XML.
- **Recherche** : FlexSearch pour l'indexation et la recherche plein texte.
- **Fac-similés** : OpenSeadragon pour l'affichage d'images haute résolution.
- **PDF** : Paged.js pour la génération de PDF paginés.
- **Déploiement** : Netlify avec fonctions *serverless*.
- **Encodage** : TEI (*Text Encoding Initiative*) pour les lettres. Schéma [ODD](src/lib/odd/custom_schema.odd) adapté pour l'encodage des lettres en TEI XML. [Le schéma personnalisé](src/lib/odd/custom_schema.rng) comprend l'ajout des éléments `bibl` et `msDesc` pour les sources manuscrites et imprimées —y compris les liens ARK ou le protocole IIIF pour les fac-similés—, ainsi que l'encodage de la structure d'une lettre (`opener`,`p`, `closer`) à l'intérieur d'une note. 

## Installation et configuration

### Prérequis
- Node.js (version 18+ recommandée).
- npm ou yarn.

### Étapes
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/pippaJeanne/lettres-calvin.git
   cd lettres-calvin
   ```

2. Installer les dépendances :
    *Exemple:*
   ```bash
   npm install jsdom # Pour l'extraction de données des fichiers XML et leur manipulation pour l'API
   ```

3. Installer SaxonJS pour les transformations XSLT :
   ```bash
   npm i saxonjs-he
   ```

4. Compiler les feuilles XSLT en format SEF (nécessaire pour SaxonJS) :
   ```bash
   npx xslt3-he -nogo -xsl:static/xslt/Transfm-fr.xslt -export:static/xslt/Transfm-fr.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/Transfm-es.xslt -export:static/xslt/Transfm-es.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/Transfm-diplomatique.xslt -export:static/xslt/Transfm-diplomatique.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/Transfm-Fr-voir-changements.xslt -export:static/xslt/Transfm-Fr-voir-changements.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/pdfs.xslt -export:static/xslt/pdfs.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/pdfs_es.xslt -export:static/xslt/pdfs_es.sef.json
   ```

## Développement

1. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
   Le site sera accessible sur `http://localhost:5173`.

2. Scripts disponibles :
   - `npm run build` : Construire pour la production.
   - `npm run preview` : Prévisualiser le build.
   - `npm run check` : Vérifier le code avec Svelte et TypeScript.
   - `npm run lint` : Linter le code.
   - `npm run format` : Formater le code avec Prettier.

3. Structure des routes : Utilise SvelteKit avec routes dynamiques (e.g., `/[lang]/lettres/[id]` pour les lettres).

## Déploiement

Le projet est déployé sur Netlify. Pour déployer :

1. Construire le projet :
   ```bash
   npm run build
   ```

2. Pousser sur la branche principale (main) pour déclencher le déploiement automatique via Netlify.

- Adaptateur : `@sveltejs/adapter-netlify` configuré pour déployer sur Netlify, l'option *edge functions* est désactivée pour ce projet.
- Fonctions Netlify : Dans `netlify/functions/` pour les logs des choix utilisateur pour la génération des PDF.

## Structure du projet

- `src/` : Code source SvelteKit.
  - `routes/` : Pages et API (e.g., `/api/+server.js` pour les données des lettres).
  - `lib/` : Composants, utilitaires, données (XML, ODD, CSS, MD).
     - `xml/` et `xmles/` : Fichiers TEI XML des lettres (français et espagnol).
- `static/` : Assets statiques (XSLT, images, SaxonJS).
  - `xslt/` : Feuilles de transformation XSLT.
- `build/` : Sortie du build (headers, redirects pour Netlify).
- `netlify/` : Configuration Netlify.

### Structure détaillée du projet

**`src/lib/` - Fichiers internes :**
- `biblRep/` - Fichiers JSON pour les informations bibliothécaires et les visualisations
- `components/` - Composants Svelte réutilisables
- `data/` - Contenu Markdown (français `md/` et espagnol `mdes/`)
- `odd/` - Personnalisation du schéma XML
- `xml/` - Fichiers XML en français
- `xmles/` - Fichiers XML des traductions espagnoles
- `fr_es.js` - Configuration d'internationalisation (i18n)
- `search.ts` - Définitions des fonctions de recherche en texte intégral
- `*.css` - Feuilles de style : `blog.css` (pages de lettres), `error.css`, `style.css` (général), `toc-css.css` et `pagedjs_css.css` (génération PDF)

**`src/routes/` - Logique de routage :**
- `[lang = lang]/` - Structure de routage basée sur la langue contenant :
  - `lettres/` - Affichage des lettres en français
  - `cartas/` - Affichage des traductions espagnoles
  - `carte/` - Carte interactive d'index des lieux avec une dimension temporelle
  - `categories/` - Filtrage par catégories (nature des sources, type de destinataire, signature)
  - `index_noms/` - Index des noms
  - `tags/` - Index thématique
  - `pdf_generator/` - Export PDF avec options de filtrage
  - `transcription/` - Transcriptions diplomatiques de l'écriture de Calvin
  - `search/` - Fonctionnalité de recherche en texte intégral
- `api/` - Récupération des données depuis les fichiers XML ; expose le XML via l'API pour la transformation XSLT côté client et le téléchargement
- `hooks.server.js` - Logique de redirection basée sur la langue

**`static/` - *Assets* côté client :**
- `pics_protocole/` - Images de la page du protocole de transcription
- `saxonjs3/` - Bibliothèque SaxonJS pour la transformation XSLT côté client
- `xslt/` - Feuilles de transformation XSLT et exécutables SaxonJS compilés (fichiers *sef.json*)
- Fichiers `.js` et images pour le fonctionnement global du site, incluant certains fac-similés de manuscrits et sources imprimées

## Contribution

Les contributions sont bienvenues ! Vous pouvez aussi forker le dépôt et l'adapter à votre projet. Consultez le dépôt [ProcessDocs](https://github.com/pippaJeanne/ProcessDocs) pour les processus éditoriaux.

1. Forker le dépôt.
2. Créer une branche pour vos modifications.
3. Soumettre une pull request.

### Réutilisation de l'infrastructure

Ce projet peut servir de modèle pour créer des éditions critiques numériques d'autres correspondances ou textes encodés en TEI. Voici un guide simplifié pour adapter l'infrastructure :

#### 1. Préparer les données TEI
- Remplacez les fichiers XML dans `src/lib/xml/` et `src/lib/xmles/` par vos propres fichiers TEI (respectez le schéma ODD dans `src/lib/odd/`). Vous pouvez aussi personnaliser votre propre schéma ODD, vous devriez toutefois envisager l'adaptation de l'API pour bien gérer la structure de vos données.
- Mettez à jour les métadonnées dans les fichiers JSON de `src/lib/biblRep/` (e.g., `persons.json` pour les personnes, `data_timeline.json` pour la timeline). Ces fichiers peuvent être générés dans le dépôt [ProcessDocs](https://github.com/pippaJeanne/ProcessDocs) pour les processus éditoriaux.
- Pour les transcriptions diplomatiques, modifiez `src/lib/biblRep/transcriptions.json` avec vos liens et slugs.

#### 2. Adapter la carte interactive
- Utilisez la plateforme *Observable* pour la création de la carte interactive : [fr](https://observablehq.com/d/1956978c14deb22b), [es](https://observablehq.com/d/de8c36a8a2970791). Forkez le *notebook* et téléversez votre fichier JSON en suivant la structure du fichier [`data_carte.json`](https://github.com/pippaJeanne/ProcessDocs/blob/main/data_json/data_carte.json). Une fois les données chargées, intégrez la carte interactive avec *Runtime with JavaScript*. Choisissez les trois célules principales : *viewof date*, *carte*, *activate*.
- Modifiez le composant dans `src/routes/[lang=lang]/carte/` pour intégrer le contenu du code d'intégration d'*Observable*, notamment le contenu de `<script type="module">`.
- Modifiez les composants `src/lib/components/MapFR.svelte` ou `src/lib/components/MapES.svelte`, le cas échéant, avec les balises `div` du code d'intégration d'*Observable*. Ajustez le style au besoin.

#### 3. Ajouter des informations institutionnelles
- Intégrez les détails des institutions de conservation directement dans les fichiers TEI XML (balises `<msDesc>` et/ou `<bibl>`).
- Pour les informations de catalogue plus détaillées, créez un fichier JSON dans `src/lib/biblRep/` en suivant [le modèle du projet](src/lib/biblRep/bibl.json).

#### 4. Personnaliser les vues et transformations
- Modifiez les feuilles XSLT dans `static/xslt/` pour adapter les transformations (version texte, modernisée, etc.) à votre encodage TEI.
- Recompilez les fichiers XSLT au format *sef.json* avec les commandes données dans "Installation et configuration".
- Ajustez les composants Svelte dans `src/routes/` pour changer l'interface (e.g., ajouter des vues supplémentaires).

#### 5. Déploiement et tests
- Testez localement avec `npm run dev` après chaque adaptation.
- Pour un nouveau projet, changez le nom dans `package.json`, les routes dans `src/routes/`, et la configuration Netlify.
- Déployez sur Netlify ou une plateforme similaire en adaptant `svelte.config.js`.

Cette infrastructure est modulaire : commencez par remplacer les données, puis personnalisez l'interface. Consultez le dépôt [ProcessDocs](https://github.com/pippaJeanne/ProcessDocs) pour des workflows éditoriaux détaillés. Si vous réutilisez le code, citez ce projet comme base.

## Licence et crédits

- **Licence** : Voir `LICENSE`.
- **Auteure** : Yanet Hernández Pedraza.
- **Encodage TEI** : Basé sur les standards TEI pour l'édition critique de correspondance.

## Remerciements

- Institutions partenaires pour les manuscrits.
- Bibliothèque Saxonica pour SaxonJS.
- Communauté SvelteKit et Netlify.
- eScriptorium pour avoir fourni l'infrastructure permettant l'entraînement des [modèles de transcription de l'écriture de Jean Calvin](https://github.com/pippaJeanne/HTR-Jean-Calvin).

---

## English (EN)

### Features

- **Bilingual interface**: French and Spanish navigation.
- **Multiple letter views**: manuscript and printed sources, base edition text (from Jules Bonnet, 1854) as faithful transcription, modernized French version, Spanish translation.
- **Advanced search**: full-text search with FlexSearch, by categories, themes, dates, etc.
- **Navigation**: Browse by chronological order (timeline), categories, themes, name index, interactive map.
- **Manuscript facsimiles**: Display using OpenSeadragon for zoom and rotation.
- **Diplomatic transcriptions**: Dedicated pages for diplomatic transcriptions of the original autograph pages in Calvin's handwriting.
- **PDF generation**: Custom export with cross-filtering options to explore trends or specific aspects, with Paged.js for printing or archival use.
- **API**: Endpoint to retrieve letter data from TEI XML files.
- **Error detection**: Flags encoding inconsistencies, missing information, and certain FR-ES alignment issues to support editorial revision.

### Technologies

- **Framework**: SvelteKit with Netlify adapter.
- **Languages**: JavaScript/TypeScript, HTML, CSS, Sass.
- **Transformations**: SaxonJS for XSLT 3.0 client-side transformation of TEI XML.
- **Search**: FlexSearch for indexing and search.
- **Facsimiles**: OpenSeadragon for high-resolution image display.
- **PDF**: Paged.js for paginated PDF generation.
- **Deployment**: Netlify with serverless functions.
- **Encoding**: TEI (Text Encoding Initiative). Custom ODD schema in `src/lib/odd/custom_schema.odd` and `src/lib/odd/custom_schema.rng` supports `bibl`, `msDesc`, ARK/IIIF links, and letter structure in a note.

### Installation and configuration

#### Prerequisites
- Node.js (version 18+ recommended).
- npm or yarn.

#### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/pippaJeanne/lettres-calvin.git
   cd lettres-calvin
   ```

2. Install dependencies:
   *Example:*
   ```bash
   npm install jsdom # For extracting and manipulating XML data for the API
   ```

3. Install SaxonJS for XSLT transformations:
   ```bash
   npm i saxonjs-he
   ```

4. Compile XSLT stylesheets to SEF format (required by SaxonJS):
   ```bash
   npx xslt3-he -nogo -xsl:static/xslt/Transfm-fr.xslt -export:static/xslt/Transfm-fr.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/Transfm-es.xslt -export:static/xslt/Transfm-es.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/Transfm-diplomatique.xslt -export:static/xslt/Transfm-diplomatique.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/Transfm-Fr-voir-changements.xslt -export:static/xslt/Transfm-Fr-voir-changements.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/pdfs.xslt -export:static/xslt/pdfs.sef.json
   npx xslt3-he -nogo -xsl:static/xslt/pdfs_es.xslt -export:static/xslt/pdfs_es.sef.json
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

2. Available scripts:
   - `npm run build`: Build for production.
   - `npm run preview`: Preview the build.
   - `npm run check`: Validate code with Svelte and TypeScript.
   - `npm run lint`: Lint the code.
   - `npm run format`: Format code with Prettier.

3. Routing structure: Uses SvelteKit dynamic routes (e.g., `/[lang]/lettres/[id]` for letters).

### Deployment

The project is deployed on Netlify. To deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. Push to the main branch to trigger Netlify deployment.

- Adapter: `@sveltejs/adapter-netlify` configured for Netlify deployment; the *edge functions* option is disabled for this project.
- Netlify functions: located in `netlify/functions/` for logging user choices related to PDF generation.

### Project structure

- `src/`: SvelteKit source code.
  - `routes/`: Pages and API (e.g., `/api/+server.js` for letter data).
  - `lib/`: Components, utilities, data (XML, ODD, CSS, MD).
      - `xml/` and `xmles/`: TEI XML files for letters in French and Spanish.
- `static/`: Static assets (XSLT, images, SaxonJS).
  - `xslt/`: XSLT stylesheets.
- `build/`: Build output (headers, redirects for Netlify).
- `netlify/`: Netlify configuration.

#### Detailed project structure

**`src/lib/` - Internal files:**
- `biblRep/`: JSON files for bibliographic information and visualizations.
- `components/`: Reusable Svelte components.
- `data/`: Markdown content (French `md/` and Spanish `mdes/`).
- `odd/`: XML schema customization.
- `xml/`: French XML files.
- `xmles/`: Spanish XML files.
- `fr_es.js`: Internationalization configuration.
- `search.ts`: Full-text search logic.
- `*.css`: Stylesheets: `blog.css`, `error.css`, `style.css`, `toc-css.css`, `pagedjs_css.css`.

**`src/routes/` - Routing logic:**
- `[lang = lang]/`: Language-based routing, including:
  - `lettres/`: French letters.
  - `cartas/`: Spanish letters.
  - `carte/`: Interactive map with temporal dimension for location index.
  - `categories/`: Category filtering (source type, recipient type, signature status).
  - `index_noms/`: Name index.
  - `tags/`: thematic browsing.
  - `pdf_generator/`: PDF export with filters.
  - `transcription/`: Diplomatic transcriptions of original autograph manuscripts.
  - `search/`: Full-text search.
- `api/`: Data retrieval from XML files and API exposure for client-side XSLT transfromation and download.
- `hooks.server.js`: Language-based redirection logic.

**`static/` - Client assets:**
- `pics_protocole/`: Protocol page images.
- `saxonjs3/`: SaxonJS library.
- `xslt/`: XSLT files and compiled SEF outputs.

### Contribution

Contributions are welcome! You can also fork the repository and adapt it for your own project. See [ProcessDocs](https://github.com/pippaJeanne/ProcessDocs) for editorial workflows.

1. Fork the repository.
2. Create a branch for your changes.
3. Submit a pull request.

### Reusing the infrastructure

This project can be used as a template for creating digital scholarly editions of other correspondences or TEI-encoded texts. Here is a simplified guide for adapting the infrastructure:

#### 1. Prepare TEI data
- Replace XML files in `src/lib/xml/` and `src/lib/xmles/` with your own TEI files (respect the ODD schema in `src/lib/odd/`). You can also customize your own ODD schema, but you should consider adapting the API to properly manage your data structure.
- Update metadata in `src/lib/biblRep/` JSON files (for example `persons.json` for people, `data_timeline.json` for timeline data). These files can be generated in the [ProcessDocs](https://github.com/pippaJeanne/ProcessDocs) repository for editorial workflows.
- For diplomatic transcriptions, update `src/lib/biblRep/transcriptions.json` with your own links and slugs.

#### 2. Adapt the interactive map
- Use Observable for creating the interactive map: [fr](https://observablehq.com/d/1956978c14deb22b), [es](https://observablehq.com/d/de8c36a8a2970791). Fork the notebook and upload your JSON file following the structure of [`data_carte.json`](https://github.com/pippaJeanne/ProcessDocs/blob/main/data_json/data_carte.json). Once your data is loaded, integrate it using *Runtime with JavaScript* with the three main cells: `viewof date`, `carte`, `activate`.
- Modify the map component in `src/routes/[lang=lang]/carte/` to integrate the Observable embed code, particularly the content inside the `<script type="module">` tag.
- Edit components `src/lib/components/MapFR.svelte` or `src/lib/components/MapES.svelte` with the `div` tags from the Observable embed code. Adjust styling as needed.

#### 3. Add conservation institution information
- Add conservation institution details directly into TEI XML files (`<msDesc>`, `<bibl>`, etc.).
- For more detailed catalog information, create a JSON file in `src/lib/biblRep/` and follow [the project model](src/lib/biblRep/bibl.json).

#### 4. Customize views and transformations
- Modify XSLT stylesheets in `static/xslt/` to fit your TEI encoding and desired output.
- Recompile XSLT files into sef.json format with the commands in "Installation and configuration".
- Adjust Svelte components in `src/routes/` to change the interface or add new views.

#### 5. Deployment and testing
- Test locally with `npm run dev` after each adaptation.
- For a new project, change the name in `package.json`, update routes in `src/routes/`, and adjust Netlify configuration.
- Deploy to Netlify or a similar platform, updating `svelte.config.js` as needed.

This infrastructure is modular: start by replacing the data, then personalize the interface. See [ProcessDocs](https://github.com/pippaJeanne/ProcessDocs) for detailed editorial workflows. If you reuse this code, cite this project as the base.

### License and credits

- **License**: See `LICENSE`.
- **Author**: Yanet Hernández Pedraza.
- **TEI encoding**: Based on TEI standards for critical editions of correspondence.

### Acknowledgments

- Partner institutions for manuscripts.
- Saxonica for SaxonJS.
- The SvelteKit and Netlify communities.
- eScriptorium for providing the infrastructure to train [Jean Calvin handwriting transcription models](https://github.com/pippaJeanne/HTR-Jean-Calvin).
