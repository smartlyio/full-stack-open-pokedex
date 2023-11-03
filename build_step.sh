#!/bin/bash

echo "Build script"
# Установка зависимостей
npm install
# Сборка приложения
# Установка webpack-cli без запросов
npm install -g webpack-cli --yes

npm run build
# Установка порта и запуск приложения
PORT=8080 npm run start-prod