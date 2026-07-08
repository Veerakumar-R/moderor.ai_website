import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const docPath = process.argv[2];
if (!docPath) {
  console.error("Usage: node scripts/extract-docx.mjs <path-to-docx>");
  process.exit(1);
}

const slug = path.basename(docPath, path.extname(docPath)).replace(/[^\w]+/g, "-");
const tmpDir = path.join(path.dirname(fileURLToPath(import.meta.url)), `.docx-tmp-${slug}`);
fs.mkdirSync(tmpDir, { recursive: true });
const zipPath = path.join(tmpDir, "doc.zip");
const extractDir = path.join(tmpDir, "extracted");

fs.copyFileSync(docPath, zipPath);
fs.rmSync(extractDir, { recursive: true, force: true });
fs.mkdirSync(extractDir, { recursive: true });

execSync(`powershell -NoProfile -Command "Expand-Archive -Path '${zipPath.replace(/'/g, "''")}' -DestinationPath '${extractDir.replace(/'/g, "''")}' -Force"`, {
  stdio: "inherit",
});

const xml = fs.readFileSync(path.join(extractDir, "word", "document.xml"), "utf8");
const paras = [];
const re = /<w:p[\s\S]*?<\/w:p>/g;
let match;
while ((match = re.exec(xml))) {
  const text = match[0]
    .replace(/<w:tab\/>/g, "\t")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
  if (text) paras.push(text);
}

console.log(paras.join("\n"));
