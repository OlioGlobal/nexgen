import { execSync } from "child_process";
import { createRequire } from "module";
import { statSync } from "fs";

const require = createRequire(import.meta.url);
const ffmpegPath = require("ffmpeg-static");

const input = "public/video/hero.mp4";
const output = "public/video/hero-compressed.mp4";

console.log("Compressing video...");
console.log(`Input: ${input} (${(statSync(input).size / 1024 / 1024).toFixed(2)} MB)`);

execSync(
  `"${ffmpegPath}" -i ${input} -vcodec libx264 -crf 28 -preset slow -vf "scale=1920:-2" -an -movflags +faststart -y ${output}`,
  { stdio: "inherit" }
);

const outputSize = statSync(output).size;
console.log(`\nOutput: ${output} (${(outputSize / 1024 / 1024).toFixed(2)} MB)`);
console.log("Done! Video compressed with no audio, 1920px width, CRF 28.");
