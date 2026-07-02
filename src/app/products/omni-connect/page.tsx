import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { OmniConnectVisual } from "@/components/products/OmniConnectVisual";

export const metadata: Metadata = {
  title: "Omni Connect | moderor.ai",
  description:
    "Omni Connect is Moderor's omni-channel customer re-engagement product. AI voice and SMS agents automatically reach out to drop-offs and win them back.",
};

export default function OmniConnectPage() {
  return (
    <ProductHero
      badge="BOM Suite · Product"
      title="Lost customers, called back by AI."
      description="Omni Connect is Moderor's omni-channel customer re-engagement product. AI voice and SMS agents automatically reach out to drop-offs and win them back."
      visual={<OmniConnectVisual />}
    />
  );
}
