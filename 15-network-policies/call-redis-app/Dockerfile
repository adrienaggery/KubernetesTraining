FROM node:21

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY src/ src/

RUN npm ci

CMD ["node", "src/server.js"]