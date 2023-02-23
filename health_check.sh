#!/bin/bash

result=$(curl http://localhost:$PORT/health)

if [[ $result == "ok" ]]; then
    exit 0
fi

exit 1