# Readme

Ce projet de chat fonctionne avec une API et un front-end séparés en deux dépôts GitHub distincts. Il faut utiliser les deux pour faire fonctionner le projet. 

- [Dépôt de l’API](https://github.com/laura-munsch/chat-api)
- [Dépôt du front-end](https://github.com/laura-munsch/chat-front)

## Configuration

### API

- Ruby v3.1.2
- Rails v7.0.3
- Base de données : PostgreSQL v1.1

### Front-end

- React v18.2
- Client HTTP : Axios v0.27.2
- Styles : Dart Sass v1.54.9

## Lancer le projet en mode développement

1. Récupérer le projet de l’API (lien github) et y ouvrir un terminal
    1. Créer la base de données en utilisant `rails db:create` puis les tables dans la base de données avec `rails db:migrate`
    2. Y insérer les données par défaut avec `rails db:seed`
    3. Lancer le serveur local avec `rails s`
2. Récupérer le projet React avec le front (lien github) 
    1. Modifier l’URL de l’API dans le fichier .env avec l’adresse du serveur local qui a été ouvert
    2. Lancer le projet sur un serveur de développement local avec `npm run start`
