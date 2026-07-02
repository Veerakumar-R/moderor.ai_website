import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { RiskAssessmentVisual } from "@/components/products/RiskAssessmentVisual";

export const metadata: Metadata = {
  title: "Risk Assessment | moderor.ai",
  description:
    "Moderor Risk Assessment is a vendor and third-party risk management product. It scores vendor proposals by criticality and risk, runs onboarding pipelines and periodic assessments, and maintains an AI-updated attention queue.",
};

export default function RiskAssessmentPage() {
  return (
    <ProductHero
      badge="GRC Suite · Product"
      title="Third-party risk, continuously scored."
      description="Moderor Risk Assessment is a vendor and third-party risk management product. It scores vendor proposals by criticality and risk, runs onboarding pipelines and periodic assessments, and maintains an AI-updated attention queue."
      visual={<RiskAssessmentVisual />}
    />
  );
}
