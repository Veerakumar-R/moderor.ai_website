import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CiqHero } from "@/components/ciq/CiqHero";
import { CiqBusinessChallenge } from "@/components/ciq/CiqBusinessChallenge";
import { CiqSolutionPositioning } from "@/components/ciq/CiqSolutionPositioning";
import { CiqBusinessOutcomes } from "@/components/ciq/CiqBusinessOutcomes";
import { CiqCapabilities } from "@/components/ciq/CiqCapabilities";
import { CiqStakeholders } from "@/components/ciq/CiqStakeholders";
import { CiqOutcomes } from "@/components/ciq/CiqOutcomes";
import { CiqIntegrations } from "@/components/ciq/CiqIntegrations";
import { CiqPrinciple } from "@/components/ciq/CiqPrinciple";
import { CiqFinalCTA } from "@/components/ciq/CiqFinalCTA";

export const metadata: Metadata = {
  title: "Compliance IQ — AI-Powered IT Governance | moderor.ai",
  description:
    "Govern IT controls, automate assessments, collect evidence, and maintain continuous visibility across every application, framework, and compliance requirement. Part of the moderor.ai GRC Suite.",
  openGraph: {
    title: "Compliance IQ — AI-Powered IT Governance | moderor.ai",
    description:
      "AI-powered IT governance for modern enterprises — application-centric compliance workspaces, automated evidence collection, and continuous audit readiness.",
    url: "https://moderor.ai/products/compliance-iq",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function ComplianceIQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <CiqHero />
        <CiqBusinessChallenge />
        <CiqSolutionPositioning />
        <CiqBusinessOutcomes />
        <CiqCapabilities />
        <CiqStakeholders />
        <CiqOutcomes />
        <CiqIntegrations />
        <CiqPrinciple />
        <CiqFinalCTA />
      </main>
    </>
  );
}
