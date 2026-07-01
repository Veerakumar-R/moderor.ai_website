import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { AiBranchAuditVisual } from "@/components/products/AiBranchAuditVisual";

export const metadata: Metadata = {
  title: "AI Branch Audit | moderor.ai",
  description:
    "AI Branch Audit is Moderor's physical-audit product built around a Chief Audit Executive perspective.",
};

export default function AiBranchAuditPage() {
  return (
    <ProductHero
      badge="GRC Suite · Product"
      title="Branch audits with a Chief Audit Executive's view."
      description="AI Branch Audit is Moderor's physical-audit product built around a Chief Audit Executive perspective."
      visual={<AiBranchAuditVisual />}
    />
  );
}
