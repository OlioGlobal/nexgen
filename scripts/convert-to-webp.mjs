import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const PUBLIC_DIR = "public";
const QUALITY = 80; // 80 is a good balance of quality vs size

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if ([".png", ".jpg", ".jpeg"].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function convert() {
  const files = await getFiles(PUBLIC_DIR);
  console.log(`Found ${files.length} images to convert\n`);

  let totalSaved = 0;

  for (const file of files) {
    const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp");
    const original = await stat(file);

    await sharp(file).webp({ quality: QUALITY }).toFile(webpPath);

    const converted = await stat(webpPath);
    const saved = original.size - converted.size;
    const pct = ((saved / original.size) * 100).toFixed(1);
    totalSaved += saved;

    console.log(
      `${basename(file)} → ${basename(webpPath)}  (${(original.size / 1024).toFixed(0)}KB → ${(converted.size / 1024).toFixed(0)}KB, -${pct}%)`
    );
  }

  console.log(
    `\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`
  );
}

convert().catch(console.error);
