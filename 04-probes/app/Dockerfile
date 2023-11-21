FROM node:21-alpine3.17

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY src/ src/

RUN npm ci

CMD ["node", "src/server.js"]