# syntax=docker/dockerfile:1

FROM node:16.13-alpine

WORKDIR /ui
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 3000
