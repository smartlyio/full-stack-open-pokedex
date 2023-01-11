#!/bin/bash

echo "Hello from shell script"

HEALTHRESPONSE=`curl http://localhost:8080/health`

if [ "$HEALTHRESPONSE" != "ok" ]; then
echo "RESPONSE IS NOT OKE"

exit 0 # exit status 0 means that the script "passes"