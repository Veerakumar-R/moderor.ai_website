import fs from "node:fs";
import path from "node:path";

const srcDir = path.resolve("src/components/sat");
const dstDir = path.resolve("src/components/ra");

function transform(content) {
  return content
    .replaceAll("smartAlertTriage", "riskAssessment")
    .replaceAll("Smart Alert Triage", "Risk Assessment")
    .replaceAll("SatGovernanceVisual", "RaGovernanceVisual")
    .replaceAll("SatSpotlightSilk", "RaSpotlightSilk")
    .replaceAll("SatHeroBento", "RaHeroBento")
    .replaceAll("SatHeroKpiStrip", "RaHeroKpiStrip")
    .replaceAll("SatHeroVisual", "RaHeroVisual")
    .replaceAll("SatBusinessChallenge", "RaBusinessChallenge")
    .replaceAll("SatSolutionPositioning", "RaSolutionPositioning")
    .replaceAll("SatBusinessOutcomes", "RaBusinessOutcomes")
    .replaceAll("SatCapabilities", "RaCapabilities")
    .replaceAll("SatStakeholders", "RaStakeholders")
    .replaceAll("SatOutcomes", "RaOutcomes")
    .replaceAll("SatIntegrations", "RaIntegrations")
    .replaceAll("SatPrinciple", "RaPrinciple")
    .replaceAll("SatFinalCTA", "RaFinalCTA")
    .replaceAll("SatHero", "RaHero")
    .replaceAll("SatIcon", "RaIcon")
    .replaceAll("satIcons", "raIcons")
    .replaceAll("satHero", "raHero")
    .replaceAll("satChallenge", "raChallenge")
    .replaceAll("satSolution", "raSolution")
    .replaceAll("satCapabilities", "raCapabilities")
    .replaceAll("satStakeholders", "raStakeholders")
    .replaceAll("satOutcomes", "raOutcomes")
    .replaceAll("satIntegrations", "raIntegrations")
    .replaceAll("satPrinciple", "raPrinciple")
    .replaceAll("satFinalCta", "raFinalCta")
    .replaceAll("satRoute", "raRoute")
    .replaceAll("satBreadcrumb", "raBreadcrumb")
    .replaceAll("sat.css", "ra.css")
    .replaceAll("sat-", "ra-")
    .replaceAll("#sat-", "#ra-")
    .replaceAll('id="sat-', 'id="ra-')
    .replaceAll('aria-labelledby="sat-', 'aria-labelledby="ra-')
    .replaceAll("platfra", "platform");
}

if (fs.existsSync(dstDir)) fs.rmSync(dstDir, { recursive: true, force: true });
fs.mkdirSync(dstDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  const srcPath = path.join(srcDir, file);
  if (!fs.statSync(srcPath).isFile()) continue;

  const outName = file.replace(/^Sat/, "Ra").replace(/^sat\.css$/, "ra.css");
  const content = transform(fs.readFileSync(srcPath, "utf8"));
  fs.writeFileSync(path.join(dstDir, outName), content);
}

console.log(fs.readdirSync(dstDir).join("\n"));
