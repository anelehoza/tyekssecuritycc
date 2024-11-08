FROM  node:23

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci 

COPY . .

EXPOSE 5500

CMD ["npm", "start"]