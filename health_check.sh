#!/bin/bash

echo "Hello from shell script"

LOCAL_URL="http://localhost:5000/health"
URL="https://fullstack-part11.fly.dev/health"

result_local=$(curl $URL)
echo "curl localhost result: '$result_local'"

result=$(curl $URL)
echo "curl result: '$result'"

if [ "$result" == "ok" ]; then
  echo "health check OK!"
  exit 0
else
  echo "health check FAILED!"
  exit 1
fi