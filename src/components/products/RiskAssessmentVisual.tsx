"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, ClipboardList, ShieldCheck } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCORE = 82;
const R = 26;
const CIRC = 2 * Math.PI * R;

const vendors = [
  { name: "ACME Corp", score: 82, level: "High" },
  { name: "Globex Ltd", score: 54, level: "Med" },
];

const queue = [
  { name: "Umbrella Inc", state: "Scoring" },
  { name: "Soylent Co", state: "Onboarding" },
];

function GaugeCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Vendor Risk" sub="Continuously scored" icon={<ShieldCheck size={13} strokeWidth={2} />}>
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0">
          <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
            <circle cx="32" cy="32" r={R} fill="none" stroke="#f3e6da" strokeWidth="7" />
            <motion.circle
              cx="32"
              cy="32"
              r={R}
              fill="none"
              stroke="url(#raGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={rm ? false : { strokeDashoffset: CIRC }}
              animate={{ strokeDashoffset: CIRC * (1 - SCORE / 100) }}
              transition={rm ? { duration: 0 } : { duration: 1.4, ease: EASE }}
            />
            <defs>
              <linearGradient id="raGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff7a00" />
                <stop offset="1" stopColor="#ffb347" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-[#1b1410]">{SCORE}</span>
            <span className="text-[9px] font-medium text-[#8a7d72]">risk</span>
          </div>
        </div>
        <div className="flex-1 space-y-2.5">
          {vendors.map((v, i) => (
            <div key={v.name}>
              <div className="flex justify-between text-[10.5px] font-medium text-[#5c4f48]">
                <span className="truncate">{v.name}</span>
                <span className="text-[#d9640a]">{v.level}</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#f3e6da]">
                <motion.span
                  className="block h-full rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
                  initial={rm ? false : { width: 0 }}
                  animate={{ width: `${v.score}%` }}
                  transition={rm ? { duration: 0 } : { duration: 1, delay: 0.3 + i * 0.15, ease: EASE }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function FlaggedCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <AlertTriangle size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">3</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">flagged vendors</p>
        </div>
      </div>
    </BentoCard>
  );
}

function QueueCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Attention Queue" icon={<ClipboardList size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {queue.map((q, i) => (
          <motion.li
            key={q.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            animate={rm ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
          >
            <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{q.name}</span>
            <span className="rounded-full bg-[#ffe4cc] px-2 py-0.5 text-[9px] font-semibold text-[#d9640a]">
              {q.state}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function RiskAssessmentVisual() {
  return (
    <ProductBentoStack primary={<GaugeCard />} secondary={<FlaggedCard />} tertiary={<QueueCard />} />
  );
}
