/**
 * Build sharp WebP files for the home page "Event highlights" masonry.
 *
 * Default source (override with EVENT_HIGHLIGHTS_SRC=/path/to/folder):
 *   .cursor/projects/.../assets relative to repo is not portable — copy PNGs into
 *   `event-highlights-source/` at repo root, then run:
 *     npm run event-highlights:optimize
 *
 * Uses higher quality than gallery (default 86) and max dimension 2000px for clarity.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images", "event-highlights");
const manifestPath = path.join(root, "data", "event-highlights-manifest.json");

/** Basenames in display order (must exist in source folder). */
const SOURCE_FILES = [
  "DSC05482-50691552-4ff9-4d5e-a580-233c84272f55.png",
  "DSC05426-8cbe47f9-ac6d-48ed-9b99-9c389f8afd9a.png",
  "DSC05557-4f213e48-96b9-46c9-9e2e-2695640957e9.png",
  "DSC05405-13e1ad80-514d-4730-aa19-8d9d191a3213.png",
  "DSC05399-7400c142-ac0c-4626-b98b-3ee1f7a77074.png",
  "DSC05550_1-2795af0e-06f4-45e3-9abb-72c01524fe41.png",
  "DSC05495-0d6d9a31-2451-4432-b3f3-44de4fc3be33.png",
  "20250621_145538-8ea7c4cc-583f-4fb7-926c-3919d804f165.png",
  "20250621_113222-1304ee36-21fc-42d4-9a80-ef0bcfe0adf2.png",
  "20250621_104845-70f7e6cf-62bc-449a-98cd-24786fd153f0.png",
];

const QUALITY = Number(process.env.EVENT_HIGHLIGHTS_QUALITY || 86);
const MAX_EDGE = Number(process.env.EVENT_HIGHLIGHTS_MAX || 2000);

function resolveSourceDir() {
  if (process.env.EVENT_HIGHLIGHTS_SRC) {
    return path.resolve(process.env.EVENT_HIGHLIGHTS_SRC);
  }
  return path.join(root, "event-highlights-source");
}

async function main() {
  const sourceDir = resolveSourceDir();
  if (!fs.existsSync(sourceDir)) {
    console.error(
      `[event-highlights] Missing source folder:\n  ${sourceDir}\n` +
        `Create it and copy the PNGs listed in SOURCE_FILES, or set EVENT_HIGHLIGHTS_SRC.`,
    );
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });
  for (const f of fs.readdirSync(outDir)) {
    if (f.endsWith(".webp")) fs.unlinkSync(path.join(outDir, f));
  }

  /** @type {{ file: string; width: number; height: number }[]} */
  const manifest = [];

  let index = 0;
  for (const name of SOURCE_FILES) {
    const inPath = path.join(sourceDir, name);
    if (!fs.existsSync(inPath)) {
      console.warn(`[event-highlights] Skip (missing): ${name}`);
      continue;
    }
    index += 1;
    const outName = `highlight-${String(index).padStart(2, "0")}.webp`;
    const outPath = path.join(outDir, outName);

    const { data, info } = await sharp(inPath)
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY, effort: 5 })
      .toBuffer({ resolveWithObject: true });

    await fs.promises.writeFile(outPath, data);
    manifest.push({
      file: outName,
      width: info.width,
      height: info.height,
    });
    console.log(`[event-highlights] ${name} → public/images/event-highlights/${outName}`);
  }

  if (manifest.length === 0) {
    console.error("[event-highlights] No images produced.");
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`[event-highlights] Wrote ${path.relative(root, manifestPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
