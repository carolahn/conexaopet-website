FROM node:16.17.0

WORKDIR /website

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000