import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";
import { GrcSuiteHero } from "@/components/grc-suite/GrcSuiteHero";
import {
  GrcSuiteAiSection,
  GrcSuiteBreadcrumb,
  GrcSuiteFinalCta,
  GrcSuiteOutcomesSection,
  GrcSuiteProductsSection,
  GrcSuiteWhyChooseSection,
  GrcSuiteWhySection,
} from "@/components/grc-suite/GrcSuiteSections";
import { grcSuitePage } from "@/content/site";

export const metadata: Metadata = {
  title: `${grcSuitePage.metadata.title} | moderor.ai`,
  description: grcSuitePage.metadata.description,
  openGraph: {
    title: grcSuitePage.metadata.title,
    description: grcSuitePage.metadata.description,
    type: "website",
  },
};

export default function GrcSuitePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <GrcSuiteBreadcrumb />
        <GrcSuiteHero />
        <GrcSuiteWhySection />
        <GrcSuiteProductsSection />
        <GrcSuiteOutcomesSection />
        <GrcSuiteAiSection />
        <GrcSuiteWhyChooseSection />
        <GrcSuiteFinalCta />
        <FinalCTA />
      </main>
    </>
  );
}
