#!/bin/bash

echo "Hello from shell script"
echo "trying to install curl"
apt update
apt install -y curl

LOCAL_URL="http://localhost:8080/health"
URL="https://fullstack-part11.fly.dev/health"

result_local=$(curl $LOCAL_URL)
echo "curl localhost result: '$result_local'"

result=$(curl $URL)
echo "curl result: '$result'"

if [ "$result_local" == "ok" ]; then
  echo "health check OK!"
  exit 0
else
  echo "health check FAILED!"
  exit 1
fi