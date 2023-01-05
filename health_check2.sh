#!/bin/bash

var="$(curl "localhost:8080/health")" 

if [[ $var =~ "ok" ]]; then
    exit 0
else
    exit 1
fi