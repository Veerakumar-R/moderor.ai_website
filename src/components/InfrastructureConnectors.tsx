"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

const paths = [
  { id: "tl", d: "M 50 50 C 38 50, 22 32, 18 22", cx: 18, cy: 22 },
  { id: "bl", d: "M 50 50 C 38 50, 22 68, 18 78", cx: 18, cy: 78 },
  { id: "tr", d: "M 50 50 C 62 50, 78 32, 82 22", cx: 82, cy: 22 },
  { id: "br", d: "M 50 50 C 62 50, 78 68, 82 78", cx: 82, cy: 78 },
];

export function InfrastructureConnectors({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <svg className="infra-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="infra-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 122, 0, 0.15)" />
          <stop offset="50%" stopColor="rgba(255, 160, 80, 0.85)" />
          <stop offset="100%" stopColor="rgba(255, 122, 0, 0.2)" />
        </linearGradient>
      </defs>
      {paths.map((path, i) => (
        <g key={path.id}>
          <path
            d={path.d}
            fill="none"
            stroke="rgba(255, 122, 0, 0.08)"
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={path.d}
            fill="none"
            stroke="url(#infra-line-grad)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            className={reduceMotion ? undefined : "infra-connector-line"}
            style={{ "--line-delay": `${i * 0.4}s` } as CSSProperties}
          />
          <circle
            cx={path.cx}
            cy={path.cy}
            r="0.8"
            fill="#ff7a00"
            className={reduceMotion ? undefined : "infra-connector-node"}
            style={{ "--line-delay": `${i * 0.4}s` } as CSSProperties}
          />
        </g>
      ))}
    </svg>
  );
}
