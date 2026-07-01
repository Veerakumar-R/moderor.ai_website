import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { HrComplianceVisual } from "@/components/products/HrComplianceVisual";

export const metadata: Metadata = {
  title: "HR Compliance | moderor.ai",
  description:
    "Moderor HR Compliance monitors employees and HR processes against configurable checkpoints, tracking failed-check counts across your workforce.",
};

export default function HrCompliancePage() {
  return (
    <ProductHero
      badge="BOM Suite · Product"
      title="People processes, checkpoint by checkpoint."
      description="Moderor HR Compliance monitors employees and HR processes against configurable checkpoints, tracking failed-check counts across your workforce."
      visual={<HrComplianceVisual />}
    />
  );
}
