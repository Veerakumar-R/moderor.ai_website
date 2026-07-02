import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { SmartAlertTriageVisual } from "@/components/products/SmartAlertTriageVisual";

export const metadata: Metadata = {
  title: "Smart Alert Triage | moderor.ai",
  description:
    "Smart Alert Triage is Moderor's ML-driven alert triage product for financial operations.",
};

export default function SmartAlertTriagePage() {
  return (
    <ProductHero
      badge="GRC Suite · Product"
      title="Alerts triaged by real machine learning."
      description="Smart Alert Triage is Moderor's ML-driven alert triage product for financial operations."
      visual={<SmartAlertTriageVisual />}
    />
  );
}
