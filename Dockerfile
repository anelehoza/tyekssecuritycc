FROM node:14-alpine3.16
WORKDIR /dist
COPY . .
RUN npm install
CMD ["npm", "start"]
ENV NODE_ENV production
EXPOSE 5001