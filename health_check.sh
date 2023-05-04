#!/bin/bash
URL="http://localhost:8080/health"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
BODY=$(curl -s "$URL")

if [ "$STATUS" -eq 200 ] && [ "$BODY" == "ok" ]
then
  exit 0
else
  exit 1
fi
