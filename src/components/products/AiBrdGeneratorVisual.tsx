"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const requirements = [
  { label: "REQ-01", w: "92%" },
  { label: "REQ-02", w: "76%" },
  { label: "REQ-03", w: "84%" },
  { label: "REQ-04", w: "64%" },
];

export function AiBrdGeneratorVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Business Requirements
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Drafting BRD v3</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <FileText size={18} strokeWidth={1.9} />
          </span>
        </div>

        {/* Document title line */}
        <div className="mt-6 space-y-2">
          <motion.div
            className="h-3 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
            initial={{ width: 0 }}
            animate={{ width: "58%" }}
            transition={rm ? { duration: 0 } : { duration: 0.7, ease: EASE }}
          />
          <motion.div
            className="h-2 rounded-full bg-[#f3e6da]"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={rm ? { duration: 0 } : { duration: 0.7, delay: 0.15, ease: EASE }}
          />
        </div>

        {/* Requirement rows that fill in one after another with a shimmer */}
        <div className="mt-5 space-y-3">
          {requirements.map((r, i) => (
            <div key={r.label} className="flex items-center gap-3">
              <span className="w-[46px] shrink-0 text-[10px] font-semibold text-[#8a7d72]">
                {r.label}
              </span>
              <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-[#fff5ec]">
                <motion.span
                  className="block h-full rounded-full bg-[#f3e6da]"
                  initial={{ width: 0 }}
                  animate={{ width: r.w }}
                  transition={
                    rm ? { duration: 0 } : { duration: 0.6, delay: 0.4 + i * 0.28, ease: EASE }
                  }
                >
                  {!rm && (
                    <motion.span
                      className="block h-full w-full bg-gradient-to-r from-transparent via-[#ffd9bc] to-transparent"
                      animate={{ x: ["-100%", "180%"] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4 + i * 0.28,
                      }}
                    />
                  )}
                </motion.span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality score gauge */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#f0ddcd] bg-[#fff5ec] p-3">
          <div className="relative h-14 w-14 shrink-0">
            <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
              <circle cx="30" cy="30" r="24" fill="none" stroke="#f3e6da" strokeWidth="6" />
              <motion.circle
                cx="30"
                cy="30"
                r="24"
                fill="none"
                stroke="url(#brdGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 24}
                initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 24 * (1 - 0.94) }}
                transition={rm ? { duration: 0 } : { duration: 1.4, delay: 0.6, ease: EASE }}
              />
              <defs>
                <linearGradient id="brdGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ff7a00" />
                  <stop offset="1" stopColor="#ffb347" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-[#1b1410]">94</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1b1410]">Quality score</p>
            <p className="text-[11px] text-[#8a7d72]">Clear, testable, complete</p>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={12} strokeWidth={2.2} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">AI drafted</span>
      </motion.div>
    </div>
  );
}
