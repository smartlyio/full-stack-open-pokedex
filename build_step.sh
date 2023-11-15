#!/bin/bash

echo "Build script"

# add the commands here
npm install
npm test
npm run eslint
npm run build
npm run start-prod
