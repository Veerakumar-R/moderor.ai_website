"use client";

import { RegulatoryHeroKpiStrip } from "./RegulatoryHeroKpiStrip";
import "./regulatory.css";

export function RegulatoryBusinessOutcomes() {
  return (
    <section
      className="rc-business-outcomes-section px-5 pb-16 pt-12 sm:px-[50px] sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-label="Regulatory Compliance business outcomes"
    >
      <RegulatoryHeroKpiStrip />
    </section>
  );
}
