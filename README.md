# Landing Page
Landing page de Mauria

## Technologies utilisées

- Next.JS `v14.0.2`
- TailwindCSS
- TypeScript `v5.5.2`
- Docker

## Structure du projet

Nous avons séparé le projet en plusieurs dossiers :
- `app` : contient le code de l'application
- `components` : contient les composants réutilisables dans l'application
- `hooks ` : contient les hooks réutilisables dans l'application
- `theme` : contient le CSS, les assets et les fonts

## SVGS

### Librairie d'Icones

Nous utilisons le pack d'icônes [Iconly Pro](https://iconly.pro/). Celles-ci sont payantes. Vous pouvez contacter [Louis Lecouturier](https://discordapp.com/users/louistiti_) pour avoir les icones de ce pack.
Il est préférable d'utiliser les icones de ce pack pour garder une cohérence de design sur le site et l'application Mauria

### Utilisation dans le code
On utilise la librairie [@svgr/cli](https://react-svgr.com/) pour transformer les **svg** en **composants React**
Pour exporter une icon `.svg` en un composant React, il faut :

1. Mettre votre fichier svg dans le dossier `src/theme/assets/icons/svg`
2. Run la commande suivante : 
    > pnpm svgr
3. Votre icône est alors exportée dans le dossier `src/theme/assets/icons/svg` et utilisable dans votre code :
    ```tsx 
   import { IconName } from "@icons";
   // ...
   <IconName className={"some tailwind classnames"}/>
   ```
> ### La commande `pnpm svg` modifie également les choses suivantes sur le fichier :
> - Retire les dimensions (attributs `width`et `height` du svg)
> - Remplace la couleur `#000` et la remplace par `currentColor`, pour changer la couleur de l'icône, passer par la classe `text-yourColor`
> - Remplace la `viewBox` égale à `0 0 24 25` par `0 0 24 24`, cela est dû à certaines incohérences dans les svg d'[Iconly Pro](https://iconly.pro/)

## Installation

### Prérequis

- NodeJS `v20+`
- pnpm
- TypeScript `v5+`

### Installation

1. Cloner le repo
2. Se placer dans le dossier du projet : `cd app`
3. Installer les dépendances : `pnpm i`
4. Lancer le projet : `pnpm dev`
5. Le projet est accessible à l'adresse suivante : `http://localhost:3000`


## Déploiement
Nous utilisons Github Actions pour déployer le projet sur notre serveur. 
Le déploiement est automatique à chaque push/pull request sur la branche `main`.


## Contribution

Pour contribuer au projet, il faut faire un fork du repo à partir de la branche `main`.
Une fois votre fork créé, vous pouvez travailler sur votre fork
Pour proposer vos changements, vous devez faire une pull request sur la branche `main` du repo principal.

Si votre contribution est acceptée, elle sera déployée automatiquement ! 🤩

## License
Ce projet est sous licence GNU v3. Pour plus d'informations, voir le fichier `LICENSE` à la racine du projet.
