#!/bin/bash

res=$(curl https://cold-star-519.fly.dev/health)

if [[ $res = "ok" ]];then
  exit 0
fi

exit 1