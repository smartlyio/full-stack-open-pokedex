FROM node:16-bullseye-slim AS build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install && npm run build

FROM gcr.io/distroless/nodejs:16
WORKDIR /usr/src/app
COPY --from=build /usr/src/app /usr/src/app
CMD ["app.js"]