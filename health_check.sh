#!/bin/bash

status=$(curl -s https://ivosepokedex.fly.dev/health)

if [[ $status == "ok" ]]; then
  echo "OK"
  exit 0
else
  echo "Error"
  exit 1
fi

exit 0