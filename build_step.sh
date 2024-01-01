#!/bin/bash
echo "Build script"

nvm install 16.20.2
nvm use 16.20.2
npm install
npm run build
