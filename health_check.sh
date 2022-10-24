#!/bin/bash

NAME=$(curl https://rahul-pokedex.fly.dev/health)
if [ "$NAME" == "ok" ]; then 
  echo "HEALTH ENDPOINT ONLINE"
else
  echo "CANNOT REACH HEALTH ENDPOINT"
fi

exit 1 #exit status 1 means that the script "fails"https://rahul-pokedex.fly.dev/health