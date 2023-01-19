#!/bin/bash
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000/health)
if [ $response -eq 200 ]; then
  exit 0
else
  exit 1
fi