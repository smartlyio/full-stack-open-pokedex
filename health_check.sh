#!/bin/bash
response=$(curl -s https://paraspokedex.fly.dev/health)

if [ "$response" = "ok" ]; then
    exit 0 #app is healthy
else
    exit 1 #app is not healthy
fi