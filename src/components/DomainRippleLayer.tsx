"use client";

import { motion, useReducedMotion } from "framer-motion";

const RIPPLES = [
  "M-80,620 C120,520 280,380 520,280 C680,200 820,120 920,40",
  "M-80,660 C140,560 300,420 540,320 C700,240 840,160 940,80",
  "M-80,700 C160,600 320,460 560,360 C720,280 860,200 960,120",
  "M-80,740 C180,640 340,500 580,400 C740,320 880,240 980,160",
  "M-80,780 C200,680 360,540 600,440 C760,360 900,280 1000,200",
  "M-80,820 C220,720 380,580 620,480 C780,400 920,320 1020,240",
  "M-80,860 C240,760 400,620 640,520 C800,440 940,360 1040,280",
  "M-80,900 C260,800 420,660 660,560 C820,480 960,400 1060,320",
  "M-80,940 C280,840 440,700 680,600 C840,520 980,440 1080,360",
  "M-80,980 C300,880 460,740 700,640 C860,560 1000,480 1100,400",
];

export function DomainRippleLayer() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="domain-ripple-layer" aria-hidden>
      <svg className="domain-ripple-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="domain-ripple-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a0800" stopOpacity="0.2" />
            <stop offset="35%" stopColor="#ff7a00" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#ffd080" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fff0d8" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {RIPPLES.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#domain-ripple-grad)"
            strokeWidth={1.2 + (i % 3) * 0.3}
            strokeOpacity={0.12 + i * 0.04}
            animate={
              reduceMotion
                ? undefined
                : {
                    strokeOpacity: [0.1 + i * 0.03, 0.22 + i * 0.04, 0.1 + i * 0.03],
                    translateX: [0, 8 - i * 0.5, 0],
                    translateY: [0, -4 + i * 0.3, 0],
                  }
            }
            transition={{
              duration: 7 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </svg>
      <div className="domain-ripple-grain" />
    </div>
  );
}
