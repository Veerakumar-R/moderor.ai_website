"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCORE = 82;
const R = 34;
const CIRC = 2 * Math.PI * R;

const vendors = [
  { name: "ACME Corp", score: 82, level: "High" },
  { name: "Globex Ltd", score: 54, level: "Medium" },
  { name: "Initech", score: 28, level: "Low" },
];

export function RiskAssessmentVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Vendor Risk
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Continuously scored</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <ShieldCheck size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="mt-6 flex items-center gap-5">
          <div className="relative h-24 w-24 shrink-0">
            <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
              <circle cx="40" cy="40" r={R} fill="none" stroke="#f3e6da" strokeWidth="8" />
              <motion.circle
                cx="40"
                cy="40"
                r={R}
                fill="none"
                stroke="url(#riskGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={{ strokeDashoffset: CIRC }}
                animate={{ strokeDashoffset: CIRC * (1 - SCORE / 100) }}
                transition={rm ? { duration: 0 } : { duration: 1.4, ease: EASE }}
              />
              <defs>
                <linearGradient id="riskGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ff7a00" />
                  <stop offset="1" stopColor="#ffb347" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#1b1410]">{SCORE}</span>
              <span className="text-[10px] font-medium text-[#8a7d72]">risk</span>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            {vendors.map((v, i) => (
              <div key={v.name}>
                <div className="flex justify-between text-[11px] font-medium text-[#5c4f48]">
                  <span>{v.name}</span>
                  <span className="text-[#d9640a]">{v.level}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#f3e6da]">
                  <motion.span
                    className="block h-full rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
                    initial={{ width: 0 }}
                    animate={{ width: `${v.score}%` }}
                    transition={rm ? { duration: 0 } : { duration: 1, delay: 0.3 + i * 0.15, ease: EASE }}
                  />
                </div>
              </div>
            ))}
          </div>
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
          <AlertTriangle size={12} strokeWidth={2.2} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">3 flagged</span>
      </motion.div>
    </div>
  );
}
