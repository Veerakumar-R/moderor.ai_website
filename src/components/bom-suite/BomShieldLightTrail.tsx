"use client";

import { useId } from "react";

/** Orbital arc — sweeps behind the gear icon (distinct from GRC's tall S-curve) */
const OUTER_ARC =
  "M 332 -64 C 248 4, 152 112, 138 258 C 124 404, 186 556, 284 640 C 332 680, 388 712, 420 744";

const INNER_ARC =
  "M 314 -48 C 238 18, 168 108, 156 246 C 144 384, 196 522, 272 604 C 316 644, 362 672, 386 696";

const STRAND_OFFSETS = [-7, -4, -2, 0, 2, 4, 7] as const;

const FLARES = [
  { cx: 318, cy: 12, r: 9, opacity: 0.3 },
  { cx: 168, cy: 210, r: 12, opacity: 0.34 },
  { cx: 152, cy: 390, r: 10, opacity: 0.28 },
  { cx: 248, cy: 560, r: 11, opacity: 0.32 },
  { cx: 392, cy: 712, r: 9, opacity: 0.26 },
] as const;

function strandWidth(index: number): number {
  if (index === 2 || index === 3 || index === 4) return 2.2;
  if (index === 1 || index === 5) return 1.7;
  return 1.2;
}

function strandOpacity(index: number): number {
  return index === 2 || index === 3 || index === 4 ? 1 : 0.72;
}

export function BomShieldLightTrail() {
  const uid = useId().replace(/:/g, "");
  const gradId = `bom-trail-grad-${uid}`;
  const flareId = `bom-trail-flare-${uid}`;
  const haloId = `bom-trail-halo-${uid}`;
  const lineGlowId = `bom-trail-line-glow-${uid}`;
  const softGlowId = `bom-trail-soft-glow-${uid}`;

  return (
    <div className="bom-shield-light-trail" aria-hidden>
      <svg
        className="bom-shield-light-trail-svg"
        viewBox="0 -64 440 820"
        overflow="visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradId} x1="22%" y1="0%" x2="78%" y2="100%">
            <stop offset="0%" stopColor="#fff8ef" stopOpacity="0.62" />
            <stop offset="22%" stopColor="#ffd9ad" stopOpacity="0.95" />
            <stop offset="58%" stopColor="#ff9220" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.88" />
          </linearGradient>

          <radialGradient id={flareId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd4a0" stopOpacity="0.58" />
            <stop offset="40%" stopColor="#ffc070" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={haloId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
          </radialGradient>

          <filter id={softGlowId} filterUnits="userSpaceOnUse" x="-120" y="-120" width="680" height="920">
            <feGaussianBlur stdDeviation="14" />
          </filter>

          <filter id={lineGlowId} filterUnits="userSpaceOnUse" x="-120" y="-120" width="680" height="920">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 0.62 0 0 0  0 0 0 0 0  0 0 0 1.4 0"
              result="orangeBlur"
            />
            <feGaussianBlur in="orangeBlur" stdDeviation="1.8" result="wideBlur" />
            <feMerge>
              <feMergeNode in="wideBlur" />
              <feMergeNode in="orangeBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter={`url(#${softGlowId})`} opacity="0.72">
          <path d={INNER_ARC} stroke="#ff7a00" strokeWidth={4.5} strokeLinecap="round" fill="none" opacity={0.24} />
          {STRAND_OFFSETS.slice(0, 4).map((offset) => (
            <path
              key={`soft-${offset}`}
              d={OUTER_ARC}
              transform={`translate(${offset} 0)`}
              stroke="#ff7a00"
              strokeWidth={4.5}
              strokeLinecap="round"
              fill="none"
              opacity={0.28}
            />
          ))}
        </g>

        <g filter={`url(#${lineGlowId})`}>
          <path
            d={INNER_ARC}
            stroke={`url(#${gradId})`}
            strokeWidth={1.3}
            strokeLinecap="round"
            fill="none"
            opacity={0.82}
          />
          {STRAND_OFFSETS.map((offset, i) => (
            <path
              key={`strand-${offset}`}
              d={OUTER_ARC}
              transform={`translate(${offset} 0)`}
              stroke={`url(#${gradId})`}
              strokeWidth={strandWidth(i)}
              strokeLinecap="round"
              fill="none"
              opacity={strandOpacity(i)}
            />
          ))}
        </g>

        <g>
          {FLARES.map((flare) => (
            <circle
              key={`halo-${flare.cx}-${flare.cy}`}
              cx={flare.cx}
              cy={flare.cy}
              r={flare.r * 1.65}
              fill={`url(#${haloId})`}
              opacity={0.24}
            />
          ))}

          {FLARES.map((flare) => (
            <circle
              key={`flare-${flare.cx}-${flare.cy}`}
              cx={flare.cx}
              cy={flare.cy}
              r={flare.r}
              fill={`url(#${flareId})`}
              opacity={flare.opacity}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
