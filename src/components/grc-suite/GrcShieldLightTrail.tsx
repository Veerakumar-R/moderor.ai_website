"use client";

import { useId } from "react";

/** Tall S-curve — tapers in from above and out at bottom */
const SWOOSH =
  "M 304 -48 C 352 -12, 388 52, 374 178 C 360 278, 292 362, 218 444 C 144 526, 182 610, 272 676 C 324 710, 370 720, 400 720";

const STRAND_OFFSETS = [-14, -10, -6, -2, 2, 6, 10, 14] as const;

const FLARES = [
  { cx: 360, cy: 24, r: 10, opacity: 0.28 },
  { cx: 382, cy: 188, r: 13, opacity: 0.32 },
  { cx: 312, cy: 360, r: 11, opacity: 0.26 },
  { cx: 278, cy: 680, r: 11, opacity: 0.3 },
  { cx: 396, cy: 712, r: 9, opacity: 0.24 },
] as const;

function strandWidth(index: number): number {
  if (index === 3 || index === 4) return 3.2;
  if (index === 2 || index === 5) return 2.5;
  return 1.8;
}

function strandOpacity(index: number): number {
  return index === 3 || index === 4 ? 1 : 0.75;
}

export function GrcShieldLightTrail() {
  const uid = useId().replace(/:/g, "");
  const gradId = `grc-trail-grad-${uid}`;
  const flareId = `grc-trail-flare-${uid}`;
  const haloId = `grc-trail-halo-${uid}`;
  const lineGlowId = `grc-trail-line-glow-${uid}`;
  const softGlowId = `grc-trail-soft-glow-${uid}`;

  return (
    <div className="grc-shield-light-trail" aria-hidden>
      <svg
        className="grc-shield-light-trail-svg"
        viewBox="0 -48 420 768"
        overflow="visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradId} x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#fffaf4" stopOpacity="0.55" />
            <stop offset="18%" stopColor="#ffd4a0" stopOpacity="0.94" />
            <stop offset="55%" stopColor="#ff8c1a" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.85" />
          </linearGradient>

          <radialGradient id={flareId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd4a0" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#ffc070" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={haloId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
          </radialGradient>

          <filter id={softGlowId} filterUnits="userSpaceOnUse" x="-100" y="-100" width="620" height="868">
            <feGaussianBlur stdDeviation="18" />
          </filter>

          <filter id={lineGlowId} filterUnits="userSpaceOnUse" x="-100" y="-100" width="620" height="868">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 0.62 0 0 0  0 0 0 0 0  0 0 0 1.4 0"
              result="orangeBlur"
            />
            <feGaussianBlur in="orangeBlur" stdDeviation="2.5" result="wideBlur" />
            <feMerge>
              <feMergeNode in="wideBlur" />
              <feMergeNode in="orangeBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter={`url(#${softGlowId})`} opacity="0.78">
          {STRAND_OFFSETS.slice(0, 6).map((offset) => (
            <path
              key={`soft-${offset}`}
              d={SWOOSH}
              transform={`translate(${offset} 0)`}
              stroke="#ff7a00"
              strokeWidth={8}
              strokeLinecap="round"
              fill="none"
              opacity={0.32}
            />
          ))}
        </g>

        <g filter={`url(#${lineGlowId})`}>
          {STRAND_OFFSETS.map((offset, i) => (
            <path
              key={`strand-${offset}`}
              d={SWOOSH}
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
              r={flare.r * 1.6}
              fill={`url(#${haloId})`}
              opacity={0.22}
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
