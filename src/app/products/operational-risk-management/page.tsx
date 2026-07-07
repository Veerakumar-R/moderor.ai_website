import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { OrmHero } from "@/components/orm/OrmHero";
import { OrmNarrative } from "@/components/orm/OrmNarrative";
import { OrmOutcomes } from "@/components/orm/OrmOutcomes";
import { OrmCapabilities } from "@/components/orm/OrmCapabilities";
import { OrmStakeholders } from "@/components/orm/OrmStakeholders";
import { OrmPrinciple } from "@/components/orm/OrmPrinciple";
import { OrmFinalCTA } from "@/components/orm/OrmFinalCTA";

export const metadata: Metadata = {
  title: "Operational Risk Management — Continuous Risk Intelligence | moderor.ai",
  description:
    "Continuously identify, assess, monitor, and mitigate operational risk with AI-powered automation, intelligent controls, and real-time risk insights. Part of the moderor.ai GRC Suite.",
  openGraph: {
    title: "Operational Risk Management — Continuous Risk Intelligence | moderor.ai",
    description:
      "AI-powered operational risk management with continuous KRI monitoring, RCM automation, and human-governed risk decisions.",
    url: "https://moderor.ai/products/operational-risk-management",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function OperationalRiskManagementPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <OrmHero />
        <OrmNarrative />
        <OrmOutcomes />
        <OrmCapabilities />
        <OrmStakeholders />
        <OrmPrinciple />
        <OrmFinalCTA />
      </main>
    </>
  );
}
