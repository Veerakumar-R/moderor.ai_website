"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, MapPin, ShieldAlert } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;
const R = 20;
const CIRC = 2 * Math.PI * R;
const RISK = 34;
const GR = 18;
const GCIRC = 2 * Math.PI * GR;

const branches = [
  { name: "Mumbai HQ", pct: 92, risk: "Low", color: "#22a06b" },
  { name: "Delhi North", pct: 68, risk: "Med", color: "#ff7a00" },
  { name: "Pune West", pct: 45, risk: "High", color: "#d9640a" },
  { name: "Chennai East", pct: 78, risk: "Med", color: "#ffb347" },
];

const schedule = [
  { name: "Mumbai HQ", state: "Done" },
  { name: "Delhi North", state: "Active" },
  { name: "Pune West", state: "Queued" },
];

function BranchGridCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Branch Audits"
      sub="Progress by location"
      icon={<Building2 size={13} strokeWidth={2} />}
    >
      <div className="grid grid-cols-2 gap-2">
        {branches.map((b, i) => (
          <div
            key={b.name}
            className="flex items-center gap-2 rounded-lg border border-[#f3e6da] bg-[#fff5ec] px-2 py-1.5"
          >
            <div className="relative h-10 w-10 shrink-0">
              <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
                <circle cx="24" cy="24" r={R} fill="none" stroke="#f3e6da" strokeWidth="4" />
                <motion.circle
                  cx="24"
                  cy="24"
                  r={R}
                  fill="none"
                  stroke={b.color}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  initial={rm ? false : { strokeDashoffset: CIRC }}
                  animate={{ strokeDashoffset: CIRC * (1 - b.pct / 100) }}
                  transition={rm ? { duration: 0 } : { duration: 1.3, delay: 0.2 + i * 0.18, ease: EASE }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin size={12} strokeWidth={2} className="text-[#ff7a00]" />
              </div>
            </div>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-[#1b1410]">{b.name}</p>
              <p className="text-[9px] font-medium text-[#8a7d72]">
                {b.pct}% &middot; <span style={{ color: b.color }}>{b.risk}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

function ResidualCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0">
          <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
            <circle cx="24" cy="24" r={GR} fill="none" stroke="#ffe0c4" strokeWidth="5" />
            <motion.circle
              cx="24"
              cy="24"
              r={GR}
              fill="none"
              stroke="#d9640a"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={GCIRC}
              initial={rm ? false : { strokeDashoffset: GCIRC }}
              animate={{ strokeDashoffset: GCIRC * (1 - RISK / 100) }}
              transition={rm ? { duration: 0 } : { duration: 1.4, ease: EASE }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldAlert size={15} strokeWidth={2} className="text-[#d9640a]" />
          </div>
        </div>
        <div>
          <p className="text-lg font-bold leading-none text-[#1b1410]">{RISK}%</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">residual risk</p>
        </div>
      </div>
    </BentoCard>
  );
}

function ScheduleCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Audit Schedule" icon={<Building2 size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {schedule.map((s, i) => (
          <motion.li
            key={s.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            animate={rm ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          >
            <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{s.name}</span>
            <span className="rounded-full bg-[#ffe4cc] px-2 py-0.5 text-[9px] font-semibold text-[#d9640a]">
              {s.state}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function AiBranchAuditVisual() {
  return (
    <ProductBentoStack
      primary={<BranchGridCard />}
      secondary={<ResidualCard />}
      tertiary={<ScheduleCard />}
    />
  );
}
