#!/bin/bash

response=$(curl http://localhost:5001/health)
if [ $response == "ok" ]
then
    exit 0
fi
exit 1