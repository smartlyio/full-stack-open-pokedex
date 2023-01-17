#!/bin/bash

response=$(curl --write-out '%{http_code}' --silent --output /dev/null http://127.0.0.1:5000/health)

if [[ "$response" -ne 204 ]] ; then
  echo "Health check failed, response code $response"
  exit 1
else
  exit 0
fi