#!/bin/bash

# Set the URL of your health check endpoint
HEALTH_CHECK_URL="http://localhost:5000/health"

# Make a GET request to the health check endpoint and store the response
RESPONSE=$(curl -sS $HEALTH_CHECK_URL)

# Define the expected response string
EXPECTED_RESPONSE="ok"

# Check if the response is equal to the expected string
if [ "$RESPONSE" = "$EXPECTED_RESPONSE" ]; then
    exit 0 # The application is healthy
else
    exit 1 # The application is not healthy
fi