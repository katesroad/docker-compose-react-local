FROM node:14.5.0-alpine

WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

EXPOSE 8080

CMD ["pm2-runtime", "index.js", "--watch"]