#!/bin/bash

echo "Hello from shell script"
RES=$(curl -s "https://bitter-sea-4629.fly.dev/health")

echo "$RES"
if [ $RES = "ok" ]
then
  exit 0
fi

exit 1 # exit status 1 means that the script "fails"