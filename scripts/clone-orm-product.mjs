import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src", "components", "orm");

const targets = [
  {
    folder: "hr-compliance",
    prefix: "Hr",
    slug: "hr",
    contentModule: "hrCompliance",
    idPrefix: "hr",
  },
  {
    folder: "omni-connect",
    prefix: "Omni",
    slug: "omni",
    contentModule: "omniConnect",
    idPrefix: "omni",
  },
];

function transform(content, { prefix, slug, contentModule, idPrefix }) {
  return content
    .replaceAll("@/content/operationalRiskManagement", `@/content/${contentModule}`)
    .replaceAll("./orm.css", `./${slug}.css`)
    .replaceAll("orm.css", `${slug}.css`)
    .replaceAll("OrmIcon", `${prefix}Icon`)
    .replaceAll("ormIcons", `${slug}Icons`)
    .replaceAll(/Orm([A-Z][a-zA-Z]+)/g, `${prefix}$1`)
    .replaceAll(/orm([A-Z][a-zA-Z]+)/g, `${slug}$1`)
    .replaceAll(/#orm-/g, `#${idPrefix}-`)
    .replaceAll(/id="orm-/g, `id="${idPrefix}-`)
    .replaceAll(/aria-labelledby="orm-/g, `aria-labelledby="${idPrefix}-`)
    .replaceAll(".orm-", `.${slug}-`)
    .replaceAll("orm-", `${idPrefix}-`)
    .replaceAll("orm.", `${slug}.`);
}

for (const target of targets) {
  const destDir = path.join(root, "src", "components", target.folder);
  fs.mkdirSync(destDir, { recursive: true });

  for (const file of fs.readdirSync(srcDir)) {
    const srcPath = path.join(srcDir, file);
    if (!fs.statSync(srcPath).isFile()) continue;

    let destName = file
      .replace(/^Orm/, target.prefix)
      .replace(/^orm/, target.slug);

    const content = fs.readFileSync(srcPath, "utf8");
    const out = transform(content, target);
    fs.writeFileSync(path.join(destDir, destName), out);
  }
}

console.log("Cloned ORM components to hr-compliance and omni-connect");
