import fs from "node:fs";
import path from "node:path";

const srcDir = path.resolve("src/components/sat");
const dstDir = path.resolve("src/components/ccm");

function transform(content) {
  return content
    .replaceAll("smartAlertTriage", "continuousComplianceMonitoring")
    .replaceAll("Smart Alert Triage", "Continuous Compliance Monitoring")
    .replaceAll("SatGovernanceVisual", "CcmGovernanceVisual")
    .replaceAll("SatSpotlightSilk", "CcmSpotlightSilk")
    .replaceAll("SatHeroBento", "CcmHeroBento")
    .replaceAll("SatHeroKpiStrip", "CcmHeroKpiStrip")
    .replaceAll("SatHeroVisual", "CcmHeroVisual")
    .replaceAll("SatBusinessChallenge", "CcmBusinessChallenge")
    .replaceAll("SatSolutionPositioning", "CcmSolutionPositioning")
    .replaceAll("SatBusinessOutcomes", "CcmBusinessOutcomes")
    .replaceAll("SatCapabilities", "CcmCapabilities")
    .replaceAll("SatStakeholders", "CcmStakeholders")
    .replaceAll("SatOutcomes", "CcmOutcomes")
    .replaceAll("SatIntegrations", "CcmIntegrations")
    .replaceAll("SatPrinciple", "CcmPrinciple")
    .replaceAll("SatFinalCTA", "CcmFinalCTA")
    .replaceAll("SatHero", "CcmHero")
    .replaceAll("SatIcon", "CcmIcon")
    .replaceAll("satIcons", "ccmIcons")
    .replaceAll("satHero", "ccmHero")
    .replaceAll("satChallenge", "ccmChallenge")
    .replaceAll("satSolution", "ccmSolution")
    .replaceAll("satCapabilities", "ccmCapabilities")
    .replaceAll("satStakeholders", "ccmStakeholders")
    .replaceAll("satOutcomes", "ccmOutcomes")
    .replaceAll("satIntegrations", "ccmIntegrations")
    .replaceAll("satPrinciple", "ccmPrinciple")
    .replaceAll("satFinalCta", "ccmFinalCta")
    .replaceAll("satRoute", "ccmRoute")
    .replaceAll("satBreadcrumb", "ccmBreadcrumb")
    .replaceAll("sat.css", "ccm.css")
    .replaceAll("sat-", "ccm-")
    .replaceAll("#sat-", "#ccm-")
    .replaceAll('id="sat-', 'id="ccm-')
    .replaceAll('aria-labelledby="sat-', 'aria-labelledby="ccm-')
    .replaceAll("platfccm", "platform");
}

if (fs.existsSync(dstDir)) fs.rmSync(dstDir, { recursive: true, force: true });
fs.mkdirSync(dstDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  const srcPath = path.join(srcDir, file);
  if (!fs.statSync(srcPath).isFile()) continue;

  const outName = file.replace(/^Sat/, "Ccm").replace(/^sat\.css$/, "ccm.css");
  const content = transform(fs.readFileSync(srcPath, "utf8"));
  fs.writeFileSync(path.join(dstDir, outName), content);
}

console.log(fs.readdirSync(dstDir).join("\n"));
