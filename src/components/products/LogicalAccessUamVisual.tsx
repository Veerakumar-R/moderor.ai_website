"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, Lock, ShieldCheck, Unlock } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const tiles = [
  { label: "Finance", state: "granted" },
  { label: "Admin", state: "granted" },
  { label: "svc-legacy", state: "orphaned" },
  { label: "Support", state: "granted" },
  { label: "j.doe (90d)", state: "dormant" },
  { label: "Ops", state: "granted" },
];

export function LogicalAccessUamVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Logical Access
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Governed &amp; reviewed</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <ShieldCheck size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {tiles.map((t, i) => {
            const flagged = t.state !== "granted";
            return (
              <motion.div
                key={t.label}
                className={`relative flex aspect-square flex-col items-center justify-center gap-1.5 rounded-2xl border px-1 text-center ${
                  flagged
                    ? "border-[#ffd9bc] bg-[#fff2e6]"
                    : "border-[#f0ddcd] bg-[#fff5ec]"
                }`}
                initial={rm ? false : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={rm ? { duration: 0 } : { duration: 0.45, delay: 0.15 + i * 0.08, ease: EASE }}
              >
                <motion.span
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${
                    flagged ? "bg-white text-[#d9640a]" : "bg-white text-[#ff7a00]"
                  }`}
                  animate={
                    flagged && !rm
                      ? { scale: [1, 1.12, 1] }
                      : {}
                  }
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  {flagged ? <Unlock size={14} strokeWidth={2} /> : <Lock size={14} strokeWidth={2} />}
                </motion.span>
                <span className="text-[9px] font-semibold leading-tight text-[#1b1410]">{t.label}</span>
                {flagged && (
                  <span className="absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff7a00] text-white">
                    <AlertTriangle size={8} strokeWidth={2.6} />
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#fff5ec] px-3 py-2.5">
          <span className="text-[11px] font-medium text-[#5c4f48]">Guardrails</span>
          <span className="relative flex h-5 w-9 items-center rounded-full bg-[#ff7a00] px-0.5">
            <motion.span
              className="h-4 w-4 rounded-full bg-white shadow"
              initial={rm ? false : { x: 0 }}
              animate={{ x: 16 }}
              transition={rm ? { duration: 0 } : { duration: 0.6, delay: 0.9, ease: EASE }}
            />
          </span>
        </div>
      </div>

      <motion.div
        className="absolute -left-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <AlertTriangle size={12} strokeWidth={2.2} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">2 to revoke</span>
      </motion.div>
    </div>
  );
}
