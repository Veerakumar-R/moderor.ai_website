"use client";

import { RaHeroKpiStrip } from "./RaHeroKpiStrip";
import "./ra.css";

export function RaBusinessOutcomes() {
  return (
    <section
      className="ra-business-outcomes-section px-5 pb-16 pt-12 sm:px-[50px] sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-label="Risk Assessment business outcomes"
    >
      <RaHeroKpiStrip />
    </section>
  );
}
