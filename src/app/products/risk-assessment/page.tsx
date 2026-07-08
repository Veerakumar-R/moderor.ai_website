import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { RaHero } from "@/components/ra/RaHero";
import { RaBusinessChallenge } from "@/components/ra/RaBusinessChallenge";
import { RaSolutionPositioning } from "@/components/ra/RaSolutionPositioning";
import { RaBusinessOutcomes } from "@/components/ra/RaBusinessOutcomes";
import { RaCapabilities } from "@/components/ra/RaCapabilities";
import { RaStakeholders } from "@/components/ra/RaStakeholders";
import { RaOutcomes } from "@/components/ra/RaOutcomes";
import { RaIntegrations } from "@/components/ra/RaIntegrations";
import { RaPrinciple } from "@/components/ra/RaPrinciple";
import { RaFinalCTA } from "@/components/ra/RaFinalCTA";

export const metadata: Metadata = {
  title: "Risk Assessment — AI Third-Party Risk Lifecycle | moderor.ai",
  description:
    "Assess, onboard, monitor, and govern third parties through AI-powered due diligence, intelligent risk evaluation, and continuous lifecycle monitoring. Part of the moderor.ai GRC Suite.",
  openGraph: {
    title: "Risk Assessment — AI Third-Party Risk Lifecycle | moderor.ai",
    description:
      "AI-powered third-party risk lifecycle management with intelligent due diligence, compliance evaluation, and continuous vendor governance.",
    url: "https://moderor.ai/products/risk-assessment",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function RiskAssessmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <RaHero />
        <RaBusinessChallenge />
        <RaSolutionPositioning />
        <RaBusinessOutcomes />
        <RaCapabilities />
        <RaStakeholders />
        <RaOutcomes />
        <RaIntegrations />
        <RaPrinciple />
        <RaFinalCTA />
      </main>
    </>
  );
}
