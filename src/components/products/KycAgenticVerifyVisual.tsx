"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, ScanLine, User } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fields = [
  { label: "Name", value: "A. Fernandez" },
  { label: "DOB", value: "14 Mar 1990" },
  { label: "ID No.", value: "P-2847 1930" },
];

export function KycAgenticVerifyVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              KYC Verify
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Documents authenticated</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <ScanLine size={18} strokeWidth={1.9} />
          </span>
        </div>

        {/* ID document card with scanning line */}
        <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#f0ddcd] bg-[#fff5ec] p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm">
              <User size={22} strokeWidth={1.9} />
            </span>
            <div className="flex-1">
              <div className="h-2 w-24 rounded-full bg-[#ffd9bc]" />
              <div className="mt-2 h-2 w-16 rounded-full bg-[#f3e6da]" />
              <div className="mt-3 flex items-center gap-1">
                <span className="rounded-md bg-[#fff2e6] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#d9640a]">
                  Passport
                </span>
              </div>
            </div>
          </div>

          {/* scanning line */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-8"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,122,0,0) 0%, rgba(255,122,0,0.22) 50%, rgba(255,122,0,0) 100%)",
            }}
            initial={rm ? { opacity: 0 } : { top: "-10%" }}
            animate={rm ? { opacity: 0 } : { top: ["-10%", "100%"] }}
            transition={rm ? { duration: 0 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-[2px] bg-[#ff7a00]"
            initial={rm ? { opacity: 0 } : { top: "-10%" }}
            animate={rm ? { opacity: 0 } : { top: ["-10%", "100%"] }}
            transition={rm ? { duration: 0 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* fields verified one by one */}
        <div className="mt-4 space-y-2.5">
          {fields.map((f, i) => (
            <div
              key={f.label}
              className="flex items-center justify-between rounded-xl bg-[#fff5ec] px-3 py-2"
            >
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8a7d72]">
                  {f.label}
                </p>
                <p className="text-[12px] font-semibold text-[#1b1410]">{f.value}</p>
              </div>
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16a34a]/12 text-[#16a34a]"
                initial={rm ? false : { scale: 0.3, opacity: 0 }}
                animate={
                  rm
                    ? { scale: 1, opacity: 1 }
                    : { scale: [0.3, 1.2, 1], opacity: [0, 1, 1] }
                }
                transition={
                  rm
                    ? { duration: 0 }
                    : {
                        duration: 0.5,
                        delay: 0.8 + i * 0.55,
                        repeat: Infinity,
                        repeatDelay: 2.4 - i * 0.55 + 0.9,
                        ease: EASE,
                      }
                }
              >
                <Check size={13} strokeWidth={3} />
              </motion.span>
            </div>
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
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { scale: [1, 1.18, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ScanLine size={12} strokeWidth={2.4} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">Verified</span>
      </motion.div>
    </div>
  );
}
