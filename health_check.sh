#!/bin/bash

url=https://fullstack-pokemon.fly.dev/health
targetResult="ok"

result=$(curl ${url})

if [ "$targetResult" = "$result" ]; then
    echo "Success"
    exit 0
else
    echo "Failed"
    exit 1
fi