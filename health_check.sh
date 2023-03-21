#!/bin/bash

result="$(curl -s 'http://localhost:5000/health')"

if [ "$result" = "ok" ];
then 
  echo "all good"
  exit 0
else 
  echo "health check not ok"
  exit 1
fi