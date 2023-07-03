#!/bin/bash

echo "Build script"

# Install dependencies
npm install

# Linttaus
npm run eslint

# Build the project
npm run build

# Testit
npm run test

# e2e testit
npm run test:e2e