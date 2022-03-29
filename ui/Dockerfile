# syntax=docker/dockerfile:1

FROM node:16.13-alpine

WORKDIR /ui
COPY package.json .env.production ./
COPY build ./build
RUN yarn global add serve
RUN yarn install --production
EXPOSE 3000

CMD npx serve -s build
