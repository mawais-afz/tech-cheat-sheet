#!/bin/bash

# Define the base directory
BASE_DIR="devops"

# Define the cloud providers
CLOUD_PROVIDERS=("cicd" "iac" "containers")

# Loop through each provider and create the required file
for provider in "${CLOUD_PROVIDERS[@]}"; do
    FILE_PATH="$BASE_DIR/$provider/page.tsx"

    # Create the directory if it doesn't exist
    mkdir -p "$(dirname "$FILE_PATH")"

    # Create the file if it doesn't exist
    touch "$FILE_PATH"

    echo "Created: $FILE_PATH"
done

echo "All files created successfully!"
