#!/bin/bash

echo "Build script"

# Установка зависимостей
npm install

# Сборка приложения
npm run build

# Установка порта и запуск приложения
PORT=8080 node app.js