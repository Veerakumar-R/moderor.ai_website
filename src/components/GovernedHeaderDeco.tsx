"use client";

import { motion, useReducedMotion } from "framer-motion";

function Sparkle({
  className,
  gradientId,
  from,
  to,
  delay = 0,
  reduceMotion,
}: {
  className?: string;
  gradientId: string;
  from: string;
  to: string;
  delay?: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className={`governed-sparkle absolute ${className ?? ""}`}
      initial={{ opacity: reduceMotion ? 0.85 : 0, scale: reduceMotion ? 1 : 0.6 }}
      animate={
        reduceMotion
          ? { opacity: 0.85, scale: 1 }
          : {
              opacity: [0.55, 1, 0.55],
              y: [0, -10, 0],
              rotate: [0, 10, -6, 0],
              scale: [1, 1.06, 1],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
              y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: 7 + delay, repeat: Infinity, ease: "easeInOut", delay },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
            }
      }
    >
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M50 4 L57 43 L96 50 L57 57 L50 96 L43 57 L4 50 L43 43 Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
    </motion.div>
  );
}

export function GovernedHeaderDeco() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="governed-header-deco" aria-hidden>
      <Sparkle
        className="governed-sparkle--left"
        gradientId="governed-sparkle-1"
        from="#ff7a00"
        to="#ffb347"
        delay={0}
        reduceMotion={!!reduceMotion}
      />
      <Sparkle
        className="governed-sparkle--right"
        gradientId="governed-sparkle-2"
        from="#ffb347"
        to="#ff7a00"
        delay={0.55}
        reduceMotion={!!reduceMotion}
      />
    </div>
  );
}
