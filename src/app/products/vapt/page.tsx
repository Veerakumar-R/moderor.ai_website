import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { VaptVisual } from "@/components/products/VaptVisual";

export const metadata: Metadata = {
  title: "VAPT | moderor.ai",
  description:
    "VAPT is Moderor's vulnerability management product. It ingests scanner reports (Qualys VMDR, OpenVAS) and normalizes findings into CVE groups.",
};

export default function VaptPage() {
  return (
    <ProductHero
      badge="APPcelerate Suite · Product"
      title="Vulnerabilities, normalized and owned."
      description="VAPT is Moderor's vulnerability management product. It ingests scanner reports (Qualys VMDR, OpenVAS) and normalizes findings into CVE groups."
      visual={<VaptVisual />}
    />
  );
}
