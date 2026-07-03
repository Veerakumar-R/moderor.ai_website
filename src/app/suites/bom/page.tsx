import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";
import { BomSuiteHero } from "@/components/bom-suite/BomSuiteHero";
import {
  BomSuiteAiSection,
  BomSuiteBreadcrumb,
  BomSuiteCapabilitiesSection,
  BomSuiteIntegrationsSection,
  BomSuiteIntroSection,
  BomSuiteOutcomesSection,
  BomSuitePersonasSection,
  BomSuiteProductsSection,
  BomSuiteWhySection,
} from "@/components/bom-suite/BomSuiteSections";
import { bomSuitePage } from "@/content/bomSuite";

export const metadata: Metadata = {
  title: `${bomSuitePage.metadata.title} | moderor.ai`,
  description: bomSuitePage.metadata.description,
  openGraph: {
    title: bomSuitePage.metadata.title,
    description: bomSuitePage.metadata.description,
    type: "website",
  },
};

export default function BomSuitePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pt-[var(--site-header-height)]">
        <BomSuiteBreadcrumb />
        <BomSuiteHero />
        <BomSuiteWhySection />
        <BomSuiteIntroSection />
        <BomSuiteOutcomesSection />
        <BomSuiteProductsSection />
        <BomSuiteCapabilitiesSection />
        <BomSuitePersonasSection />
        <BomSuiteIntegrationsSection />
        <BomSuiteAiSection />
        <FinalCTA
          showLabel={false}
          ctaBelowDescription
          title={bomSuitePage.finalCta.title}
          titleHighlight={bomSuitePage.finalCta.titleHighlight}
          description={bomSuitePage.finalCta.description}
          ctaText={bomSuitePage.finalCta.cta}
        />
      </main>
    </>
  );
}
