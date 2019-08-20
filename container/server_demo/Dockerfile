FROM node:10.15.0-jessie

COPY package.json /app/package.json
COPY server.js /app/server.js

RUN cd /app && yarn install

WORKDIR /app
EXPOSE 8056

CMD [ "npm", "start" ]