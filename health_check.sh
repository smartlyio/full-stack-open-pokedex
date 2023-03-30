#!/bin/bash

echo "Hello from shell script"

res=$(curl -s https://fullstack-pokestuff.fly.dev/health)

if [ "$res" == "ok" ]; then
    echo "bash health check ok" 
    exit 0
else
    echo "bash health check NOT ok" 
    echo 1
fi