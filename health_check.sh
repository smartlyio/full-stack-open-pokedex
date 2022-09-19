
res=$(curl -s https://young-frost-5915.fly.dev/health)

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health"
  exit 0
  fi

echo "Failed curl to /health"
# 1: Failed, 0: Succeeded.
exit 1
