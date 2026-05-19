/**
 * Scan `public/images/mix/` and write `data/instructor-images-manifest.json`.
 * Drop JPG/PNG/WebP files in the mix folder, then run: npm run instructors:sync
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const mixDir = path.join(root, "public", "images", "mix");
const manifestPath = path.join(root, "data", "instructor-images-manifest.json");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

async function main() {
  if (!fs.existsSync(mixDir)) {
    fs.mkdirSync(mixDir, { recursive: true });
    fs.writeFileSync(manifestPath, "[]\n");
    console.log("[instructors:sync] Created empty mix folder — add images and run again.");
    return;
  }

  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.error("[instructors:sync] sharp is required. Run: npm install");
    process.exit(1);
  }

  const files = fs
    .readdirSync(mixDir)
    .filter((name) => {
      if (name.startsWith(".")) return false;
      return IMAGE_EXT.has(path.extname(name).toLowerCase());
    })
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

  /** @type {{ file: string; width: number; height: number; label: string }[]} */
  const manifest = [];

  for (const file of files) {
    const filePath = path.join(mixDir, file);
    const meta = await sharp(filePath).rotate().metadata();
    const width = meta.width ?? 1200;
    const height = meta.height ?? 1600;
    const label = path.basename(file, path.extname(file));
    manifest.push({ file, width, height, label });
  }

  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`[instructors:sync] Wrote ${manifest.length} image(s) to data/instructor-images-manifest.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
