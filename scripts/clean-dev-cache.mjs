import fs from "fs";
import path from "path";

const roots = [
  path.join(process.cwd(), ".next"),
  path.join(process.cwd(), "node_modules", ".cache", "next"),
];

for (const dir of roots) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
