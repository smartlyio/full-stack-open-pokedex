#!/bin/bash

result="$(curl -s 'https://fullstackopen2022-pokedex.fly.dev/health')"

if [ "$result" = "ok" ];
then 
  echo "all good"
  exit 0
else 
  echo "health check not ok"
  exit 1
fi