"use client";

import { useId } from "react";

const VB_W = 1040;
const VB_H = 140;
const R = 2400;

export function HeroCurveGlow() {
  const uid = useId().replaceAll(":", "");

  const arcPath = `M 0 ${VB_H} A ${R} ${R} 0 0 1 ${VB_W} ${VB_H}`;
  const fillPath = `${arcPath} L ${VB_W} ${VB_H} L 0 ${VB_H} Z`;

  return (
    <div
      className="hero-curve-glow-wrap pointer-events-none absolute inset-x-0 top-[58%] bottom-0 z-[4] flex items-end justify-center px-4 sm:top-[56%] sm:px-8 lg:top-[54%]"
      aria-hidden
    >
      <div className="hero-curve-glow-track relative mx-auto h-[130px] w-full max-w-[1040px] sm:h-[150px] lg:h-[170px]">
        <svg
          className="hero-curve-glow-svg block h-full w-full"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id={`${uid}-shine`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#ffd080" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id={`${uid}-fill`} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#ff7a00" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
            </linearGradient>
            <filter id={`${uid}-halo`} x="-50%" y="-80%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id={`${uid}-halo-mid`} x="-40%" y="-60%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          <path d={fillPath} fill={`url(#${uid}-fill)`} opacity="0.22" />

          <path
            d={arcPath}
            stroke="#ff7a00"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
            opacity="0.28"
            filter={`url(#${uid}-halo)`}
          />

          <path
            d={arcPath}
            stroke="#ff9500"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
            filter={`url(#${uid}-halo-mid)`}
          />

          <path
            d={arcPath}
            stroke={`url(#${uid}-shine)`}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
