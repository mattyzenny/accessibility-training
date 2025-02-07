#!/bin/bash

# Remove all files from the current directory (except for .git directory)
echo "Removing all files from the current directory..."
rm -rf ./*

# Move the contents from dist/accessibility-training to the current directory
echo "Moving files from dist/accessibility-training to current directory..."
mv dist/accessibility-training/* ./

# Add changes to git
echo "Adding changes to git..."
git add .

# Commit changes with a message
echo "Committing changes..."
git commit -m "Update gh-pages"

# Push changes to the remote repository
echo "Pushing changes to remote repository..."
git push origin gh-pages

echo "Deployment complete!"