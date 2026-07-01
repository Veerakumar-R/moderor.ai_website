import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { AiBrdGeneratorVisual } from "@/components/products/AiBrdGeneratorVisual";

export const metadata: Metadata = {
  title: "AI BRD Generator | moderor.ai",
  description:
    "AI BRD Generator is Moderor's requirements product: it generates Business Requirements Documents from templates and rates their quality with AI.",
};

export default function AiBrdGeneratorPage() {
  return (
    <ProductHero
      badge="APPcelerate Suite · Product"
      title="Requirements written while you scope."
      description="AI BRD Generator is Moderor's requirements product: it generates Business Requirements Documents from templates and rates their quality with AI."
      visual={<AiBrdGeneratorVisual />}
    />
  );
}
