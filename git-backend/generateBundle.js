const fs = require('fs');
const execSync = require('child_process').execSync;
const path = require('path');
const crypto = require('crypto');
const filePath = 'src/app/Resources/resources.component.ts'; // The file being tracked
const contentBundlePath = path.join(__dirname, 'contentBundle.json');
const fallbackBundlePath = path.join(__dirname, '../src/assets/contentBundle/contentBundle.json');


// ✅ Ensure directory exists before writing
const ensureDirectoryExistence = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// ✅ Generate file hash for comparison
const getFileHash = (filePath) => {
  if (!fs.existsSync(filePath)) return null;
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
};


// ✅ Extract resources from resources.component.ts
function extractResources() {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Match objects inside `this.resources = [...]`
    const resourceMatches = fileContent.match(/\{([^}]+term[^}]+)\}/g);
    if (!resourceMatches) throw new Error('No resources found');

    return resourceMatches.map(match => {
      return {
        term: match.match(/term:\s*['"]([^'"]+)['"]/)?.[1] || 'Unknown Term',
        definition: match.match(/definition:\s*['"]([^'"]+)['"]/)?.[1] || 'No definition available',
        link: match.match(/link:\s*['"]([^'"]+)['"]/)?.[1] || '',
        startLine: parseInt(match.match(/startLine:\s*(\d+)/)?.[1], 10) || 0,
        endLine: parseInt(match.match(/endLine:\s*(\d+)/)?.[1], 10) || 0
      };
    });
}

// ✅ Get last updated date using Git log
function getLastUpdated(filePath, startLine, endLine) {
  try {
    const command = `git log -1 --format="%cd" -L ${startLine},${endLine}:${filePath}`;
    const output = execSync(command).toString().trim();

    // Only return the first line (date)
    const firstLine = output.split("\n")[0];

    return firstLine || "Unknown";
  } catch (error) {
    console.error(`❌ Error getting last updated for ${filePath} (${startLine}-${endLine}):`, error.message);
    return "Unknown";
  }
}

// ✅ Generate `contentBundle.json` in both paths with change detection
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
   // ✅ Compare file hashes before writing
   const resourceBundle = JSON.stringify(contentBundle, null, 2);
   const previousHash = getFileHash(contentBundlePath);
   const newHash = crypto.createHash('sha256').update(resourceBundle).digest('hex');

   if (previousHash === newHash) {
     console.log('⚡ No changes detected. Skipping write.');
     process.exit(0); // Exit without error
   }

   // ✅  Generate both Bundles
   ensureDirectoryExistence(contentBundlePath);
  fs.writeFileSync(contentBundlePath, resourceBundle);
  console.log(`✅ Successfully generated ${contentBundlePath}`);

  ensureDirectoryExistence(fallbackBundlePath);
  fs.writeFileSync(fallbackBundlePath, resourceBundle);
  console.log(`✅ Successfully generated ${fallbackBundlePath}`);

  console.log("✨ New contentBundle.json created! Don't forget to commit it. 🚀")

}

// 🚀 Run script
generateContentBundle();