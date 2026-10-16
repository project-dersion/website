// Copies the brand repo's tokens and logo files into the site.
// The copies are committed and never edited here: change ../brand, then re-run this.
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const brand = resolve(root, process.env.BRAND_DIR ?? "../brand");

if (!existsSync(join(brand, "tokens/tokens.css"))) {
  console.error(`Brand repo not found at ${brand}. Set BRAND_DIR or clone it next to this repo.`);
  process.exit(1);
}

function copyDir(from, to) {
  rmSync(to, { recursive: true, force: true });
  mkdirSync(to, { recursive: true });
  const files = readdirSync(from).filter((f) => !f.startsWith("."));
  for (const f of files) copyFileSync(join(from, f), join(to, f));
  return files.length;
}

mkdirSync(join(root, "src/brand"), { recursive: true });
copyFileSync(join(brand, "tokens/tokens.css"), join(root, "src/brand/tokens.css"));
const svg = copyDir(join(brand, "assets/logo/svg"), join(root, "public/brand/svg"));
const png = copyDir(join(brand, "assets/logo/png"), join(root, "public/brand/png"));
// Browsers ask for /favicon.ico on their own, so the brand favicon also sits at the root.
copyFileSync(join(brand, "assets/logo/png/favicon.ico"), join(root, "public/favicon.ico"));

let commit = "unknown";
try {
  commit = execFileSync("git", ["-C", brand, "rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
} catch {}
writeFileSync(
  join(root, "src/brand/SOURCE.md"),
  `Copied from the brand repo at commit ${commit} by \`npm run sync:brand\`. Do not edit files here.\n`,
);

console.log(`Synced tokens.css, ${svg} SVG and ${png} PNG files from brand@${commit}.`);
