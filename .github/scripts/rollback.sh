#!/usr/bin/bash

flyctl releases --image | while read -r line; do
    status=$(echo "$line" | awk -F '\t' '{print $2}')

    if [ "$status" = "complete" ];then
      rollback=$(echo "$line" | awk -F '\t' '{print $1}')
      image=$(echo "$line" | awk -F '\t' '{print $6}')
      echo "Deploy failed. Rolling back to ${rollback}"
      flyctl deploy -i "${image}" --remote-only --wait-timeout 60
      break
    fi
done