#!/bin/bash

echo "Hello from shell script"

resp=$(curl http://localhost:5000/health)
if [ "$resp" == "opk" ]
  then
    exit 0
  else
    exit 1
fi