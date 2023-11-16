# Landing Page
Landing page de Mauria

## Technologies utilisées

### Next.JS

### TailwindCSS

### TypeScript


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
