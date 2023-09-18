#!/bin/bash

echo "Hello from shell script"
response=$(curl -s http://localhost:8080/health)

if [ $response == "ok" ]
then
    echo "Health check passed"
    exit 0
else
    echo "Health check failed"
    exit 1
fi
