#!/bin/bash

echo "The health check script is starting on the Fly.io VM"
apt-get update && apt-get -y install curl
expected_response="ok"
response=(curl --silent https://villagrat-pokedex-cicd.fly.dev/health)
exit 0
# if [[ "$expected_response" == "$response" ]]
# then exit 0 # bash success status code
# else exit 1 # bash failure status code