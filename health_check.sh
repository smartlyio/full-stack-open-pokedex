#!/bin/bash
# exit status 0 means that the script "succeeds"

echo "Hello from shell script"

content=$(curl -sLI https:stefanpokedex.fly.dev/health)

if [ "$res" == "ok" ] 
then
    echo "/healt returned ok"
    exit 0
else
    echo "/healt didn't return ok"
    exit 1
fi 