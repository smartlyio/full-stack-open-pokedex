#!/bin/bash

echo "Build script"

# Установка зависимостей
npm install

# Автоматическая установка webpack-cli без запроса подтверждения
yes | yarn add -D webpack-cli

# Сборка приложения
npm run build

# Установка порта и запуск приложения
PORT=8080 npm run start-prod