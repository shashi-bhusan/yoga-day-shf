/**
 * Compress gallery originals into lightweight WebP files.
 *
 * Defaults to sibling folder `../scotland-yoga-day/2024` and `../scotland-yoga-day/2025` when present,
 * else `gallery-source/2024` and `gallery-source/2025` under this repo.
 *
 * Override: GALLERY_ORIGINALS_ROOT=/path/to/parent npm run gallery:optimize
 *
 * Then run: npm run gallery:optimize
 *
 * Outputs to public/images/gallery/{year}/*.webp and updates data/gallery-manifest.json
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outRoot = path.join(root, "public", "images", "gallery");
const manifestPath = path.join(root, "data", "gallery-manifest.json");

const YEARS = ["2024", "2025"];
const reImage = /\.(jpe?g|png|webp|heic)$/i;

function resolveSourceRoot() {
  if (process.env.GALLERY_ORIGINALS_ROOT) {
    return path.resolve(process.env.GALLERY_ORIGINALS_ROOT);
  }
  const sibling = path.join(root, "..", "scotland-yoga-day");
  if (
    fs.existsSync(path.join(sibling, "2024")) ||
    fs.existsSync(path.join(sibling, "2025"))
  ) {
    return sibling;
  }
  return path.join(root, "gallery-source");
}

function safeBaseName(file) {
  return path
    .basename(file, path.extname(file))
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "")
    .toLowerCase() || "photo";
}

async function main() {
  const sourceRoot = resolveSourceRoot();
  console.log(`[gallery] Reading originals from: ${sourceRoot}`);

  /** @type {Record<string, { file: string; width: number; height: number }[]>} */
  const manifest = { "2024": [], "2025": [] };

  for (const year of YEARS) {
    const inDir = path.join(sourceRoot, year);
    const outDir = path.join(outRoot, year);

    if (!fs.existsSync(inDir)) {
      console.warn(`[gallery] Skip ${year}: missing folder ${inDir}`);
      continue;
    }

    fs.mkdirSync(outDir, { recursive: true });
    for (const f of fs.readdirSync(outDir)) {
      if (f.endsWith(".webp")) {
        fs.unlinkSync(path.join(outDir, f));
      }
    }

    const files = fs
      .readdirSync(inDir)
      .filter((f) => reImage.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

    if (files.length === 0) {
      console.warn(`[gallery] No images in ${inDir}`);
      continue;
    }

    for (const file of files) {
      const base = safeBaseName(file);
      const outName = `${base}.webp`;
      const inPath = path.join(inDir, file);
      const outPath = path.join(outDir, outName);

      try {
        const { data, info } = await sharp(inPath)
          .rotate()
          .resize({
            width: 1600,
            height: 1600,
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({ quality: 78, effort: 4 })
          .toBuffer({ resolveWithObject: true });

        await fs.promises.writeFile(outPath, data);
        manifest[year].push({
          file: outName,
          width: info.width,
          height: info.height,
        });
      } catch (err) {
        console.warn(`[gallery] Skip ${file}: ${err.message || err}`);
        continue;
      }
      console.log(`[gallery] ${year}: ${file} → ${path.relative(root, outPath)}`);
    }
  }

  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`[gallery] Wrote ${path.relative(root, manifestPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
