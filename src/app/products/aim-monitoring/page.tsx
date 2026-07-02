import type { Metadata } from "next";
import { ProductHero } from "@/components/products/ProductHero";
import { AimMonitoringVisual } from "@/components/products/AimMonitoringVisual";

export const metadata: Metadata = {
  title: "AIM — Realtime Monitoring | moderor.ai",
  description:
    "AIM (AI Infra & App Realtime Monitoring) is Moderor's observability product. It combines natural-language Ask-AI over infrastructure logs with live streaming metrics and service health.",
};

export default function AimRealtimeMonitoringPage() {
  return (
    <ProductHero
      badge="APPcelerate Suite · Product"
      title="Ask your infrastructure anything."
      description="AIM (AI Infra & App Realtime Monitoring) is Moderor's observability product. It combines natural-language Ask-AI over infrastructure logs with live streaming metrics and service health."
      visual={<AimMonitoringVisual />}
    />
  );
}
