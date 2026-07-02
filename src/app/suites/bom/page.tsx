import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "BOM Suite — Business Operations Mesh | moderor.ai",
  description:
    "Moderor BOM Suite: AI agents for HR compliance monitoring, omni-channel customer re-engagement, logical access management (UAM) and KYC document verification.",
};

export default function BomSuitePage() {
  return (
    <PageBanner
      eyebrow="BOM Suite · Business Operations Mesh"
      title="People, customers, access and identity — one operations mesh."
      tagline="AI agents for HR compliance monitoring, omni-channel customer re-engagement, logical access management (UAM), and KYC document verification — governed operations from onboarding through every access decision."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Suites", href: "/" },
        { label: "BOM Suite" },
      ]}
    />
  );
}
