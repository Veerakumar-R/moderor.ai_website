import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";
import { PlatformHero } from "@/components/platform/PlatformHero";
import { PlatformBreadcrumb, PlatformWhySection } from "@/components/platform/PlatformSections";
import { PlatformCapabilitiesSection } from "@/components/platform/PlatformCapabilitiesSection";
import { PlatformOutcomesSection } from "@/components/platform/PlatformOutcomesSection";
import { PlatformArchitectureSection } from "@/components/platform/PlatformArchitectureSection";
import { PlatformPrincipleSection } from "@/components/platform/PlatformPrincipleSection";
import { PlatformWhyChooseSection } from "@/components/platform/PlatformWhyChooseSection";
import { platformPage } from "@/content/site";

export const metadata: Metadata = {
  title: `${platformPage.metadata.title} | moderor.ai`,
  description: platformPage.metadata.description,
  openGraph: {
    title: platformPage.metadata.title,
    description: platformPage.metadata.description,
    url: "https://moderor.ai/platform",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <PlatformBreadcrumb />
        <PlatformHero />
        <PlatformWhySection />
        <PlatformCapabilitiesSection />
        <PlatformOutcomesSection />
        <PlatformArchitectureSection />
        <PlatformPrincipleSection />
        <PlatformWhyChooseSection />
        <FinalCTA
          showLabel={false}
          ctaBelowDescription
          title={platformPage.finalCta.title}
          titleHighlight={platformPage.finalCta.titleHighlight}
          description={platformPage.finalCta.description}
          ctaText={platformPage.finalCta.cta}
        />
      </main>
    </>
  );
}
