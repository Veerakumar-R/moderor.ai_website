import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { SyntheticDataEngineVisual } from "@/components/products/SyntheticDataEngineVisual";

export const metadata: Metadata = {
  title: "Synthetic Data Engine | moderor.ai",
  description:
    "The Synthetic Data Generation Engine is Moderor's test-data product. It generates realistic, PII-safe synthetic datasets through an analyze → complete lifecycle.",
};

export default function SyntheticDataEnginePage() {
  return (
    <ProductHero
      badge="APPcelerate Suite · Product"
      title="Test data without the production risk."
      description="The Synthetic Data Generation Engine is Moderor's test-data product. It generates realistic, PII-safe synthetic datasets through an analyze → complete lifecycle."
      visual={<SyntheticDataEngineVisual />}
    />
  );
}
