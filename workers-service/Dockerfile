# opts-service/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

# Copiamos el resto del código del servicio
COPY . .

# En tu index.js usas PORT || 3006
ENV PORT=3006
EXPOSE 3006

CMD ["npm", "start"]