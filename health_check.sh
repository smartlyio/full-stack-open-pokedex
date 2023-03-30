#!/bin/bash

url="http://localhost:${PORT}/health"
result=$(curl $url)

if [ $result = "ok" ]
then
   echo "healthy!"
   exit 0
else
  echo "problems"
  exit 1
fi