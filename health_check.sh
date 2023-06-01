#!/bin/bash

res=$(curl -s https://suhthanurista.fly.dev/health)

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health"
  exit 0

echo "Failed curl to /health"
# 0: OK, 1: Bad.
exit 1
