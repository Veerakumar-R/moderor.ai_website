"use client";

import { RiskAssessmentVisual } from "@/components/products/RiskAssessmentVisual";
import "./ra.css";

export function RaHeroVisual() {
  return (
    <div className="ra-hero-bento-wrap" aria-hidden>
      <RiskAssessmentVisual />
    </div>
  );
}
