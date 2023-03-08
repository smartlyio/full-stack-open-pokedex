#!/bin/bash

response=$(curl -s https://throbbing-voice-8584.fly.dev/health)

echo $response

if [ "$response" == "ok" ]; then
  echo "Health check success"
  exit 0 # exit status 0 means that the script succeed.
  fi

echo "Health check failed"
exit 1 # exit status 1 means that the script failed.