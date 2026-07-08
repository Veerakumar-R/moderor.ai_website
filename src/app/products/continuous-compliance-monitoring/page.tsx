import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CcmHero } from "@/components/ccm/CcmHero";
import { CcmBusinessChallenge } from "@/components/ccm/CcmBusinessChallenge";
import { CcmSolutionPositioning } from "@/components/ccm/CcmSolutionPositioning";
import { CcmBusinessOutcomes } from "@/components/ccm/CcmBusinessOutcomes";
import { CcmCapabilities } from "@/components/ccm/CcmCapabilities";
import { CcmStakeholders } from "@/components/ccm/CcmStakeholders";
import { CcmOutcomes } from "@/components/ccm/CcmOutcomes";
import { CcmIntegrations } from "@/components/ccm/CcmIntegrations";
import { CcmPrinciple } from "@/components/ccm/CcmPrinciple";
import { CcmFinalCTA } from "@/components/ccm/CcmFinalCTA";

export const metadata: Metadata = {
  title: "Continuous Compliance Monitoring — AI-Powered GRC | moderor.ai",
  description:
    "AI agents continuously evaluate enterprise assets across 74–106 control categories and 160+ sub-controls. Detect violations, automate remediation, and stay audit-ready every day.",
  openGraph: {
    title: "Continuous Compliance Monitoring — AI-Powered GRC | moderor.ai",
    description:
      "Continuously monitor IT assets, detect compliance violations in real time, and maintain audit-ready visibility across every control and framework.",
    url: "https://moderor.ai/products/continuous-compliance-monitoring",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function ContinuousComplianceMonitoringPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <CcmHero />
        <CcmBusinessChallenge />
        <CcmSolutionPositioning />
        <CcmBusinessOutcomes />
        <CcmCapabilities />
        <CcmStakeholders />
        <CcmOutcomes />
        <CcmIntegrations />
        <CcmPrinciple />
        <CcmFinalCTA />
      </main>
    </>
  );
}
