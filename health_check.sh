#!/bin/bash

VARIAVEL=$(curl -s -D GET https://delicate-morning-8864.fly.dev/health)

if [ $VARIAVEL = "ok" ]; then
    echo $VARIAVEL
    exit 0  # exit status 0 means that the script "succeeds"
fi


