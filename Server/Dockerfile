FROM node:alpine AS build
RUN apk update && apk upgrade
WORKDIR /server
COPY package.json .
RUN npm install --production
RUN mkdir -p build
RUN cp -r node_modules build/node_modules
RUN cp package.json build/package.json
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /server
COPY --from=build /server/build .
CMD ["node", "index.js"]