FROM node:16-alpine

WORKDIR /build

COPY build/ /build/

RUN npm install --global http-server

CMD ["http-server", "-p", "3000", "-P http://localhost:3000?"] 

