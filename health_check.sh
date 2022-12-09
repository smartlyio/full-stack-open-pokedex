#!/bin/bash

EXPECT="ok"
RESPONSE=$(curl http://localhost:5000/health)

  echo "$EXPECT"
  echo $RESPONSE

if [ "$EXPECT" = "$RESPONSE" ]; then
    echo "Strings are equal."
    exit 0  # exit status 0 means that the script "succeeds"
else
    echo "Strings are not equal."
    exit 1  # exit status 1 means that the script "fails"
fi