# Utiliser l'image Node.js pour builder l'application
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers et builder l'application Angular
COPY . .
RUN npm run build --prod

# Utiliser une image Nginx pour servir l'application Angular
FROM nginx:alpine
COPY --from=build /app/dist/frontend-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
