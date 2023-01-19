#!/bin/bash
response=$(curl -s http://localhost:5000/health)
if [[ $response == *"ok"* ]]; then
  exit 0
else
  exit 1
fi