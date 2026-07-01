"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, FileText, Sparkles, Workflow, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const CYCLE = 4.4;

const stages = [
  { label: "Processing", Icon: FileText },
  { label: "Intelligence", Icon: Sparkles },
  { label: "Execution", Icon: Zap },
  { label: "Reports", Icon: BarChart3 },
];

// horizontal position (in %) of each stage centre
const stops = [12, 37.33, 62.66, 88];

export function RegulatoryComplianceVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Obligation Pipeline
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Circular to controlled</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <Workflow size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="relative mt-10 mb-2">
          {/* base track */}
          <div className="absolute left-[12%] right-[12%] top-5 h-0.5 -translate-y-1/2 rounded-full bg-[#f3e6da]" />
          {/* animated fill sweeping along the track */}
          <motion.div
            className="absolute top-5 h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
            style={{ left: "12%" }}
            initial={{ width: "0%" }}
            animate={rm ? { width: "76%" } : { width: ["0%", "76%", "76%", "0%"] }}
            transition={
              rm
                ? { duration: 0 }
                : { duration: CYCLE, repeat: Infinity, ease: EASE, times: [0, 0.7, 0.85, 1] }
            }
          />

          {/* traveling document token */}
          {!rm && (
            <motion.div
              className="absolute top-5 z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-[#ff7a00] text-white shadow-[0_6px_14px_rgba(255,122,0,0.4)]"
              animate={{ left: stops.map((s) => `${s}%`) }}
              transition={{
                duration: CYCLE,
                repeat: Infinity,
                ease: EASE,
                times: [0, 0.28, 0.56, 0.84],
              }}
            >
              <FileText size={13} strokeWidth={2.2} />
            </motion.div>
          )}

          {/* stage nodes */}
          <div className="relative flex justify-between">
            {stages.map((s, i) => (
              <div key={s.label} className="flex w-1/4 flex-col items-center">
                <motion.span
                  className="flex h-10 w-10 items-center justify-center rounded-full border bg-white"
                  initial={rm ? false : { borderColor: "#f0ddcd", color: "#8a7d72" }}
                  animate={
                    rm
                      ? { borderColor: "#ffd9bc", color: "#ff7a00" }
                      : {
                          borderColor: ["#f0ddcd", "#ff7a00", "#f0ddcd"],
                          color: ["#8a7d72", "#ff7a00", "#8a7d72"],
                          scale: [1, 1.12, 1],
                        }
                  }
                  transition={
                    rm
                      ? { duration: 0 }
                      : {
                          duration: 0.6,
                          repeat: Infinity,
                          repeatDelay: CYCLE - 0.6,
                          delay: (CYCLE * 0.28 * i) + 0.1,
                          ease: EASE,
                        }
                  }
                >
                  <s.Icon size={17} strokeWidth={2} />
                </motion.span>
                <span className="mt-2 text-center text-[10px] font-semibold leading-tight text-[#5c4f48]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-[#f3e6da] bg-[#fff5ec] px-4 py-3">
          <p className="text-[11px] font-medium text-[#8a7d72]">Latest obligation</p>
          <p className="mt-0.5 text-[13px] font-semibold text-[#1b1410]">
            RBI Master Circular &rarr; 6 mapped controls
          </p>
        </div>
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span className="h-2 w-2 rounded-full bg-[#22a06b]" />
        <span className="text-[11px] font-semibold text-[#1b1410]">4 stages automated</span>
      </motion.div>
    </div>
  );
}
