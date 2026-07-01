"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, Wand2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const COLS = 6;
const ROWS = 5;
const CELLS = Array.from({ length: COLS * ROWS }, (_, i) => i);
const CYCLE = 4.2; // seconds for one full generate sweep

const R = 15;
const CIRC = 2 * Math.PI * R;

export function SyntheticDataEngineVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Synthetic Data
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Generating dataset · users</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <Database size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="mt-6 flex items-center gap-5">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
              <circle cx="20" cy="20" r={R} fill="none" stroke="#f3e6da" strokeWidth="4" />
              <motion.circle
                cx="20"
                cy="20"
                r={R}
                fill="none"
                stroke="url(#sdeGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={{ strokeDashoffset: CIRC }}
                animate={rm ? { strokeDashoffset: 0 } : { strokeDashoffset: [CIRC, 0, 0] }}
                transition={
                  rm
                    ? { duration: 0 }
                    : { duration: CYCLE, times: [0, 0.85, 1], repeat: Infinity, ease: "easeInOut" }
                }
              />
              <defs>
                <linearGradient id="sdeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ff7a00" />
                  <stop offset="1" stopColor="#ffb347" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Wand2 size={16} strokeWidth={1.9} className="text-[#d9640a]" />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-6 gap-1.5">
            {CELLS.map((i) => {
              const row = Math.floor(i / COLS);
              const col = i % COLS;
              // diagonal sweep so cells "fill in" progressively
              const delay = ((row + col) / (ROWS + COLS)) * (CYCLE * 0.7);
              return (
                <motion.span
                  key={i}
                  className="aspect-square rounded-[3px]"
                  initial={{ backgroundColor: "#f3e6da" }}
                  animate={
                    rm
                      ? { backgroundColor: "#ff7a00" }
                      : { backgroundColor: ["#f3e6da", "#ffd9bc", "#ff7a00", "#f3e6da"] }
                  }
                  transition={
                    rm
                      ? { duration: 0 }
                      : {
                          duration: CYCLE,
                          times: [0, 0.15, 0.5, 1],
                          delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                />
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-[#fff5ec] px-3 py-2">
          <span className="font-mono text-[11px] text-[#5c4f48]">rows synthesized</span>
          <span className="font-mono text-[11px] font-semibold text-[#d9640a]">10,000 / 10,000</span>
        </div>
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: EASE }}
      >
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { rotate: [0, 12, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Wand2 size={12} strokeWidth={2.2} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">PII-safe</span>
      </motion.div>
    </div>
  );
}
