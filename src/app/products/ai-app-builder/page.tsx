import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { AiAppBuilderVisual } from "@/components/products/AiAppBuilderVisual";

export const metadata: Metadata = {
  title: "AI App Builder | moderor.ai",
  description:
    "AI App Builder is Moderor's prompt-to-prototype product. Describe an application, screen or workflow and it generates working code instantly.",
};

export default function AiAppBuilderPage() {
  return (
    <ProductHero
      badge="APPcelerate Suite · Product"
      title="Describe it. Run it."
      description="AI App Builder is Moderor's prompt-to-prototype product. Describe an application, screen or workflow and it generates working code instantly."
      visual={<AiAppBuilderVisual />}
    />
  );
}
