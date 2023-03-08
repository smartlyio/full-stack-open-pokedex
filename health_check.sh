#!/bin/bash

echo "Health Check from shell script"

URL="https://throbbing-voice-8584.fly.dev/health"

response=$(curl -s $URL)

echo $response

if [ "$response" == "ok" ]; then
  echo "Health check success"
  exit 0 # exit status 0 means that the script succeed.
  fi

echo "Health check failed"
exit 1 # exit status 1 means that the script failed.