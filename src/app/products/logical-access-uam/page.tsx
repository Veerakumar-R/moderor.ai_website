import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { LogicalAccessUamVisual } from "@/components/products/LogicalAccessUamVisual";

export const metadata: Metadata = {
  title: "Logical Access Management (UAM) | moderor.ai",
  description:
    "Logical Access Management (UAM) is Moderor's identity and access governance product. It reviews orphaned and dormant accounts and enforces hard guardrails.",
};

export default function LogicalAccessUamPage() {
  return (
    <ProductHero
      badge="BOM Suite · Product"
      title="Access governance with hard guardrails."
      description="Logical Access Management (UAM) is Moderor's identity and access governance product. It reviews orphaned and dormant accounts and enforces hard guardrails."
      visual={<LogicalAccessUamVisual />}
    />
  );
}
