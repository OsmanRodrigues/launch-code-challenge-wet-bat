# syntax=docker/dockerfile:1

FROM node:16.13-alpine

WORKDIR /api
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 4040
