FROM node:alpine
RUN apk update && apk upgrade
WORKDIR /client_web
COPY . .
RUN mkdir -p /clients_shared
RUN ln -s /clients_shared/client.apk ./public/client.apk
RUN npm install
CMD ["npm", "start"]