#!/bin/bash

echo "Build script"

# Install dependencies
npm install

# Linting
npm run eslint

# Build the project
npm run build

# Start the application in the background
npm start &

# Wait for the application to be accessible
sleep 5

# Run the e2e tests
npm run test:e2e