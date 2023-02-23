#!/bin/bash

result=$(curl http://localhost:$1/health)

if [[ $result == "ok" ]]; then
    exit 0
fi

exit 1