#!/bin/bash

echo 'Start of build script'

npm run build
npm run start-prod

echo 'Build script completed'