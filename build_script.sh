#!/bin/bash
echo "Build Script Start"
echo "Install deps"
npm ci
echo "Build with webpack"
npm run build
echo "Build script Complete"

