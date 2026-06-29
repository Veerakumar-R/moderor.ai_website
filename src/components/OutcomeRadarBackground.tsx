"use client";

import dynamic from "next/dynamic";

const Radar = dynamic(() => import("./Radar"), { ssr: false });

export function OutcomeRadarBackground({
  backgroundColor = "#e6e9f0",
  opacity = 0.7,
}: {
  backgroundColor?: string;
  opacity?: number;
}) {
  return (
    <>
      <div className="outcome-radar-rings pointer-events-none absolute inset-0" aria-hidden />
      <div className="absolute inset-0" style={{ opacity }}>
        <Radar
          speed={0.85}
          scale={0.48}
          ringCount={10}
          spokeCount={10}
          ringThickness={0.05}
          spokeThickness={0.01}
          sweepSpeed={1}
          sweepWidth={2}
          sweepLobes={1}
          color="#ff7a00"
          backgroundColor={backgroundColor}
          falloff={2}
          brightness={0.95}
          enableMouseInteraction={false}
        />
      </div>
    </>
  );
}
