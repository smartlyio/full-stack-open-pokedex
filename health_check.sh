#!/bin/bash

response=$(curl localhost:5000/health)
echo $response

echo "Hello from shell script"
echo "Path: $PWD"

if [[ $response -eq 'ok' ]]
then
    echo "App is healthy"
    exit 0
else
    echo "App is unhealthy"
    exit 1
fi

exit 0 # exit status 1 means that the script "fails"