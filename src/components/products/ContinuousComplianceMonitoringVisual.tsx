"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCORE = 96;
const R = 34;
const CIRC = 2 * Math.PI * R;

const controls = [
  { name: "ITGC access reviews", cat: "SOC 2" },
  { name: "Data retention & DPDP", cat: "GDPR" },
  { name: "Cardholder data scope", cat: "PCI DSS" },
  { name: "Vendor access tokens", cat: "RBI" },
  { name: "Change management", cat: "ITGC" },
];

const STEP = 0.42;
const N = controls.length;

export function ContinuousComplianceMonitoringVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Control Checks
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Evaluating continuously</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <Activity size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="mt-5 flex items-center gap-5">
          <div className="relative h-24 w-24 shrink-0">
            <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
              <circle cx="40" cy="40" r={R} fill="none" stroke="#f3e6da" strokeWidth="8" />
              <motion.circle
                cx="40"
                cy="40"
                r={R}
                fill="none"
                stroke="url(#ccmGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={{ strokeDashoffset: CIRC }}
                animate={{ strokeDashoffset: CIRC * (1 - SCORE / 100) }}
                transition={rm ? { duration: 0 } : { duration: 1.5, ease: EASE }}
              />
              <defs>
                <linearGradient id="ccmGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ff7a00" />
                  <stop offset="1" stopColor="#ffb347" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#1b1410]">{SCORE}%</span>
              <span className="text-[10px] font-medium text-[#8a7d72]">compliant</span>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-[11px] font-medium text-[#8a7d72]">160+ sub-controls</p>
            <p className="mt-1 text-[13px] font-semibold leading-snug text-[#1b1410]">
              74&ndash;106 control categories under live evaluation.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          {controls.map((c, i) => (
            <div
              key={c.name}
              className="flex items-center gap-3 rounded-xl border border-[#f3e6da] bg-[#fff5ec] px-3 py-2"
            >
              <motion.span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
                initial={rm ? false : { scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={
                  rm
                    ? { duration: 0 }
                    : {
                        duration: 0.3,
                        delay: i * STEP,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: N * STEP,
                        ease: EASE,
                      }
                }
              >
                <Check size={12} strokeWidth={3} />
              </motion.span>
              <span className="flex-1 truncate text-[12px] font-medium text-[#5c4f48]">
                {c.name}
              </span>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-[#d9640a]">
                {c.cat}
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.span
          className="h-2 w-2 rounded-full bg-[#22a06b]"
          animate={rm ? {} : { opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[11px] font-semibold text-[#1b1410]">Live monitor</span>
      </motion.div>
    </div>
  );
}
