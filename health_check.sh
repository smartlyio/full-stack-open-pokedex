#!/bin/bash

apt-get update -y && apt-get install -y curl

RES=$(curl -L https://my-pokedex.fly.dev/health)

if [ "$RES" = "ok" ]
then
    exit 0
else
    exit 1
fi