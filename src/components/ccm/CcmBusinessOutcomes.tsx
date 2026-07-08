"use client";

import { CcmHeroKpiStrip } from "./CcmHeroKpiStrip";
import "./ccm.css";

export function CcmBusinessOutcomes() {
  return (
    <section
      className="ccm-business-outcomes-section px-5 pb-16 pt-12 sm:px-[50px] sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-label="Continuous Compliance Monitoring business outcomes"
    >
      <CcmHeroKpiStrip />
    </section>
  );
}
