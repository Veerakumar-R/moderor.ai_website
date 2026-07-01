"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, Gauge, ListChecks } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;
const R = 24;
const CIRC = 2 * Math.PI * R;

const lines = [
  { w: "62%", strong: true },
  { w: "88%", strong: false },
  { w: "74%", strong: false },
  { w: "94%", strong: false },
  { w: "68%", strong: false },
];

const reqs = [
  { label: "REQ-01", state: "Ready" },
  { label: "REQ-02", state: "Ready" },
  { label: "REQ-03", state: "Draft" },
  { label: "REQ-04", state: "Draft" },
];

function DocCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Business Req Doc"
      sub="Drafting BRD v3"
      icon={<FileText size={13} strokeWidth={2} />}
    >
      {/* Title block */}
      <div className="mb-3 space-y-1.5">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
          initial={rm ? false : { width: 0 }}
          animate={{ width: "56%" }}
          transition={rm ? { duration: 0 } : { duration: 0.6, ease: EASE }}
        />
        <motion.div
          className="h-1.5 rounded-full bg-[#f3e6da]"
          initial={rm ? false : { width: 0 }}
          animate={{ width: "38%" }}
          transition={rm ? { duration: 0 } : { duration: 0.6, delay: 0.12, ease: EASE }}
        />
      </div>
      {/* Requirement lines filling in sequence */}
      <div className="space-y-2">
        {lines.map((l, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                l.strong ? "bg-[#ff7a00]" : "bg-[#ffcaa0]"
              }`}
            />
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#fff5ec]">
              <motion.span
                className={`block h-full rounded-full ${
                  l.strong
                    ? "bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
                    : "bg-[#f3e6da]"
                }`}
                initial={rm ? false : { width: 0 }}
                animate={{ width: l.w }}
                transition={
                  rm ? { duration: 0 } : { duration: 0.55, delay: 0.3 + i * 0.22, ease: EASE }
                }
              />
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

function ScoreCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-3">
        <div className="relative h-16 w-16 shrink-0">
          <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
            <circle cx="30" cy="30" r={R} fill="none" stroke="#ffe0c4" strokeWidth="6" />
            <motion.circle
              cx="30"
              cy="30"
              r={R}
              fill="none"
              stroke="url(#brdScore)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={rm ? false : { strokeDashoffset: CIRC }}
              animate={{ strokeDashoffset: CIRC * (1 - 0.94) }}
              transition={rm ? { duration: 0 } : { duration: 1.4, ease: EASE }}
            />
            <defs>
              <linearGradient id="brdScore" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff7a00" />
                <stop offset="1" stopColor="#ffb347" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold leading-none text-[#1b1410]">94</span>
            <span className="text-[8px] font-medium text-[#a15a1e]">score</span>
          </div>
        </div>
        <div>
          <p className="flex items-center gap-1 text-[11px] font-bold text-[#a15a1e]">
            <Gauge size={12} strokeWidth={2.2} />
            Quality score
          </p>
          <p className="mt-0.5 text-[10px] font-medium text-[#8a7d72]">Clear, testable, complete</p>
        </div>
      </div>
    </BentoCard>
  );
}

function ReqListCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Requirements" icon={<ListChecks size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {reqs.map((r, i) => {
          const ready = r.state === "Ready";
          return (
            <motion.li
              key={r.label}
              className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
              initial={rm ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={rm ? { duration: 0 } : { duration: 0.45, delay: 0.3 + i * 0.14, ease: EASE }}
            >
              <span className="truncate text-[10.5px] font-semibold text-[#5c4f48]">{r.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                  ready
                    ? "bg-[#ffe4cc] text-[#d9640a]"
                    : "bg-[#f3e6da] text-[#8a7d72]"
                }`}
              >
                {r.state}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </BentoCard>
  );
}

export function AiBrdGeneratorVisual() {
  return (
    <ProductBentoStack primary={<DocCard />} secondary={<ScoreCard />} tertiary={<ReqListCard />} />
  );
}
