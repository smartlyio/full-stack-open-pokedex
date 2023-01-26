#!/bin/bash

VARIAVEL=$(curl -s -D GET http://localhost:8080/health)

if [ $VARIAVEL = "ok" ]; then
    exit 0  # exit status 0 means that the script "succeeds"
fi

echo "falhou"
exit 1

