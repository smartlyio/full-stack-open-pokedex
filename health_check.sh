#!/bin/bash

if [ $(curl https://pokedex.fly.dev/health)  == 'ok' ]
then
    echo "Custom health check passed"
    exit 0
fi

echo "Custom health check failed"
exit 1


