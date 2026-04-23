/**
 * If `documents/1.png` exists, copy it to the public event image used on the home page.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "documents", "1.png");
const destDir = path.join(root, "public", "images", "event");
const dest = path.join(destDir, "eventbrite-2026.png");

if (!fs.existsSync(src)) {
  process.exit(0);
}
fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
