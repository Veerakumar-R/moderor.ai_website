"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Styled white "device" card shell used inside a ProductBentoStack.
 * Header (kicker + sub + menu dots) is optional; body is `children`.
 */
export function BentoCard({
  kicker,
  sub,
  icon,
  accent = false,
  className = "",
  children,
}: {
  kicker?: string;
  sub?: string;
  icon?: ReactNode;
  accent?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-[0_16px_40px_rgba(255,122,0,0.16)] ${
        accent
          ? "border-[#ffcaa0] bg-gradient-to-br from-[#fff4ea] to-[#ffe4cc]"
          : "border-[#f0ddcd] bg-white"
      } ${className}`}
    >
      {(kicker || icon) && (
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            {icon && (
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#fff2e6] text-[#ff7a00]">
                {icon}
              </span>
            )}
            <div className="min-w-0">
              {kicker && (
                <p className="truncate text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#d9640a]">
                  {kicker}
                </p>
              )}
              {sub && <p className="truncate text-[10px] font-medium text-[#8a7d72]">{sub}</p>}
            </div>
          </div>
          <span className="flex shrink-0 flex-col gap-[3px]" aria-hidden>
            <span className="h-1 w-1 rounded-full bg-[#dcc3ad]" />
            <span className="h-1 w-1 rounded-full bg-[#dcc3ad]" />
            <span className="h-1 w-1 rounded-full bg-[#dcc3ad]" />
          </span>
        </div>
      )}
      {children}
    </div>
  );
}

/**
 * Overlapping "hanging" positions for the three cards (primary, secondary,
 * tertiary) — applied only at `sm+`. Below `sm` the stack collapses to a normal
 * full-width vertical layout (see the container), so the cards never cramp or
 * collide on mobile.
 */
const SLOTS = [
  "relative w-full sm:absolute sm:left-0 sm:top-1 sm:w-[75%] sm:z-[1]",
  "relative w-full sm:absolute sm:right-0 sm:top-[24%] sm:w-[52%] sm:z-[3]",
  "relative w-full sm:absolute sm:left-[7%] sm:bottom-0 sm:w-[60%] sm:z-[2]",
] as const;

/**
 * Auditor-Workbench-style overlapping card stack: three related cards hanging
 * on top of one another, each animating in with a stagger and lifting on hover.
 */
export function ProductBentoStack({
  primary,
  secondary,
  tertiary,
}: {
  primary: ReactNode;
  secondary: ReactNode;
  tertiary: ReactNode;
}) {
  const rm = useReducedMotion();
  const cards = [primary, secondary, tertiary];

  return (
    <div className="relative mx-auto flex w-full max-w-[440px] flex-col gap-3 sm:block sm:h-[380px] sm:gap-0">
      {cards.map((node, i) => (
        <motion.div
          key={i}
          className={SLOTS[i]}
          initial={rm ? false : { opacity: 0, y: 22 + i * 4, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.14 + i * 0.12, duration: 0.65, ease: EASE }}
          whileHover={rm ? undefined : { y: -5, scale: 1.02, zIndex: 20 }}
        >
          {node}
        </motion.div>
      ))}
    </div>
  );
}
