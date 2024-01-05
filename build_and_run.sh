#!/bin/bash

npm run build

if [ $? -eq 0 ]; then
  npm run start-prod
else
  echo "Error: npm run build failed. Please fix the build issues before starting prod."
fi
