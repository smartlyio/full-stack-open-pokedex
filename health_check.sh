#!/bin/bash

echo "Hello from shell script"

RES=$(curl -s "https://holy-frog-4862.fly.dev/health")

echo "$RES"
if [ $RES = "ok" ]
then
  exit 0
fi

exit 1 