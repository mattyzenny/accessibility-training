#!/bin/bash

# 1. Copy updated resources.component.ts from accessibility-training to git-backend
echo "Copying updated resources.component.ts from accessibility-training/... to git-backend/..."
cp src/app/Resources/resources.component.ts git-backend/src/app/Resources/resources.component.ts

# 2. Add all changes (both accessibility-training and git-backend)
echo "Staging changes..."
git add .

# 3. Commit the changes
echo "Committing changes..."
echo "Enter your commit message (press Enter for default):"
read commit_message
if [ -z "$commit_message" ]; then
  commit_message="Update resources.component.ts in both accessibility-training/... and git-backend/..."
fig
git commit -m "$commit_message"

# 4. Push changes to the remote repository
echo "Pushing changes to remote repository..."
git push origin master

echo "Update complete!"