FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

ENV NODE_ENV=production
ENV PORT=3000
# Puedes usar un JWT_SECRET distinto en producción, no usar secret en docker file, es mejor pasarlo com
# parámetro al correrlo
ENV JWT_SECRET=dev-secret

COPY middleware/ ./middleware/

EXPOSE 3000

CMD ["npm", "start"]