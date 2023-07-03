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

# Ohjelma pitää käynnistää enne kuin voi runaa e2e testit
npm run start-prod

# Run end-to-end tests
npm run test:e2e