#!/bin/bash

res=$(curl -s https://divine-sound-4603.fly.dev/health)

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health"
  exit 0
  fi

echo "Failed curl to /health"
# 0: OK, 1: Bad.
exit 1