#!/bin/bash

echo "Hello from shell script"
#echo "trying to install curl with 'apt update & apt install curl'"
#apt update & apt install curl
#CURL='/usr/bin/curl'
##URL="/health"
LOCAL_URL="http://localhost:8080/health"
URL="https://fullstack-part11.fly.dev/health"

result=$(curl $URL)
echo "curl result: '$result'"

if [ "${result}" == "ok" ]; then
  echo "health check OK"
  exit 0
else
  echo "Strings are not equal"
  exit 1
fi