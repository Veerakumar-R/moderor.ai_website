"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, ClipboardCheck, UserCheck, X } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;
const PCT = 93;
const R = 26;
const CIRC = 2 * Math.PI * R;

const rows = [
  { name: "A. Fernandez", role: "Onboarding", pips: 5, passed: 5 },
  { name: "R. Okonkwo", role: "Payroll", pips: 5, passed: 4 },
];

const roster = [
  { name: "A. Fernandez", pass: true },
  { name: "R. Okonkwo", pass: true },
  { name: "M. Nakamura", pass: false },
];

function RingCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="HR Compliance" sub="Checkpoints passing" icon={<UserCheck size={13} strokeWidth={2} />}>
      <div className="flex items-center gap-3.5">
        <div className="relative h-[68px] w-[68px] shrink-0">
          <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
            <circle cx="32" cy="32" r={R} fill="none" stroke="#f3e6da" strokeWidth="7" />
            <motion.circle
              cx="32"
              cy="32"
              r={R}
              fill="none"
              stroke="url(#hrGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={rm ? false : { strokeDashoffset: CIRC }}
              animate={{ strokeDashoffset: CIRC * (1 - PCT / 100) }}
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
            <span className="text-base font-bold text-[#1b1410]">{PCT}%</span>
            <span className="text-[8px] font-medium text-[#8a7d72]">passing</span>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {rows.map((e, ei) => (
            <div key={e.name}>
              <p className="truncate text-[10.5px] font-semibold text-[#1b1410]">{e.name}</p>
              <div className="mt-1 flex items-center gap-1.5">
                {Array.from({ length: e.pips }).map((_, pi) => {
                  const isPass = pi < e.passed;
                  return (
                    <motion.span
                      key={pi}
                      className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                        isPass ? "bg-[#ff7a00]" : "border border-[#ffd9bc] bg-white"
                      }`}
                      animate={rm || !isPass ? {} : { scale: [1, 1.25, 1] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 2.4,
                        delay: ei * 0.4 + pi * 0.18,
                        ease: "easeInOut",
                      }}
                    >
                      {isPass && <Check size={8} strokeWidth={3.4} className="text-white" />}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function PassedCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Check size={16} strokeWidth={2.6} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">14</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">checkpoints passed</p>
        </div>
      </div>
    </BentoCard>
  );
}

function RosterCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Employees" icon={<ClipboardCheck size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {roster.map((r, i) => (
          <motion.li
            key={r.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            animate={rm ? {} : { opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          >
            <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{r.name}</span>
            <span
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                r.pass ? "bg-[#ffe4cc] text-[#d9640a]" : "bg-[#fff2e6] text-[#a15a1e]"
              }`}
            >
              {r.pass ? <Check size={9} strokeWidth={3} /> : <X size={9} strokeWidth={3} />}
              {r.pass ? "Pass" : "Review"}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function HrComplianceVisual() {
  return (
    <ProductBentoStack primary={<RingCard />} secondary={<PassedCard />} tertiary={<RosterCard />} />
  );
}
