FROM node:16-alpine3.11 AS build-stage

WORKDIR /usr/src/fsa-pokedex

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19.10-alpine

COPY --from=build-stage /usr/src/fsa-pokedex/dist /usr/share/nginx/html
# Override (not overwrite) the default config file.
COPY --from=build-stage /usr/src/fsa-pokedex/nginx.conf /etc/nginx/conf.d/default.conf
