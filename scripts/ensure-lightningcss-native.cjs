/**
 * Next dev PostCSS may not resolve lightningcss's optional platform package.
 * lightningcss/node/index.js falls back to ../lightningcss.<platform>.node — copy
 * from the optional dependency when that file is missing (slug matches lightningcss).
 */
const fs = require("fs");
const path = require("path");

function lightningSlug() {
  const parts = [process.platform, process.arch];
  if (process.platform === "linux") {
    try {
      const { MUSL, familySync } = require("detect-libc");
      const family = familySync();
      if (family === MUSL) {
        parts.push("musl");
      } else if (process.arch === "arm") {
        parts.push("gnueabihf");
      } else {
        parts.push("gnu");
      }
    } catch {
      parts.push("gnu");
    }
  } else if (process.platform === "win32") {
    parts.push("msvc");
  }
  return parts.join("-");
}

const root = path.join(__dirname, "..");
const slug = lightningSlug();
const optionalName = `lightningcss-${slug}`;
const nodeFile = `lightningcss.${slug}.node`;
const src = path.join(root, "node_modules", optionalName, nodeFile);
const destDir = path.join(root, "node_modules", "lightningcss");
const dest = path.join(destDir, nodeFile);

if (!fs.existsSync(src) || !fs.existsSync(destDir)) {
  process.exit(0);
}
if (!fs.existsSync(dest)) {
  fs.copyFileSync(src, dest);
}
