// Makes the raster exports the page uses, from the synced PNG masters in public/brand/png.
// Only resizes and re-encodes: the drawings themselves are never touched.
import { mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public/brand/png");
const out = join(root, "public/brand/derived");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const jobs = [
  // Hero dot: shown at up to ~640 CSS px. 480 covers 1x phones; 1000 (the master size) covers the rest.
  ...[480, 1000].flatMap((w) => [
    { from: "dersion-dot-1000.png", to: `dot-${w}.avif`, width: w },
    { from: "dersion-dot-1000.png", to: `dot-${w}.webp`, width: w },
  ]),
  // The marked step in the demo and the filled answer-sheet circle (<= 56 CSS px).
  { from: "dersion-dot-small-1000.png", to: "dot-small-160.webp", width: 160 },
  // Hero wordmark (~150 CSS px) and footer horizontal logo (~170 CSS px), at 2x.
  { from: "dersion-wordmark-light.png", to: "wordmark-light-320.webp", width: 320 },
  { from: "dersion-wordmark-dark.png", to: "wordmark-dark-320.webp", width: 320 },
  { from: "dersion-logo-horizontal-light.png", to: "logo-horizontal-light-360.webp", width: 360 },
  { from: "dersion-logo-horizontal-dark.png", to: "logo-horizontal-dark-360.webp", width: 360 },
];

for (const job of jobs) {
  const img = sharp(join(src, job.from)).resize({ width: job.width });
  const encoded = job.to.endsWith(".avif")
    ? img.avif({ quality: 60, effort: 7 })
    : img.webp({ quality: 85, alphaQuality: 100, effort: 6 });
  const info = await encoded.toFile(join(out, job.to));
  console.log(`${job.to.padEnd(34)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
}
