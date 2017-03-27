FROM ubuntu

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y nodejs && \
    apt-get install -y nginx && \
    apt-get install -y npm

WORKDIR /app

# cache friendly
ADD package.json /app/package.json
RUN npm install

COPY . /app

ENV NODE_ENV=production

RUN npm run build

COPY nginx.conf /etc/nginx/nginx.conf

RUN service nginx start


EXPOSE 8080
