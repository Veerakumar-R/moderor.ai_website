import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "APPcelerate Suite — Build & Run Software Faster | moderor.ai",
  description:
    "Moderor APPcelerate Suite: AI BRD generator, prompt-to-prototype builder, VAPT, AI QA suite, realtime monitoring, synthetic data and NL-to-SQL.",
};

export default function AppcelerateSuitePage() {
  return (
    <PageBanner
      eyebrow="APPcelerate Suite · Build & Run Software Faster"
      title="Requirements to running software, accelerated by agents."
      tagline="AI BRD generation, prompt-to-prototype building, VAPT, AI QA, realtime monitoring, synthetic data, and NL-to-SQL — every engineering workflow governed before it becomes an incident."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Suites", href: "/" },
        { label: "APPcelerate Suite" },
      ]}
    />
  );
}
