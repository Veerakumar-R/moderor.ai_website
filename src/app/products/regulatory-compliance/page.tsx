import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { RegulatoryHero } from "@/components/regulatory/RegulatoryHero";
import { RegulatoryBusinessChallenge } from "@/components/regulatory/RegulatoryBusinessChallenge";
import { RegulatorySolutionPositioning } from "@/components/regulatory/RegulatorySolutionPositioning";
import { RegulatoryBusinessOutcomes } from "@/components/regulatory/RegulatoryBusinessOutcomes";
import { RegulatoryIntegrations } from "@/components/regulatory/RegulatoryIntegrations";
import { RegulatoryCapabilities } from "@/components/regulatory/RegulatoryCapabilities";
import { RegulatoryStakeholders } from "@/components/regulatory/RegulatoryStakeholders";
import { RegulatoryPrinciple } from "@/components/regulatory/RegulatoryPrinciple";
import { RegulatoryFinalCTA } from "@/components/regulatory/RegulatoryFinalCTA";

export const metadata: Metadata = {
  title: "Regulatory Compliance — Continuous Regulatory Intelligence | moderor.ai",
  description:
    "Automatically monitor regulatory updates, transform complex regulations into actionable obligations, and maintain continuous compliance with AI-powered regulatory intelligence. Part of the moderor.ai GRC Suite.",
  openGraph: {
    title: "Regulatory Compliance — Continuous Regulatory Intelligence | moderor.ai",
    description:
      "Stay ahead of regulatory change with AI-powered monitoring, obligation management, and human-governed compliance.",
    url: "https://moderor.ai/products/regulatory-compliance",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function RegulatoryCompliancePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <RegulatoryHero />
        <RegulatoryBusinessChallenge />
        <RegulatorySolutionPositioning />
        <RegulatoryBusinessOutcomes />
        <RegulatoryCapabilities />
        <RegulatoryStakeholders />
        <RegulatoryIntegrations />
        <RegulatoryPrinciple />
        <RegulatoryFinalCTA />
      </main>
    </>
  );
}
