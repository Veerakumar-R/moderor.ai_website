"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, FileJson, ListChecks } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;
const STEP = 0.32;
const R = 24;
const CIRC = 2 * Math.PI * R;

const tests = [
  { method: "GET", path: "/orders" },
  { method: "POST", path: "/orders" },
  { method: "PUT", path: "/orders/{id}" },
  { method: "DELETE", path: "/orders/{id}" },
];

const endpoints = [
  { method: "GET", path: "/users" },
  { method: "POST", path: "/auth" },
  { method: "GET", path: "/invoices" },
];

function SuiteCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Test management"
      sub="Running suite"
      icon={<ListChecks size={13} strokeWidth={2} />}
    >
      {/* Test-case rows flipping to checks */}
      <div className="space-y-1.5">
        {tests.map((t, i) => (
          <div
            key={t.method + t.path}
            className="flex items-center gap-2 rounded-lg border border-[#f0ddcd] bg-white px-2 py-1.5"
          >
            <motion.span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md text-white"
              initial={rm ? false : { backgroundColor: "#f3e6da", scale: 1 }}
              animate={{ backgroundColor: "#ff7a00", scale: rm ? 1 : [1, 1.25, 1] }}
              transition={rm ? { duration: 0 } : { duration: 0.4, delay: 0.5 + i * STEP, ease: EASE }}
            >
              <motion.span
                initial={rm ? false : { opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={rm ? { duration: 0 } : { duration: 0.3, delay: 0.5 + i * STEP }}
              >
                <Check size={11} strokeWidth={3} />
              </motion.span>
            </motion.span>
            <span className="w-[48px] shrink-0 rounded bg-[#fff2e6] px-1 py-0.5 text-center text-[8.5px] font-bold text-[#d9640a]">
              {t.method}
            </span>
            <span className="truncate text-[10px] font-medium text-[#5c4f48]">{t.path}</span>
            <motion.span
              className="ml-auto text-[9px] font-semibold text-[#ff7a00]"
              initial={rm ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={rm ? { duration: 0 } : { duration: 0.3, delay: 0.6 + i * STEP }}
            >
              pass
            </motion.span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="flex justify-between text-[10px] font-medium text-[#5c4f48]">
          <span>Suite progress</span>
          <span className="text-[#d9640a]">24 / 24</span>
        </div>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#f3e6da]">
          <motion.span
            className="block h-full rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
            initial={rm ? false : { width: 0 }}
            animate={{ width: "100%" }}
            transition={rm ? { duration: 0 } : { duration: 2, delay: 0.5, ease: EASE }}
          />
        </div>
      </div>
    </BentoCard>
  );
}

function PassingCard() {
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
              stroke="url(#qaRing)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={rm ? false : { strokeDashoffset: CIRC }}
              animate={{ strokeDashoffset: 0 }}
              transition={rm ? { duration: 0 } : { duration: 1.6, ease: EASE }}
            />
            <defs>
              <linearGradient id="qaRing" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff7a00" />
                <stop offset="1" stopColor="#ffb347" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[#3f9a52]">
            <Check size={20} strokeWidth={3} />
          </div>
        </div>
        <div>
          <p className="text-lg font-bold leading-none text-[#1b1410]">24 / 24</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">tests passing</p>
        </div>
      </div>
    </BentoCard>
  );
}

function SpecCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="From OpenAPI" icon={<FileJson size={13} strokeWidth={2} />}>
      <div className="mb-2 flex items-center gap-1.5 rounded-lg border border-[#f0ddcd] bg-[#fff5ec] px-2 py-1">
        <span className="flex h-4 w-4 items-center justify-center rounded bg-white text-[#d9640a]">
          <FileJson size={10} strokeWidth={2.2} />
        </span>
        <span className="truncate text-[9.5px] font-semibold text-[#1b1410]">openapi.yaml</span>
      </div>
      <ul className="space-y-1">
        {endpoints.map((e, i) => (
          <motion.li
            key={e.method + e.path}
            className="flex items-center gap-1.5 rounded-lg bg-[#fff7f0] px-2 py-1"
            initial={rm ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={rm ? { duration: 0 } : { duration: 0.4, delay: 0.35 + i * 0.14, ease: EASE }}
          >
            <span className="w-[42px] shrink-0 rounded bg-[#fff2e6] px-1 py-0.5 text-center text-[8px] font-bold text-[#d9640a]">
              {e.method}
            </span>
            <span className="truncate text-[9.5px] font-medium text-[#5c4f48]">{e.path}</span>
            <span className="ml-auto flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#eaf7ec] text-[#3f9a52]">
              <Check size={9} strokeWidth={3} />
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function QaSuiteVisual() {
  return (
    <ProductBentoStack primary={<SuiteCard />} secondary={<PassingCard />} tertiary={<SpecCard />} />
  );
}
