"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, FileJson, ListChecks } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const tests = [
  { method: "GET", path: "/orders" },
  { method: "POST", path: "/orders" },
  { method: "GET", path: "/orders/{id}" },
  { method: "PUT", path: "/orders/{id}" },
  { method: "DELETE", path: "/orders/{id}" },
];

export function QaSuiteVisual() {
  const rm = useReducedMotion();
  const stepDelay = 0.35;

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Test management
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Running suite</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <ListChecks size={18} strokeWidth={1.9} />
          </span>
        </div>

        {/* Source spec chip */}
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-[#f0ddcd] bg-[#fff5ec] px-3 py-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white text-[#d9640a]">
            <FileJson size={13} strokeWidth={2} />
          </span>
          <span className="text-[11px] font-medium text-[#5c4f48]">
            Generated from <span className="font-semibold text-[#1b1410]">openapi.yaml</span>
          </span>
        </div>

        {/* Test-case rows flipping to passing in sequence */}
        <div className="mt-4 space-y-2">
          {tests.map((t, i) => (
            <div
              key={t.path + t.method}
              className="flex items-center gap-2.5 rounded-xl border border-[#f0ddcd] bg-white px-3 py-2"
            >
              <motion.span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-white"
                initial={{ backgroundColor: "#f3e6da", scale: 1 }}
                animate={{
                  backgroundColor: "#ff7a00",
                  scale: rm ? 1 : [1, 1.25, 1],
                }}
                transition={
                  rm
                    ? { duration: 0 }
                    : { duration: 0.4, delay: 0.5 + i * stepDelay, ease: EASE }
                }
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={
                    rm ? { duration: 0 } : { duration: 0.3, delay: 0.5 + i * stepDelay }
                  }
                >
                  <Check size={13} strokeWidth={3} />
                </motion.span>
              </motion.span>

              <span className="w-[52px] shrink-0 rounded bg-[#fff2e6] px-1.5 py-0.5 text-center text-[9px] font-bold text-[#d9640a]">
                {t.method}
              </span>
              <span className="truncate text-[11px] font-medium text-[#5c4f48]">{t.path}</span>

              <motion.span
                className="ml-auto text-[10px] font-semibold text-[#ff7a00]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={
                  rm ? { duration: 0 } : { duration: 0.3, delay: 0.6 + i * stepDelay }
                }
              >
                pass
              </motion.span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex justify-between text-[11px] font-medium text-[#5c4f48]">
            <span>Suite progress</span>
            <span className="text-[#d9640a]">24 / 24</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#f3e6da]">
            <motion.span
              className="block h-full rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={
                rm ? { duration: 0 } : { duration: 2, delay: 0.5, ease: EASE }
              }
            />
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
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eaf7ec] text-[#3f9a52]"
          animate={rm ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Check size={12} strokeWidth={2.8} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">All passing</span>
      </motion.div>
    </div>
  );
}
