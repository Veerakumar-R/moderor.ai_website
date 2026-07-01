"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, ListChecks, Lock, ShieldCheck, Unlock } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;

const tiles = [
  { label: "Finance", state: "granted" },
  { label: "Admin", state: "granted" },
  { label: "svc-legacy", state: "orphaned" },
  { label: "Support", state: "granted" },
  { label: "j.doe 90d", state: "dormant" },
  { label: "Ops", state: "granted" },
];

const queue = [
  { name: "S. Patel · Prod DB", state: "Approved" },
  { name: "svc-legacy", state: "Revoke" },
  { name: "j.doe · VPN", state: "Review" },
];

function TilesCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Logical Access" sub="Governed & reviewed" icon={<ShieldCheck size={13} strokeWidth={2} />}>
      <div className="grid grid-cols-3 gap-1.5">
        {tiles.map((t, i) => {
          const flagged = t.state !== "granted";
          return (
            <motion.div
              key={t.label}
              className={`relative flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border px-1 text-center ${
                flagged ? "border-[#ffcaa0] bg-[#fff2e6]" : "border-[#f0ddcd] bg-[#fff5ec]"
              }`}
              initial={rm ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={rm ? { duration: 0 } : { duration: 0.45, delay: 0.15 + i * 0.08, ease: EASE }}
            >
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#ff7a00]"
                animate={flagged && !rm ? { scale: [1, 1.14, 1] } : {}}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                style={flagged ? { color: "#d9640a" } : undefined}
              >
                {flagged ? <Unlock size={12} strokeWidth={2} /> : <Lock size={12} strokeWidth={2} />}
              </motion.span>
              <span className="text-[8px] font-semibold leading-tight text-[#1b1410]">{t.label}</span>
              {flagged && (
                <span className="absolute right-0.5 top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-[#ff7a00] text-white">
                  <AlertTriangle size={7} strokeWidth={2.6} />
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="mt-2.5 flex items-center justify-between rounded-lg bg-[#fff5ec] px-2.5 py-1.5">
        <span className="text-[10px] font-medium text-[#5c4f48]">Guardrails</span>
        <span className="relative flex h-4 w-8 items-center rounded-full bg-[#ff7a00] px-0.5">
          <motion.span
            className="h-3 w-3 rounded-full bg-white shadow"
            initial={rm ? false : { x: 0 }}
            animate={{ x: 14 }}
            transition={rm ? { duration: 0 } : { duration: 0.6, delay: 0.9, ease: EASE }}
          />
        </span>
      </div>
    </BentoCard>
  );
}

function RevokeCard() {
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
          <p className="text-xl font-bold leading-none text-[#1b1410]">2</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">orphaned to revoke</p>
        </div>
      </div>
    </BentoCard>
  );
}

function QueueCard() {
  const rm = useReducedMotion();
  const tone = (s: string) =>
    s === "Revoke"
      ? "bg-[#ffe4cc] text-[#d9640a]"
      : s === "Review"
      ? "bg-[#fff2e6] text-[#a15a1e]"
      : "bg-[#f3e6da] text-[#5c4f48]";
  return (
    <BentoCard kicker="Access Requests" icon={<ListChecks size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {queue.map((q, i) => (
          <motion.li
            key={q.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            animate={rm ? {} : { opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          >
            <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{q.name}</span>
            <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${tone(q.state)}`}>
              {q.state}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function LogicalAccessUamVisual() {
  return (
    <ProductBentoStack primary={<TilesCard />} secondary={<RevokeCard />} tertiary={<QueueCard />} />
  );
}
