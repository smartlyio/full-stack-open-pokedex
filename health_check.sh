#!/bin/bash
response=$(curl -s https://silent-hill-9183.fly.dev/health)
if [[ $response == *"ok"* ]]; then
  exit 0
else
  exit 1
fi