# Projet d'édition critique numérique de la correspondance française de Jean Calvin 

[Le projet est désormais en ligne.](https://lettres-calvin.netlify.app)

L'édition est encore en cours de développement. De nouveau contenu et des lettres seront ajoutées prochainement.

Le processus de traitement des lettres et d'autres informations et fichiers de la chaîne éditoriale pouvent être trouvés [ici](https://github.com/pippaJeanne/ProcessDocs).

----

### Instructions importantes

- **Installer saxonjs/xslt3-he => *npm i saxonjs-he***
- **Commande pour la transformation des feuilles xslt en format sef.json** :
*nécessaire afin de pouvoir utiliser la bibliothèque de code SaxonJS pour la transformation XSLT des fichiers XML*
    
    ```bash
    npx xslt3-he -nogo -xsl:chemin/vers/fichiers/xslt -export:chemin/vers/fichier/sortie.sef.json
    ```