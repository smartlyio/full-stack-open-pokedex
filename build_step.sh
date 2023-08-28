#!/bin/bash

echo "Build script"

npm install
webpack --mode production

echo "Build ready"
