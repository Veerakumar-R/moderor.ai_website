import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { RegulatoryComplianceVisual } from "@/components/products/RegulatoryComplianceVisual";

export const metadata: Metadata = {
  title: "Regulatory Compliance | moderor.ai",
  description:
    "Moderor Regulatory Compliance is a regulation intelligence product organized as Processing → Intelligence → Execution → Reports.",
};

export default function RegulatoryCompliancePage() {
  return (
    <ProductHero
      badge="GRC Suite · Product"
      title="From circular to controlled obligation."
      description="Moderor Regulatory Compliance is a regulation intelligence product organized as Processing → Intelligence → Execution → Reports."
      visual={<RegulatoryComplianceVisual />}
    />
  );
}
