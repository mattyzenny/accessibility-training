const fs = require('fs');
const execSync = require('child_process').execSync;
const path = require('path');

const filePath = 'src/app/Resources/resources.component.ts'; // The file being tracked
const contentBundlePath = path.join(__dirname, 'contentBundle.json');

// Function to extract resources array dynamically from `resources.component.ts`
function extractResources() {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Match objects inside `this.resources = [...]`
    const resourceMatches = fileContent.match(/\{([^}]+term[^}]+)\}/g);
    if (!resourceMatches) throw new Error('No resources found');

    return resourceMatches.map(match => {
      return {
        term: match.match(/term:\s*'([^']+)'/)?.[1] || 'Unknown Term',
        definition: match.match(/definition:\s*'([^']+)'/)?.[1] || 'No definition available',
        link: match.match(/link:\s*'([^']+)'/)?.[1] || '',
        startLine: parseInt(match.match(/startLine:\s*(\d+)/)?.[1], 10) || 0,
        endLine: parseInt(match.match(/endLine:\s*(\d+)/)?.[1], 10) || 0
      };
    });
  } catch (error) {
    console.error('❌ Error extracting resources:', error.message);
    return [];
  }
}

// Function to get last updated date using git log
function getLastUpdated(filePath, startLine, endLine) {
  try {
    const command = `git log -1 --format="%cr" -L ${startLine},${endLine}:${filePath}`;
    const output = execSync(command).toString().trim();

    // Only return the first line (date)
    const firstLine = output.split("\n")[0]; 

    return firstLine || "Unknown";
  } catch (error) {
    console.error(`❌ Error getting last updated for ${filePath} (${startLine}-${endLine}):`, error.message);
    return "Unknown";
  }
}

// Generate `contentBundle.json`
function generateContentBundle() {
  const resources = extractResources();
  if (!resources.length) return console.error('❌ No resources found. Skipping content bundle generation.');

  const contentBundle = {
    Resources: resources.map(resource => ({
      term: resource.term,
      definition: resource.definition,
      link: resource.link,
      updated: getLastUpdated(filePath, resource.startLine, resource.endLine)
    }))
  };

  fs.writeFileSync(contentBundlePath, JSON.stringify(contentBundle, null, 2));
  console.log(`✅ Successfully generated ${contentBundlePath}`);
}

// Run script
generateContentBundle();