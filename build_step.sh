#!/bin/bash

echo "Build script"

# Установка зависимостей
npm install

yarn add -D webpack-cli

# Сборка приложения
npm run build

# Установка порта и запуск приложения
PORT=8080 node app.js