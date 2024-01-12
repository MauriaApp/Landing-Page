FROM node:20-alpine
LABEL authors="louislecouturier"

# Création du répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie du package.json et du package-lock.json dans le répertoire de travail
COPY app/package*.json ./

# Installation des dépendances
RUN npm install

# Copie de tout le contenu du dossier "app" dans le répertoire de travail
COPY app/ .

# Exposition du port 3000 utilisé par l'application Next.js
EXPOSE 4321

RUN npm run build

# Commande pour démarrer l'application
CMD ["npm", "start"]