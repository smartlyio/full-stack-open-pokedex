#!/bin/bash

res=$(curl -s https://young-frost-5915.fly.dev/health)

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health"
  exit 0
  fi

# 1: Failed, 0: Succeeded.
exit 1
