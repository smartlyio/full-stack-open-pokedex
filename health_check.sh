#!/bin/bash

# Make the HTTP request and store the response in a variable
response=$(curl -s "https://throbbing-leaf-6979.fly.dev/health")

# Check if the response is equal to 'ok'
if [[ $response == "ok" ]]; then
    echo "Response ok"
else
    echo "Error"
fi