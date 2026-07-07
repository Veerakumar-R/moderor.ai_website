import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SatHero } from "@/components/sat/SatHero";
import { SatBusinessChallenge } from "@/components/sat/SatBusinessChallenge";
import { SatSolutionPositioning } from "@/components/sat/SatSolutionPositioning";
import { SatBusinessOutcomes } from "@/components/sat/SatBusinessOutcomes";
import { SatCapabilities } from "@/components/sat/SatCapabilities";
import { SatStakeholders } from "@/components/sat/SatStakeholders";
import { SatOutcomes } from "@/components/sat/SatOutcomes";
import { SatIntegrations } from "@/components/sat/SatIntegrations";
import { SatPrinciple } from "@/components/sat/SatPrinciple";
import { SatFinalCTA } from "@/components/sat/SatFinalCTA";

export const metadata: Metadata = {
  title: "Smart Alert Triage — AI Investigation Intelligence | moderor.ai",
  description:
    "Go beyond alert prioritization with AI that filters noise, discovers hidden fraud patterns, and transforms fragmented alerts into investigation-ready intelligence. Part of the moderor.ai GRC Suite.",
  openGraph: {
    title: "Smart Alert Triage — AI Investigation Intelligence | moderor.ai",
    description:
      "AI-powered alert triage, pattern discovery, and explainable investigation workflows for financial crime operations.",
    url: "https://moderor.ai/products/smart-alert-triage",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function SmartAlertTriagePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <SatHero />
        <SatBusinessChallenge />
        <SatSolutionPositioning />
        <SatBusinessOutcomes />
        <SatCapabilities />
        <SatStakeholders />
        <SatOutcomes />
        <SatIntegrations />
        <SatPrinciple />
        <SatFinalCTA />
      </main>
    </>
  );
}
