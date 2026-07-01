import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AuditorHero } from "@/components/auditor/AuditorHero";
import { AuditorNarrative } from "@/components/auditor/AuditorNarrative";
import { AuditorOutcomes } from "@/components/auditor/AuditorOutcomes";
import { AuditorCapabilities } from "@/components/auditor/AuditorCapabilities";
import { AuditorStakeholders } from "@/components/auditor/AuditorStakeholders";
import { AuditorPrinciple } from "@/components/auditor/AuditorPrinciple";
import { AuditorFinalCTA } from "@/components/auditor/AuditorFinalCTA";

export const metadata: Metadata = {
  title: "Auditor Workbench — Transform Internal Audits into Continuous Assurance | moderor.ai",
  description:
    "AI-powered evidence collection, continuous control validation, and intelligent audit workflows — execute audits faster, strengthen governance, and stay audit-ready year-round. Part of the moderor.ai GRC Suite.",
  openGraph: {
    title: "Auditor Workbench — Continuous Assurance | moderor.ai",
    description:
      "Transform manual internal audits into continuous assurance with governed, human-in-the-loop AI.",
    url: "https://moderor.ai/products/auditor-workbench",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function AuditorWorkbenchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <AuditorHero />
        <AuditorNarrative />
        <AuditorOutcomes />
        <AuditorCapabilities />
        <AuditorStakeholders />
        <AuditorPrinciple />
        <AuditorFinalCTA />
      </main>
    </>
  );
}
