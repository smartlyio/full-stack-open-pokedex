#!/bin/bash
echo "Build Script Start"
echo "Install deps"
npm ci
echo "Build with webpack"
npm run webpack --mode production
echo "Build script Complete"

