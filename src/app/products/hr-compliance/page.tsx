import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HrHero } from "@/components/hr-compliance/HrHero";
import { HrBusinessChallenge } from "@/components/hr-compliance/HrBusinessChallenge";
import { HrSolutionPositioning } from "@/components/hr-compliance/HrSolutionPositioning";
import { HrBusinessOutcomes } from "@/components/hr-compliance/HrBusinessOutcomes";
import { HrCapabilities } from "@/components/hr-compliance/HrCapabilities";
import { HrStakeholders } from "@/components/hr-compliance/HrStakeholders";
import { HrOutcomes } from "@/components/hr-compliance/HrOutcomes";
import { HrIntegrations } from "@/components/hr-compliance/HrIntegrations";
import { HrPrinciple } from "@/components/hr-compliance/HrPrinciple";
import { HrFinalCTA } from "@/components/hr-compliance/HrFinalCTA";

export const metadata: Metadata = {
  title: "HR Compliance — Continuous Workforce Compliance | moderor.ai",
  description:
    "Continuously monitor HR policies, automate compliance checks, identify workforce risks, and maintain audit-ready records across every employee lifecycle. Part of the moderor.ai BOM Suite.",
  openGraph: {
    title: "HR Compliance — Continuous Workforce Compliance | moderor.ai",
    description:
      "AI-powered HR compliance with continuous policy validation, automated checks, and human-governed workforce decisions.",
    url: "https://moderor.ai/products/hr-compliance",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function HrCompliancePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <HrHero />
        <HrBusinessChallenge />
        <HrSolutionPositioning />
        <HrBusinessOutcomes />
        <HrCapabilities />
        <HrStakeholders />
        <HrOutcomes />
        <HrIntegrations />
        <HrPrinciple />
        <HrFinalCTA />
      </main>
    </>
  );
}
