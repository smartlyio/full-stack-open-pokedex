#!/bin/bash

echo "Hello from shell script"

http_code=$(curl -LI https://fullstack-pokestuff.fly.dev/health -o /dev/null -w '%{http_code}\n' -s)
if [ ${http_code} -eq 200 ]; then
    echo "bash health check ok" 
    exit 0
else
    echo "bash health check NOT ok" 
    echo 1
fi