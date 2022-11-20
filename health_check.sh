#!/bin/bash

res=$(curl -s https://pokedex-perttu-kangas.fly.dev/health)

if [ "$res" = "ok" ]; then
    echo "fail"
    exit 0  # exit status 0 means that the script "succeeds"
else
    echo "fail"
    exit 1 # exit status 1 means that the script "fails"
fi