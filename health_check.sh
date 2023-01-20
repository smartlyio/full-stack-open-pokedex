#!/bin/bash

echo "Hello from shell script"

# For some interesting reason fly doesnt have curl by default
# apt-get update
# apt-get install -y curl

RES=$(curl -s "https://holy-frog-4862.fly.dev/health")

echo "$RES"
if [ $RES = "ok" ]
then
  exit 0
fi

exit 1 