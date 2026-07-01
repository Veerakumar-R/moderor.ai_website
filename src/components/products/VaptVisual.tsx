"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { ShieldHalf, ScanLine } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const severities = [
  { label: "Critical", w: "88%", color: "#d9640a" },
  { label: "High", w: "66%", color: "#ff7a00" },
  { label: "Medium", w: "44%", color: "#ffb347" },
  { label: "Low", w: "24%", color: "#ffd9bc" },
];

function Counter({ to, reduced }: { to: number; reduced: boolean | null }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduced) {
      if (ref.current) ref.current.textContent = String(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [to, reduced]);

  return <span ref={ref}>0</span>;
}

export function VaptVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Vulnerability scan
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Findings normalized</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <ShieldHalf size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="mt-6 flex items-center gap-5">
          {/* Shield with scan sweep */}
          <div className="relative h-28 w-24 shrink-0">
            <svg viewBox="0 0 96 112" className="h-full w-full">
              <defs>
                <linearGradient id="vaptShield" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fff2e6" />
                  <stop offset="1" stopColor="#ffe6d0" />
                </linearGradient>
                <clipPath id="vaptClip">
                  <path d="M48 6 84 20 84 56 C84 82 68 98 48 106 C28 98 12 82 12 56 L12 20 Z" />
                </clipPath>
              </defs>
              <path
                d="M48 6 84 20 84 56 C84 82 68 98 48 106 C28 98 12 82 12 56 L12 20 Z"
                fill="url(#vaptShield)"
                stroke="#ffd9bc"
                strokeWidth="2"
              />
              {/* scan sweep */}
              {!rm && (
                <g clipPath="url(#vaptClip)">
                  <motion.rect
                    x="12"
                    y="0"
                    width="72"
                    height="10"
                    fill="url(#vaptSweep)"
                    animate={{ y: [6, 96, 6] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <linearGradient id="vaptSweep" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ff7a00" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#ff7a00" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
                  </linearGradient>
                </g>
              )}
              <motion.path
                d="M38 56 46 64 62 46"
                fill="none"
                stroke="#ff7a00"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={rm ? { duration: 0 } : { duration: 0.8, delay: 1, ease: EASE }}
              />
            </svg>
            <span className="absolute left-1/2 top-1 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[9px] font-semibold text-[#d9640a] shadow-sm">
              <ScanLine size={9} strokeWidth={2.4} />
              scanning
            </span>
          </div>

          {/* Severity bars */}
          <div className="flex-1 space-y-2.5">
            {severities.map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between text-[11px] font-medium text-[#5c4f48]">
                  <span>{s.label}</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-[#f3e6da]">
                  <motion.span
                    className="block h-full rounded-full"
                    style={{ backgroundColor: s.color }}
                    initial={{ width: 0 }}
                    animate={{ width: s.w }}
                    transition={
                      rm ? { duration: 0 } : { duration: 1, delay: 0.3 + i * 0.15, ease: EASE }
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CVEs normalized count */}
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#f0ddcd] bg-[#fff5ec] px-4 py-3">
          <span className="text-xs font-medium text-[#5c4f48]">CVEs normalized</span>
          <span className="text-xl font-bold text-[#1b1410]">
            <Counter to={1347} reduced={rm} />
          </span>
        </div>
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShieldHalf size={12} strokeWidth={2.2} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">12 critical</span>
      </motion.div>
    </div>
  );
}
