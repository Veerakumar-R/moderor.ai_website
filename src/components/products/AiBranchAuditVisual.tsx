"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const R = 22;
const CIRC = 2 * Math.PI * R;

const branches = [
  { name: "Mumbai HQ", pct: 92, risk: "Low", color: "#22a06b" },
  { name: "Delhi North", pct: 68, risk: "Medium", color: "#ff7a00" },
  { name: "Pune West", pct: 45, risk: "High", color: "#d9640a" },
  { name: "Chennai East", pct: 78, risk: "Medium", color: "#ffb347" },
];

const legend = [
  { label: "Low", color: "#22a06b" },
  { label: "Medium", color: "#ff7a00" },
  { label: "High", color: "#d9640a" },
];

export function AiBranchAuditVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Branch Audits
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Progress by location</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <Building2 size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {branches.map((b, i) => (
            <div
              key={b.name}
              className="flex items-center gap-3 rounded-xl border border-[#f3e6da] bg-[#fff5ec] px-3 py-2.5"
            >
              <div className="relative h-12 w-12 shrink-0">
                <svg viewBox="0 0 56 56" className="h-full w-full -rotate-90">
                  <circle cx="28" cy="28" r={R} fill="none" stroke="#f3e6da" strokeWidth="5" />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r={R}
                    fill="none"
                    stroke={b.color}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    initial={{ strokeDashoffset: CIRC }}
                    animate={{ strokeDashoffset: CIRC * (1 - b.pct / 100) }}
                    transition={
                      rm ? { duration: 0 } : { duration: 1.3, delay: 0.2 + i * 0.18, ease: EASE }
                    }
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin size={14} strokeWidth={2} className="text-[#ff7a00]" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-[#1b1410]">{b.name}</p>
                <p className="text-[11px] font-medium text-[#8a7d72]">
                  {b.pct}% &middot; <span style={{ color: b.color }}>{b.risk}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-[#f3e6da] bg-white px-4 py-2.5">
          <span className="text-[11px] font-semibold text-[#5c4f48]">Residual risk by region</span>
          <div className="flex items-center gap-3">
            {legend.map((l) => (
              <span key={l.label} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: l.color }} />
                <span className="text-[10px] font-medium text-[#8a7d72]">{l.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { scale: [1, 1.18, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin size={12} strokeWidth={2.4} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">4 branches in scope</span>
      </motion.div>
    </div>
  );
}
