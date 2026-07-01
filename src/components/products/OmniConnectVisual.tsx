"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, Phone, User } from "lucide-react";

const waves = [0, 1, 2];

export function OmniConnectVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Omni Connect
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Re-engaging drop-offs</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <Phone size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="mt-4 flex h-44 items-center justify-center">
          <div className="relative flex h-40 w-40 items-center justify-center">
            {waves.map((w) => (
              <motion.span
                key={w}
                className="absolute rounded-full border-2 border-[#ffb347]"
                style={{ width: 56, height: 56 }}
                initial={rm ? false : { scale: 1, opacity: 0.55 }}
                animate={
                  rm
                    ? { scale: 2.3, opacity: 0 }
                    : { scale: [1, 2.6], opacity: [0.55, 0] }
                }
                transition={
                  rm
                    ? { duration: 0 }
                    : {
                        duration: 2.6,
                        delay: w * 0.85,
                        repeat: Infinity,
                        ease: "easeOut",
                      }
                }
              />
            ))}
            <motion.span
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#ff7a00] to-[#ffb347] text-white shadow-[0_10px_24px_rgba(255,122,0,0.35)]"
              animate={rm ? {} : { scale: [1, 1.06, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <User size={26} strokeWidth={1.9} />
            </motion.span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-3">
          {[
            { label: "Voice", icon: Phone, delay: 0 },
            { label: "SMS", icon: MessageSquare, delay: 1.3 },
          ].map((ch) => (
            <motion.div
              key={ch.label}
              className="flex items-center gap-2 rounded-full border border-[#ffd9bc] bg-[#fff5ec] px-3 py-1.5"
              animate={
                rm
                  ? {}
                  : {
                      backgroundColor: ["#fff5ec", "#ffe4cc", "#fff5ec"],
                      borderColor: ["#ffd9bc", "#ff7a00", "#ffd9bc"],
                    }
              }
              transition={{
                duration: 2.6,
                delay: ch.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
                <ch.icon size={12} strokeWidth={2.2} />
              </span>
              <span className="text-[11px] font-semibold text-[#1b1410]">{ch.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.span
          className="h-2 w-2 rounded-full bg-[#ff7a00]"
          animate={rm ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[11px] font-semibold text-[#1b1410]">Calling back</span>
      </motion.div>
    </div>
  );
}
