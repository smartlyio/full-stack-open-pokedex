#!/bin/sh

# Set the URL of the health check endpoint
HEALTH_CHECK_URL="https://pokedex-2023.fly.dev/health"

# Send a GET request to the health check endpoint and capture the response
RESPONSE=$(curl --silent --output /dev/null --write-out "%{http_code}" "$HEALTH_CHECK_URL")

# Check if the response is '200 OK'
if [ "$RESPONSE" -eq 200 ]; then
  # Send another GET request to the endpoint to verify that it returns 'ok'
  HEALTH_CHECK_RESPONSE=$(curl --silent "$HEALTH_CHECK_URL")
  if [ "$HEALTH_CHECK_RESPONSE" = "ok" ]; then
    echo "Health check successful"
    exit 0
  else
    echo "Health check failed: unexpected response $HEALTH_CHECK_RESPONSE"
    exit 1
  fi
else
  echo "Health check failed: HTTP $RESPONSE"
  exit 1
fi
