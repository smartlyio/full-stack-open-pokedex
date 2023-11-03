#!/bin/bash

echo "Build script"

# Установка зависимостей
npm install

# Сборка приложения
npm run build

# Запуск приложения
PORT=8080 npm run build && node app.js