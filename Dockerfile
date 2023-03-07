# create a container with node

FROM node:18-alpine

WORKDIR /app

ARG DISCORD_TOKEN
ARG API_TOKEN

COPY ./src ./src
COPY index.js ./

COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
