# opts-service/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

# Copiamos el resto del código del servicio
COPY . .

# En tu index.js usas PORT || 3003
ENV PORT=3003
EXPOSE 3003

CMD ["npm", "start"]