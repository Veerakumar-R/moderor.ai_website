"use client";

import { motion } from "framer-motion";

function Sparkle({
  className,
  gradientId,
  from,
  to,
  delay = 0,
}: {
  className?: string;
  gradientId: string;
  from: string;
  to: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`hero-sparkle absolute ${className ?? ""}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: [0.65, 1, 0.65],
        y: [0, -14, 0],
        rotate: [0, 12, -8, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
        y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 7 + delay, repeat: Infinity, ease: "easeInOut", delay },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <svg width="56" height="56" viewBox="0 0 100 100" fill="none" aria-hidden>
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

export function HeroCenterPattern({
  showLeftSparkle = true,
  rightSparkleClassName = "right-[7%] top-[18%]",
}: {
  showLeftSparkle?: boolean;
  rightSparkleClassName?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden>
      <div className="hero-ribbed-columns" />

      {showLeftSparkle ? (
        <Sparkle
          className="left-[7%] top-[10%]"
          gradientId="sparkle-orange-1"
          from="#ff7a00"
          to="#ffb347"
          delay={0}
        />
      ) : null}
      <Sparkle
        className={rightSparkleClassName}
        gradientId="sparkle-orange-2"
        from="#ffb347"
        to="#ff7a00"
        delay={0.6}
      />
    </div>
  );
}
