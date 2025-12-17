# opts-service/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

# Copiamos el resto del código del servicio
COPY . .

# En tu index.js usas PORT || 3002
ENV PORT=3002
EXPOSE 3002

CMD ["npm", "start"]