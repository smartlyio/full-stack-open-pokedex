#!/bin/bash

echo "Hello from shell script"

resp=$(curl https://pokedexapp.fly.dev/health)
if [ "$resp" == "ok" ]
  then
    exit 0
  else
    exit 1
fi