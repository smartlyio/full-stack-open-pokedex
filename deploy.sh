#!/bin/bash

echo "init deploy"
npm install
npm run build
npm run start-prod