#!/bin/bash

OUTPUT=$(curl https://throbbing-river-7964.fly.dev/health)

if [ "$OUTPUT" = "ok" ]
then
  echo "Matches"
  exit 0
fi
echo "No match"
exit 1