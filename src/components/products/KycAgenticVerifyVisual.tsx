"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Check, ListChecks, ScanLine, User } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;

const fields = [
  { label: "Name", value: "A. Fernandez" },
  { label: "DOB", value: "14 Mar 1990" },
  { label: "ID No.", value: "P-2847 1930" },
];

const steps = [
  { label: "Document", delay: 0 },
  { label: "Face match", delay: 0.6 },
  { label: "AML screen", delay: 1.2 },
];

function ScanCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="KYC Verify" sub="Documents authenticated" icon={<ScanLine size={13} strokeWidth={2} />}>
      <div className="relative overflow-hidden rounded-xl border border-[#f0ddcd] bg-[#fff5ec] p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#ff7a00] shadow-sm">
            <User size={18} strokeWidth={1.9} />
          </span>
          <div className="flex-1">
            <div className="h-1.5 w-20 rounded-full bg-[#ffd9bc]" />
            <div className="mt-1.5 h-1.5 w-14 rounded-full bg-[#f3e6da]" />
            <span className="mt-2 inline-block rounded bg-[#fff2e6] px-1.5 py-0.5 text-[7.5px] font-bold uppercase tracking-wider text-[#d9640a]">
              Passport
            </span>
          </div>
        </div>
        {!rm && (
          <>
            <motion.div
              className="pointer-events-none absolute inset-x-0 h-6"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,122,0,0) 0%, rgba(255,122,0,0.22) 50%, rgba(255,122,0,0) 100%)",
              }}
              initial={{ top: "-12%" }}
              animate={{ top: ["-12%", "100%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute inset-x-0 h-[2px] bg-[#ff7a00]"
              initial={{ top: "-12%" }}
              animate={{ top: ["-12%", "100%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>
      <div className="mt-2.5 space-y-1.5">
        {fields.map((f, i) => (
          <div key={f.label} className="flex items-center justify-between rounded-lg bg-[#fff5ec] px-2.5 py-1.5">
            <div className="min-w-0">
              <p className="text-[8px] font-semibold uppercase tracking-wider text-[#8a7d72]">{f.label}</p>
              <p className="truncate text-[11px] font-semibold text-[#1b1410]">{f.value}</p>
            </div>
            <motion.span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16a34a]/12 text-[#16a34a]"
              initial={rm ? false : { scale: 0.3, opacity: 0 }}
              animate={rm ? { scale: 1, opacity: 1 } : { scale: [0.3, 1.2, 1], opacity: [0, 1, 1] }}
              transition={
                rm
                  ? { duration: 0 }
                  : {
                      duration: 0.5,
                      delay: 0.8 + i * 0.5,
                      repeat: Infinity,
                      repeatDelay: 2.4 - i * 0.5 + 0.9,
                      ease: EASE,
                    }
              }
            >
              <Check size={11} strokeWidth={3} />
            </motion.span>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

function VerifiedCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <BadgeCheck size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">99.2%</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">verified confidence</p>
        </div>
      </div>
    </BentoCard>
  );
}

function StepsCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Verification" icon={<ListChecks size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {steps.map((s) => (
          <li
            key={s.label}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
          >
            <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{s.label}</span>
            <motion.span
              className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16a34a]/12 text-[#16a34a]"
              initial={rm ? false : { scale: 0.3, opacity: 0 }}
              animate={rm ? { scale: 1, opacity: 1 } : { scale: [0.3, 1.2, 1], opacity: [0, 1, 1] }}
              transition={
                rm
                  ? { duration: 0 }
                  : { duration: 0.5, delay: 0.6 + s.delay, repeat: Infinity, repeatDelay: 3, ease: EASE }
              }
            >
              <Check size={9} strokeWidth={3.2} />
            </motion.span>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function KycAgenticVerifyVisual() {
  return (
    <ProductBentoStack primary={<ScanCard />} secondary={<VerifiedCard />} tertiary={<StepsCard />} />
  );
}
