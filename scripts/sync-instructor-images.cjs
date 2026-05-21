/**
 * Scan `public/images/mix/` and write `data/instructor-images-manifest.json`.
 * Edit `data/instructor-images-meta.json` for names, bios, Instagram, and display order.
 * Then run: npm run instructors:sync
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const mixDir = path.join(root, "public", "images", "mix");
const manifestPath = path.join(root, "data", "instructor-images-manifest.json");
const metaPath = path.join(root, "data", "instructor-images-meta.json");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function loadMetaFile() {
  if (!fs.existsSync(metaPath)) {
    return { order: [], instructors: {} };
  }
  try {
    const raw = JSON.parse(fs.readFileSync(metaPath, "utf8"));
    if (raw.instructors && typeof raw.instructors === "object") {
      return {
        order: Array.isArray(raw.order) ? raw.order : [],
        instructors: raw.instructors,
      };
    }
    return { order: [], instructors: raw };
  } catch {
    return { order: [], instructors: {} };
  }
}

function sortFiles(files, order) {
  if (!order.length) {
    return [...files].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" }),
    );
  }
  const rank = new Map(order.map((name, index) => [name, index]));
  return [...files].sort((a, b) => {
    const ra = rank.has(a) ? rank.get(a) : 999;
    const rb = rank.has(b) ? rank.get(b) : 999;
    if (ra !== rb) return ra - rb;
    return a.localeCompare(b, undefined, { sensitivity: "base" });
  });
}

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

  const { order, instructors } = loadMetaFile();

  const files = sortFiles(
    fs
      .readdirSync(mixDir)
      .filter((name) => {
        if (name.startsWith(".")) return false;
        return IMAGE_EXT.has(path.extname(name).toLowerCase());
      }),
    order,
  );

  /** @type {Record<string, unknown>[]} */
  const manifest = [];

  for (const file of files) {
    const filePath = path.join(mixDir, file);
    const imageMeta = await sharp(filePath).rotate().metadata();
    const width = imageMeta.width ?? 1200;
    const height = imageMeta.height ?? 1600;
    const label = path.basename(file, path.extname(file));
    const entry = { file, width, height, label };
    const extra = instructors[file];
    if (extra && typeof extra === "object") {
      if (extra.name) entry.name = extra.name;
      if (extra.instagram) entry.instagram = extra.instagram;
      if (extra.social) entry.social = extra.social;
      if (extra.socialLabel) entry.socialLabel = extra.socialLabel;
      if (extra.greeting) entry.greeting = extra.greeting;
      if (Array.isArray(extra.bio)) entry.bio = extra.bio;
    }
    manifest.push(entry);
  }

  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`[instructors:sync] Wrote ${manifest.length} instructor(s) to data/instructor-images-manifest.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
