#!/bin/bash

response=$(curl  -s -L 'http://young-dream-9646.fly.dev/health')
expected=ok

if [ "$response" = "$expected" ]; then
    exit 0  # exit status 0 means that the script "succeeds"
else
    exit 1 # exit status 1 means that the script "fails"
fi