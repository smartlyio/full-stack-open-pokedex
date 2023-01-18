#!/bin/bash

result=$(curl https://fspokedex.fly.dev/health)
compare_res="ok"

if [[ "$result" == "$compare_res" ]]; then
 echo "Got result: $result, similar to $compare_res. Succeeded."
 exit 0 # Script "succeeds"
else
 echo "Got result $result, not similar to $compare_res. Failed."
 exit 1 # Script "fails"
fi

