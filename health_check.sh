#!/bin/bash

curl https://brosef.fly.dev/health | grep -q "ok"

if [ $? -eq 0 ]
then
  exit 0
else
  exit 1
fi