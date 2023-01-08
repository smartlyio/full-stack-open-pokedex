#!/bin/bash

echo "Hello from shell script"
echo "trying to install curl with 'apt update & apt install curl'"
apt update & apt install curl
#CURL='/usr/bin/curl'
##URL="/health"
LOCAL_URL="http://localhost:8080/health"
URL="https://fullstack-part11.fly.dev/health"

# you can store the result in a variable
#raw="$($CURL $URL)"
#
#echo "raw: $raw"

#result="$(curl -s 'http://localhost:8080/health')"
result="$(curl -s $URL)"
echo "curl result: '$result'"
#RESP=$(echo "$result" | grep -oP "^[^a-zA-Z0-9]")
#echo "RESP:'$RESP'"

if [ "$result" == "ok" ]; then
  echo "health check OK"
  exit 0
else
  echo "Strings are not equal"
  exit 1
fi