"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Wand2, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AiAppBuilderVisual() {
  const rm = useReducedMotion();

  const pop = (delay: number) => ({
    initial: rm ? false : { opacity: 0, scale: 0.6, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: rm ? { duration: 0 } : { duration: 0.5, delay, ease: EASE },
  });

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Prompt to prototype
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Building your app</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <Wand2 size={18} strokeWidth={1.9} />
          </span>
        </div>

        {/* Prompt input bar */}
        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-[#f0ddcd] bg-[#fff5ec] p-2 pl-3">
          <span className="text-xs text-[#5c4f48]">
            Build a{" "}
            <span className="font-semibold text-[#d9640a]">customer dashboard</span>
          </span>
          {!rm && (
            <motion.span
              className="ml-0.5 inline-block h-3.5 w-[2px] rounded-full bg-[#ff7a00]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <motion.span
            className="ml-auto flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#ffb347] text-white shadow-[0_6px_14px_rgba(255,122,0,0.35)]"
            animate={rm ? {} : { scale: [1, 0.9, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap size={14} strokeWidth={2.2} fill="currentColor" />
          </motion.span>
        </div>

        {/* Assembling app preview: wireframe tiles pop in staggered */}
        <div className="mt-5 rounded-2xl border border-[#f0ddcd] bg-[#fff5ec] p-3">
          {/* top bar */}
          <motion.div className="flex items-center gap-1.5" {...pop(0.3)}>
            <span className="h-2 w-2 rounded-full bg-[#ffb347]" />
            <span className="h-2 w-2 rounded-full bg-[#ffd9bc]" />
            <span className="ml-2 h-2 flex-1 rounded-full bg-white" />
          </motion.div>

          <div className="mt-3 flex gap-2">
            {/* sidebar */}
            <motion.div
              className="flex w-1/4 flex-col gap-1.5 rounded-lg bg-white p-2"
              {...pop(0.45)}
            >
              <span className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]" />
              <span className="h-1.5 w-4/5 rounded-full bg-[#f3e6da]" />
              <span className="h-1.5 w-3/5 rounded-full bg-[#f3e6da]" />
              <span className="h-1.5 w-4/5 rounded-full bg-[#f3e6da]" />
            </motion.div>

            {/* main content */}
            <div className="flex-1 space-y-2">
              <div className="flex gap-2">
                <motion.div
                  className="h-12 flex-1 rounded-lg bg-white p-2"
                  {...pop(0.6)}
                >
                  <span className="block h-1.5 w-8 rounded-full bg-[#ffd9bc]" />
                  <span className="mt-2 block h-3 w-10 rounded bg-gradient-to-r from-[#ff7a00] to-[#ffb347]" />
                </motion.div>
                <motion.div
                  className="h-12 flex-1 rounded-lg bg-white p-2"
                  {...pop(0.72)}
                >
                  <span className="block h-1.5 w-8 rounded-full bg-[#ffd9bc]" />
                  <span className="mt-2 block h-3 w-8 rounded bg-[#f3e6da]" />
                </motion.div>
              </div>
              <motion.div
                className="flex h-12 items-end gap-1.5 rounded-lg bg-white p-2"
                {...pop(0.84)}
              >
                {[45, 70, 35, 85, 55, 65].map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#ff7a00] to-[#ffb347]"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={
                      rm ? { duration: 0 } : { duration: 0.5, delay: 0.95 + i * 0.07, ease: EASE }
                    }
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { rotate: [0, 12, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap size={12} strokeWidth={2.2} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">Prototype ready</span>
      </motion.div>
    </div>
  );
}
