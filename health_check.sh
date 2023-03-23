#!/bin/bash

function health_check() {
  expected_value="OK"
  server_response=$(curl https://sparkling-dream-9673.fly.dev/health)

  if [ ${expected_value} == ${server_response} ]; then
    echo "Server status: Healthy"
    exit 0
  fi
  
  exit 1
}

health_check