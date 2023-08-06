#!/bin/bash

echo "Build script"

# add the commands here

npm install
npm run eslint
npm run build
npm run test
npm run test:e2e
npm run start-prod