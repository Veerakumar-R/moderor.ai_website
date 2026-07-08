import fs from "node:fs";
import path from "node:path";

const srcDir = path.resolve("src/components/sat");
const dstDir = path.resolve("src/components/ciq");

function transform(content) {
  return content
    .replaceAll("smartAlertTriage", "complianceIQ")
    .replaceAll("Smart Alert Triage", "Compliance IQ")
    .replaceAll("SatGovernanceVisual", "CiqGovernanceVisual")
    .replaceAll("SatSpotlightSilk", "CiqSpotlightSilk")
    .replaceAll("SatHeroBento", "CiqHeroBento")
    .replaceAll("SatHeroKpiStrip", "CiqHeroKpiStrip")
    .replaceAll("SatHeroVisual", "CiqHeroVisual")
    .replaceAll("SatBusinessChallenge", "CiqBusinessChallenge")
    .replaceAll("SatSolutionPositioning", "CiqSolutionPositioning")
    .replaceAll("SatBusinessOutcomes", "CiqBusinessOutcomes")
    .replaceAll("SatCapabilities", "CiqCapabilities")
    .replaceAll("SatStakeholders", "CiqStakeholders")
    .replaceAll("SatOutcomes", "CiqOutcomes")
    .replaceAll("SatIntegrations", "CiqIntegrations")
    .replaceAll("SatPrinciple", "CiqPrinciple")
    .replaceAll("SatFinalCTA", "CiqFinalCTA")
    .replaceAll("SatHero", "CiqHero")
    .replaceAll("SatIcon", "CiqIcon")
    .replaceAll("satIcons", "ciqIcons")
    .replaceAll("satHero", "ciqHero")
    .replaceAll("satChallenge", "ciqChallenge")
    .replaceAll("satSolution", "ciqSolution")
    .replaceAll("satCapabilities", "ciqCapabilities")
    .replaceAll("satStakeholders", "ciqStakeholders")
    .replaceAll("satOutcomes", "ciqOutcomes")
    .replaceAll("satIntegrations", "ciqIntegrations")
    .replaceAll("satPrinciple", "ciqPrinciple")
    .replaceAll("satFinalCta", "ciqFinalCta")
    .replaceAll("satRoute", "ciqRoute")
    .replaceAll("satBreadcrumb", "ciqBreadcrumb")
    .replaceAll("sat.css", "ciq.css")
    .replaceAll("sat-", "ciq-")
    .replaceAll("#sat-", "#ciq-")
    .replaceAll('id="sat-', 'id="ciq-')
    .replaceAll('aria-labelledby="sat-', 'aria-labelledby="ciq-')
    .replaceAll("platfciq", "platform");
}

if (fs.existsSync(dstDir)) fs.rmSync(dstDir, { recursive: true, force: true });
fs.mkdirSync(dstDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  const srcPath = path.join(srcDir, file);
  if (!fs.statSync(srcPath).isFile()) continue;

  const outName = file.replace(/^Sat/, "Ciq").replace(/^sat\.css$/, "ciq.css");
  const content = transform(fs.readFileSync(srcPath, "utf8"));
  fs.writeFileSync(path.join(dstDir, outName), content);
}

console.log(fs.readdirSync(dstDir).join("\n"));
