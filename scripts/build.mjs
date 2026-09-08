import { cp, copyFile, mkdir, rm, stat } from "node:fs/promises";
import { basename, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(projectRoot, "public");
const staticFiles = [
  "index.html",
  "code.html",
  "favicon.svg",
  "screen.png",
  "hero-anh-giao.png",
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of staticFiles) {
  const source = resolve(projectRoot, file);
  await stat(source);
  await copyFile(source, resolve(outputDirectory, basename(file)));
}

console.log(`Static build complete: ${staticFiles.length} files copied to public/`);

await cp(resolve(projectRoot, "assets"), resolve(outputDirectory, "assets"), { recursive: true });
