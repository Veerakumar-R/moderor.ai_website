import fs from "fs";
import path from "path";

const roots = [
  path.join(process.cwd(), ".next"),
  path.join(process.cwd(), "node_modules", ".cache", "next"),
  path.join(process.cwd(), "node_modules", ".cache", "moderor-next"),
];

function rmWithRetry(target, attempts = 5) {
  if (!fs.existsSync(target)) return;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      fs.rmSync(target, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
      return;
    } catch (error) {
      if (attempt === attempts) throw error;
    }
  }
}

for (const dir of roots) {
  rmWithRetry(dir);
}

console.log("Cleared Next.js dev cache.");
