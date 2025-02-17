const fs = require('fs');
const execSync = require('child_process').execSync;

// Function to get the updated content from the git diff
function getUpdatedContent(filePath) {
  try {
    // Run the git diff to capture what has been added
    const diffOutput = execSync(`git diff --cached ${filePath}`).toString();
    console.log("Full Diff Output:", diffOutput); // Debugging log to check output

    const updatedContent = [];
    
    // Regex to match lines that have been added in the diff (lines starting with '+')
    const regex = /^\+([^\+].*)$/gm; // Ignore lines starting with '++' (file headers)
    let match;
    
    while ((match = regex.exec(diffOutput)) !== null) {
      updatedContent.push(match[1].trim()); // Capture and trim the updated content
    }

    // Join the content into one string and limit the length if necessary
    const content = updatedContent.join(' ').substring(0, 200); // Limit to 200 characters for brevity

    console.log("Updated Content Detected:", content); // Check what content was detected
    return content;
  } catch (err) {
    console.error('Error extracting updated content:', err);
    return '';
  }
}

// Function to update the updates.json dynamically
function updateJson(filePath) {
  const updatedContent = getUpdatedContent(filePath);
  const updatesJsonPath = 'git-backend/updates.json';
  const updates = JSON.parse(fs.readFileSync(updatesJsonPath, 'utf-8')) || {};

  const updated = new Date().toISOString(); // Current timestamp
  const rangeKey = 'updated-content'; // A simple key for this particular change (no range needed)

  if (!updates[filePath]) {
    updates[filePath] = {};
  }

  updates[filePath][rangeKey] = { term: updatedContent, updated };

  fs.writeFileSync(updatesJsonPath, JSON.stringify(updates, null, 2));
  console.log(`✅ Updated ${updatesJsonPath} successfully`);
}

// Specify the file to track
const filePath = 'src/app/Resources/resources.component.ts';
updateJson(filePath);