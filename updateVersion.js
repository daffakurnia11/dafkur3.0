const fs = require("fs");
const semver = require("semver");

// Read the current version from version.json
const versionFilePath = "./version.json";
const versionData = JSON.parse(fs.readFileSync(versionFilePath, "utf-8"));
const currentVersion = versionData.version;

// Increment the patch version
const newVersion = semver.inc(currentVersion, "patch");

// Update the version.json file with the new version
versionData.version = newVersion;
fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));
console.log(`Version updated to: ${newVersion}`);
