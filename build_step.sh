#!/bin/bash

echo "Build script"

webpack --mode production
node app.js