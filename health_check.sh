#!/bin/bash

echo "Hello from shell script"

curl http://localhost:8080 -k -s -f -o /dev/null && echo "SUCCESS" && exit 0 || echo "ERROR" && exit 1
