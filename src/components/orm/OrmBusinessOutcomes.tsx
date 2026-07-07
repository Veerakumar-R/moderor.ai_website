"use client";

import { OrmHeroKpiStrip } from "./OrmHeroKpiStrip";
import "./orm.css";

export function OrmBusinessOutcomes() {
  return (
    <section
      className="orm-business-outcomes-section px-5 pb-16 pt-12 sm:px-[50px] sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-label="Operational Risk Management business outcomes"
    >
      <OrmHeroKpiStrip />
    </section>
  );
}
