import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Platform Admin Console — The Operational Backbone | moderor.ai",
  description:
    "Moderor Platform Admin Console: platform-wide Ask AI, agent registry with guardrails, MCP catalog, multi-LLM model configuration, RBAC and audit logs.",
};

export default function AdminSuitePage() {
  return (
    <PageBanner
      eyebrow="Platform Admin Console · Governance Plane"
      title="One control plane for every agent, model and connection."
      tagline="Platform-wide Ask AI, an agent registry with guardrails, an MCP catalog, multi-LLM model configuration, RBAC, and audit logs — every action logged, governed, and traceable across suites."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Suites", href: "/" },
        { label: "Platform Admin Console" },
      ]}
    />
  );
}
