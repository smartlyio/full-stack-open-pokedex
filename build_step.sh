#!/bin/bash

echo 'Start of build script'

npm install
npm run build
npm run start-prod

echo 'Build script completed'