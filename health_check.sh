#!/bin/bash

res=$(curl -s https://pokedex.fly.dev/health)
# res=$(curl -s http://localhost:5000/health)

# 0: success, 1: fail.

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health"
  exit 0
  fi

echo "Failed curl to /health"

exit 1