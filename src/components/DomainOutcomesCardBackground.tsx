"use client";

import dynamic from "next/dynamic";
import { OutcomeRadarBackground } from "./OutcomeRadarBackground";

const LiquidEther = dynamic(() => import("./LiquidEther"), { ssr: false });

const LIQUID_COLORS = ["#ff7a00", "#ffb347", "#ffd080"];

export function DomainOutcomesCardBackground({ reduceMotion = false }: { reduceMotion?: boolean }) {
  if (reduceMotion) {
    return (
      <div className="domain-outcomes-card-bg domain-outcomes-card-bg-static" aria-hidden>
        <div className="domain-outcomes-card-bg-veil" />
      </div>
    );
  }

  return (
    <div className="domain-outcomes-card-bg" aria-hidden>
      <div className="domain-outcomes-card-liquid">
        <LiquidEther
          colors={LIQUID_COLORS}
          mouseForce={14}
          cursorSize={90}
          isViscous
          viscous={30}
          iterationsViscous={24}
          iterationsPoisson={24}
          resolution={0.45}
          isBounce={false}
          autoDemo
          autoSpeed={0.45}
          autoIntensity={1.9}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="domain-outcomes-card-radar">
        <OutcomeRadarBackground backgroundColor="#ffffff" opacity={0.38} />
      </div>

      <div className="domain-outcomes-card-bg-veil" />
    </div>
  );
}
