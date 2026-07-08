"use client";

import { ContinuousComplianceMonitoringVisual } from "@/components/products/ContinuousComplianceMonitoringVisual";
import "./ccm.css";

export function CcmHeroVisual() {
  return (
    <div className="ccm-hero-bento-wrap" aria-hidden>
      <ContinuousComplianceMonitoringVisual />
    </div>
  );
}
