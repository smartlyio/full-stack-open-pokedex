#!/bin/bash

echo "Build script"

# Установка зависимостей
npm install

# Сборка приложения
npm run build

# Запуск приложения
node app.js