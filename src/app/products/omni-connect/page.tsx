import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { OmniHero } from "@/components/omni-connect/OmniHero";
import { OmniBusinessChallenge } from "@/components/omni-connect/OmniBusinessChallenge";
import { OmniSolutionPositioning } from "@/components/omni-connect/OmniSolutionPositioning";
import { OmniBusinessOutcomes } from "@/components/omni-connect/OmniBusinessOutcomes";
import { OmniCapabilities } from "@/components/omni-connect/OmniCapabilities";
import { OmniStakeholders } from "@/components/omni-connect/OmniStakeholders";
import { OmniOutcomes } from "@/components/omni-connect/OmniOutcomes";
import { OmniIntegrations } from "@/components/omni-connect/OmniIntegrations";
import { OmniPrinciple } from "@/components/omni-connect/OmniPrinciple";
import { OmniFinalCTA } from "@/components/omni-connect/OmniFinalCTA";

export const metadata: Metadata = {
  title: "Omni Connect — Intelligent Customer Recovery | moderor.ai",
  description:
    "AI-powered customer re-engagement that detects drop-offs, initiates intelligent outreach, and converts abandoned journeys into completed transactions. Part of the moderor.ai BOM Suite.",
  openGraph: {
    title: "Omni Connect — Intelligent Customer Recovery | moderor.ai",
    description:
      "Recover customers and revenue with real-time drop-off detection, multi-channel outreach, and governed AI automation.",
    url: "https://moderor.ai/products/omni-connect",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function OmniConnectPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <OmniHero />
        <OmniBusinessChallenge />
        <OmniSolutionPositioning />
        <OmniBusinessOutcomes />
        <OmniCapabilities />
        <OmniStakeholders />
        <OmniOutcomes />
        <OmniIntegrations />
        <OmniPrinciple />
        <OmniFinalCTA />
      </main>
    </>
  );
}
