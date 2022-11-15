#!/bin/bash

res=$(curl -s https://stefanpokedex.fly.dev/health)

echo $res

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health"
  exit 0
  fi

echo "Failed curl to /health"
# 0: OK, 1: Bad.
exit 1