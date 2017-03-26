FROM node:7

RUN apt-get update
RUN apt-get upgrade -y

WORKDIR /app


# cache friendly
ADD package.json /app/package.json
RUN npm install

COPY . /app

ENV NODE_ENV=production

RUN npm run build

EXPOSE 8080

CMD ["npm","run","dev"]
