import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { KycAgenticVerifyVisual } from "@/components/products/KycAgenticVerifyVisual";

export const metadata: Metadata = {
  title: "KYC Agentic Verify | moderor.ai",
  description:
    "KYC Agentic Verify is Moderor's AI document-verification product. Agents verify uploaded customer document sets against templates in minutes, not days.",
};

export default function KycAgenticVerifyPage() {
  return (
    <ProductHero
      badge="BOM Suite · Product"
      title="KYC verified in minutes, not days."
      description="KYC Agentic Verify is Moderor's AI document-verification product. Agents verify uploaded customer document sets against templates in minutes, not days."
      visual={<KycAgenticVerifyVisual />}
    />
  );
}
