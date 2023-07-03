#!/bin/bash

echo "Build script"

# Install dependencies
npm install

# Linting
npm run eslint

# Build the project
npm run build

# Testit
npm run test

# Run end-to-end tests
npm run test:e2e