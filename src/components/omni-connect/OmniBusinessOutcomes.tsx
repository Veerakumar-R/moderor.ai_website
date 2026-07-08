"use client";

import { OmniHeroKpiStrip } from "./OmniHeroKpiStrip";
import "./omni.css";

export function OmniBusinessOutcomes() {
  return (
    <section
      className="omni-business-outcomes-section px-5 pb-16 pt-12 sm:px-[50px] sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-label="Omni Connect business outcomes"
    >
      <OmniHeroKpiStrip />
    </section>
  );
}
