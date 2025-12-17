FROM node:20-alpine

WORKDIR /app

# Copiar SOLO package.json del gateway
COPY gateway/package.json ./
COPY gateway/package-lock.json ./

RUN npm ci --omit=dev

# Copiar TODO el código del gateway a /app
COPY gateway/ ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "index.js"]
