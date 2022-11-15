#!/bin/bash
# exit status 0 means that the script "succeeds"

echo "Hello from shell script"

content=$(curl -s https://stefanpokedex.fly.dev/health)

echo $content

if [ "$content" == "ok" ] 
then
    exit 0
else
    exit 1
fi 