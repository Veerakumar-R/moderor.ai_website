import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { ContinuousComplianceMonitoringVisual } from "@/components/products/ContinuousComplianceMonitoringVisual";

export const metadata: Metadata = {
  title: "Continuous Compliance Monitoring | moderor.ai",
  description:
    "Continuous Compliance Monitoring (CCM) is Moderor's flagship GRC product — AI agents continuously evaluate enterprise assets across 74–106 control categories and 160+ sub-controls.",
};

export default function ContinuousComplianceMonitoringPage() {
  return (
    <ProductHero
      badge="GRC Suite · Product"
      title="Every control. Every asset. Continuously."
      description="AI agents continuously evaluate enterprise assets across 74–106 control categories with 160+ sub-controls spanning ITGC, GDPR, RBI, SOC 2, PCI DSS, DPDP and vendor access — extensible with your own rulesets."
      visual={<ContinuousComplianceMonitoringVisual />}
    />
  );
}
