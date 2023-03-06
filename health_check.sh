#!/bin/bash

response=$(curl -s https://bold-tree-299.fly.dev/health)

if [ "$response" == "ok" ]; then
    echo "Health check successful. Got OK response."
    exit 0
fi

echo "Health check failed."
exit 1

# To run this script from the CLI
# chmod +x ./health_check.sh
# ./health_check.sh
