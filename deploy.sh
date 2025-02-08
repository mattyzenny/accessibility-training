#!/bin/bash

echo "Starting production build..."
npm run prod

#Switches branches
echo "Do you want to switch branches? (y/n)"

read confirmation_branch_switch
if [[ "$confirmation_branch_switch" == "y" ]]; then
  echo "Switching to gh-pages branch..."
  git checkout gh-pages
  else 
  echo "Aborting branch switch."
  exit 1
fi

# Verify on correct branch
echo "Is $(git branch --show-current) the correct branch to execute the script? (y/n)"
read confirmation_branch
if [[ "$confirmation_branch" != "y" ]]; then
  echo "Enter the branch you want to switch to:"
  read branch_name
  git checkout "$branch_name"
fi


# Confirm before removing files
echo "WARNING: This will delete all directories except dist/ and .git. Are you sure? (y/n)"
read confirmation_delete
if [[ "$confirmation_delete" != "y" ]]; then
  echo "Aborted file removal."
  exit 1
fi

# Remove all files from the current directory (except for .git directory)
echo "Removing all files from the current directory..."
rm -f ./*

# Move the contents from dist/accessibility-training to the current directory
echo "Moving files from dist/accessibility-training to current directory..."
mv dist/accessibility-training/* ./


echo "Ready to Deploy? (y/n)"
# Confirm before adding changes to git
read confirmation_deploy
if [[ "$confirmation_deploy" != "y" ]]; then
  echo "Aborted Git add."
  exit 1
fi

# Add changes to git
echo "Adding changes to git..."
git add .

# Confirm before committing changes
echo "Do you want a custom commit? (y/n)"
read confirmation_commit
if [[ "$confirmation_commit" == "y" ]]; then
  echo "Enter your custom commit message:"
  read commit_message
  git commit -m "$commit_message"
  else
  git commit -m "Update gh-pages"
fi

# Push changes to the remote repository
echo "Pushing changes to remote repository..."
git push origin gh-pages

echo "Deployment complete!"