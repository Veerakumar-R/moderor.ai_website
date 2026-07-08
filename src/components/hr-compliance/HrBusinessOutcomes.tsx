"use client";

import { HrHeroKpiStrip } from "./HrHeroKpiStrip";
import "./hr.css";

export function HrBusinessOutcomes() {
  return (
    <section
      className="hr-business-outcomes-section px-5 pb-16 pt-12 sm:px-[50px] sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-label="HR Compliance business outcomes"
    >
      <HrHeroKpiStrip />
    </section>
  );
}
