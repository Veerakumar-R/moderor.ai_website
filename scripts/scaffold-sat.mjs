import fs from "node:fs";
import path from "node:path";

const srcDir = path.resolve("src/components/orm");
const dstDir = path.resolve("src/components/sat");

function transform(content) {
  return content
    .replaceAll("operationalRiskManagement", "smartAlertTriage")
    .replaceAll("Operational Risk Management", "Smart Alert Triage")
    .replaceAll("OrmGovernanceVisual", "SatGovernanceVisual")
    .replaceAll("OrmSpotlightSilk", "SatSpotlightSilk")
    .replaceAll("OrmHeroBento", "SatHeroBento")
    .replaceAll("OrmHeroKpiStrip", "SatHeroKpiStrip")
    .replaceAll("OrmBusinessChallenge", "SatBusinessChallenge")
    .replaceAll("OrmSolutionPositioning", "SatSolutionPositioning")
    .replaceAll("OrmBusinessOutcomes", "SatBusinessOutcomes")
    .replaceAll("OrmCapabilities", "SatCapabilities")
    .replaceAll("OrmStakeholders", "SatStakeholders")
    .replaceAll("OrmOutcomes", "SatOutcomes")
    .replaceAll("OrmIntegrations", "SatIntegrations")
    .replaceAll("OrmPrinciple", "SatPrinciple")
    .replaceAll("OrmFinalCTA", "SatFinalCTA")
    .replaceAll("OrmHero", "SatHero")
    .replaceAll("OrmIcon", "SatIcon")
    .replaceAll("ormIcons", "satIcons")
    .replaceAll("ormHero", "satHero")
    .replaceAll("ormChallenge", "satChallenge")
    .replaceAll("ormSolution", "satSolution")
    .replaceAll("ormCapabilities", "satCapabilities")
    .replaceAll("ormStakeholders", "satStakeholders")
    .replaceAll("ormOutcomes", "satOutcomes")
    .replaceAll("ormIntegrations", "satIntegrations")
    .replaceAll("ormPrinciple", "satPrinciple")
    .replaceAll("ormFinalCta", "satFinalCta")
    .replaceAll("ormRoute", "satRoute")
    .replaceAll("ormBreadcrumb", "satBreadcrumb")
    .replaceAll("orm.css", "sat.css")
    .replaceAll("orm-", "sat-")
    .replaceAll("#orm-", "#sat-")
    .replaceAll('id="orm-', 'id="sat-')
    .replaceAll('aria-labelledby="orm-', 'aria-labelledby="sat-')
    .replaceAll("platfsat", "platform");
}

if (fs.existsSync(dstDir)) fs.rmSync(dstDir, { recursive: true, force: true });
fs.mkdirSync(dstDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  const srcPath = path.join(srcDir, file);
  if (!fs.statSync(srcPath).isFile()) continue;

  const outName = file.replace(/^Orm/, "Sat").replace(/^orm\.css$/, "sat.css");
  const content = transform(fs.readFileSync(srcPath, "utf8"));
  fs.writeFileSync(path.join(dstDir, outName), content);
}

console.log(fs.readdirSync(dstDir).join("\n"));
