#!/bin/bash

echo "Hello from shell script"

var=$(curl http://localhost:8080/health)

echo $var

exit 0