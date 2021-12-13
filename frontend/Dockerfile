FROM node:14-alpine3.12

WORKDIR /usr/src/app/frontend
COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]