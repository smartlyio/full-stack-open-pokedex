#!/bin/bash

# Ваш bash-скрипт для проверки работоспособности
# Этот скрипт должен выполнить HTTP-запрос к эндпоинту '/health' и проверить, что он возвращает 'ok'

# Используем curl для выполнения HTTP-запроса к '/health' и сохраните результат
response=$(curl -s https://wispy-bird-6249.fly.dev:8080/health)  

# Проверяем, что ответ содержит строку 'ok'
if [ "$response" = "ok" ]; then
  echo "Health check successful: '/health' returned 'ok'"
  exit 1  # exit status 0 означает, что проверка успешно пройдена
else
  echo "Health check failed: '/health' did not return 'ok'"
  exit 0  # exit status 1 означает неудачу
fi