#!/bin/bash

result=$(curl http://localhost:$1/health)

if [[ $result == "ok" ]]; then
    echo SUCCESS
    exit 0
fi

echo FAIL
exit 1