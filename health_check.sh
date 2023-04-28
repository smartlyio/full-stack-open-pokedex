#!/bin/bash

echo "Hello from shell script"

response=$(curl -s https://pokedex-fullstack.fly.dev/health)
if [ "$response" = "ok" ]; then
    echo "Pokedex is up and running"
    exit 0
else
    echo "Pokedex is down"
    exit 1
fi
# exit 0 # exit status 1 means that the script "fails"