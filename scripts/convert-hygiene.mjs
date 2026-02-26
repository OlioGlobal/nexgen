import sharp from "sharp";
import fs from "fs";
import path from "path";

async function convert(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await convert(full);
      continue;
    }
    if (!/\.(png|jpg|jpeg)$/i.test(e.name)) continue;
    const out = full.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    if (fs.existsSync(out)) continue;
    const orig = fs.statSync(full).size;
    await sharp(full).webp({ quality: 80 }).toFile(out);
    const newSz = fs.statSync(out).size;
    console.log(
      `${e.name} → webp  (${Math.round(orig / 1024)}KB → ${Math.round(newSz / 1024)}KB)`
    );
  }
}

convert("public/product/hygine").then(() => console.log("Done!"));
