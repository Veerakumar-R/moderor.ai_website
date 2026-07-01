"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Check, ShieldCheck } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCORE = 96;
const R = 24;
const CIRC = 2 * Math.PI * R;

const rows = [
  { name: "Access reviews", cat: "ITGC" },
  { name: "Change management", cat: "SOC 2" },
  { name: "Data retention", cat: "GDPR" },
];

const frameworks = [
  { name: "ITGC", state: "Passing" },
  { name: "GDPR", state: "Passing" },
  { name: "SOC 2", state: "In review" },
];

const STEP = 0.5;
const N = rows.length;

function GaugeCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Control Checks"
      sub="Evaluated live"
      icon={<Activity size={13} strokeWidth={2} />}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-[72px] w-[72px] shrink-0">
          <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
            <circle cx="32" cy="32" r={R} fill="none" stroke="#f3e6da" strokeWidth="7" />
            <motion.circle
              cx="32"
              cy="32"
              r={R}
              fill="none"
              stroke="url(#ccmGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={rm ? false : { strokeDashoffset: CIRC }}
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
            <span className="text-base font-bold text-[#1b1410]">{SCORE}%</span>
            <span className="text-[9px] font-medium text-[#8a7d72]">compliant</span>
          </div>
        </div>
        <div className="flex-1 space-y-1.5">
          {rows.map((c, i) => (
            <div
              key={c.name}
              className="flex items-center gap-2 rounded-lg border border-[#f3e6da] bg-[#fff5ec] px-2 py-1.5"
            >
              <motion.span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
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
                <Check size={10} strokeWidth={3} />
              </motion.span>
              <span className="flex-1 truncate text-[10px] font-medium text-[#5c4f48]">
                {c.name}
              </span>
              <span className="rounded-full bg-white px-1.5 py-0.5 text-[8.5px] font-semibold text-[#d9640a]">
                {c.cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function PassingCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShieldCheck size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">96%</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">controls passing</p>
        </div>
      </div>
    </BentoCard>
  );
}

function FrameworksCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Frameworks" icon={<Check size={13} strokeWidth={2.4} />}>
      <ul className="space-y-1.5">
        {frameworks.map((f, i) => (
          <motion.li
            key={f.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            animate={rm ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          >
            <span className="truncate text-[10.5px] font-semibold text-[#5c4f48]">{f.name}</span>
            <span className="rounded-full bg-[#ffe4cc] px-2 py-0.5 text-[9px] font-semibold text-[#d9640a]">
              {f.state}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function ContinuousComplianceMonitoringVisual() {
  return (
    <ProductBentoStack
      primary={<GaugeCard />}
      secondary={<PassingCard />}
      tertiary={<FrameworksCard />}
    />
  );
}
