"use client";

import { SatHeroKpiStrip } from "./SatHeroKpiStrip";
import "./sat.css";

export function SatBusinessOutcomes() {
  return (
    <section
      className="sat-business-outcomes-section px-5 pb-16 pt-12 sm:px-[50px] sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-label="Smart Alert Triage business outcomes"
    >
      <SatHeroKpiStrip />
    </section>
  );
}
