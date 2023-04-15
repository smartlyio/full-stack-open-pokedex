#!/bin/bash

response=$(curl -s http://localhost:8080/health)

if [ $? -ne 0 ]; then
    echo "Error: curl command failed."
    exit 1
fi

if [ "$response" == "ok" ]; then
    echo "Health check passed."
    exit 0
else
    echo "Health check failed. Received response: $response"
    exit 1
fi
