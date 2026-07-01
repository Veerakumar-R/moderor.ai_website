"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, UserCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const R = 26;
const CIRC = 2 * Math.PI * R;

const employees = [
  { name: "A. Fernandez", role: "Onboarding", pips: 5, passed: 5 },
  { name: "R. Okonkwo", role: "Payroll", pips: 5, passed: 4 },
  { name: "M. Nakamura", role: "Contracts", pips: 5, passed: 5 },
];

export function HrComplianceVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              HR Compliance
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Checkpoints passing</p>
          </div>
          <div className="relative h-14 w-14 shrink-0">
            <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
              <circle cx="32" cy="32" r={R} fill="none" stroke="#f3e6da" strokeWidth="6" />
              <motion.circle
                cx="32"
                cy="32"
                r={R}
                fill="none"
                stroke="url(#hrGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={{ strokeDashoffset: CIRC }}
                animate={{ strokeDashoffset: CIRC * (1 - 0.93) }}
                transition={rm ? { duration: 0 } : { duration: 1.4, ease: EASE }}
              />
              <defs>
                <linearGradient id="hrGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ff7a00" />
                  <stop offset="1" stopColor="#ffb347" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-[#1b1410]">93%</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3.5">
          {employees.map((e, ei) => (
            <div key={e.name} className="rounded-2xl bg-[#fff5ec] px-3 py-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
                    <UserCheck size={14} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold leading-tight text-[#1b1410]">{e.name}</p>
                    <p className="text-[10px] leading-tight text-[#8a7d72]">{e.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: e.pips }).map((_, pi) => {
                    const isPass = pi < e.passed;
                    return (
                      <motion.span
                        key={pi}
                        className={`flex h-4 w-4 items-center justify-center rounded-full ${
                          isPass ? "bg-[#ff7a00]" : "border border-[#ffd9bc] bg-white"
                        }`}
                        initial={rm ? false : { scale: 0.4, opacity: 0.3 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={
                          rm
                            ? { duration: 0 }
                            : {
                                duration: 0.4,
                                delay: 0.3 + ei * 0.35 + pi * 0.12,
                                ease: EASE,
                              }
                        }
                      >
                        {isPass && <Check size={10} strokeWidth={3} className="text-white" />}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -bottom-3 -right-2 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { scale: [1, 1.18, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Check size={12} strokeWidth={2.6} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">14 checkpoints passed</span>
      </motion.div>
    </div>
  );
}
