"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, Phone, PhoneOutgoing, User } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const waves = [0, 1, 2];

const chips = [
  { label: "Voice", icon: Phone, delay: 0 },
  { label: "SMS", icon: MessageSquare, delay: 1.3 },
];

const contacts = [
  { name: "A. Fernandez", ch: "Voice" },
  { name: "R. Okonkwo", ch: "SMS" },
  { name: "M. Nakamura", ch: "Voice" },
];

function OutreachCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Omni Connect" sub="Re-engaging drop-offs" icon={<PhoneOutgoing size={13} strokeWidth={2} />}>
      <div className="flex h-[104px] items-center justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          {waves.map((w) => (
            <motion.span
              key={w}
              className="absolute rounded-full border-2 border-[#ffb347]"
              style={{ width: 40, height: 40 }}
              initial={rm ? false : { scale: 1, opacity: 0.55 }}
              animate={rm ? { scale: 2.2, opacity: 0 } : { scale: [1, 2.4], opacity: [0.55, 0] }}
              transition={
                rm
                  ? { duration: 0 }
                  : { duration: 2.6, delay: w * 0.85, repeat: Infinity, ease: "easeOut" }
              }
            />
          ))}
          <motion.span
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff7a00] to-[#ffb347] text-white shadow-[0_10px_24px_rgba(255,122,0,0.35)]"
            animate={rm ? {} : { scale: [1, 1.06, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <User size={22} strokeWidth={1.9} />
          </motion.span>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-center gap-2">
        {chips.map((ch) => (
          <motion.div
            key={ch.label}
            className="flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-[#fff5ec] px-2.5 py-1"
            animate={
              rm
                ? {}
                : {
                    backgroundColor: ["#fff5ec", "#ffe4cc", "#fff5ec"],
                    borderColor: ["#ffd9bc", "#ff7a00", "#ffd9bc"],
                  }
            }
            transition={{ duration: 2.6, delay: ch.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
              <ch.icon size={10} strokeWidth={2.2} />
            </span>
            <span className="text-[10px] font-semibold text-[#1b1410]">{ch.label}</span>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
}

function ReengagedCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <PhoneOutgoing size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">38</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">re-engaged today</p>
        </div>
      </div>
    </BentoCard>
  );
}

function ContactsCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Re-contacted" icon={<Phone size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {contacts.map((c, i) => {
          const Icon = c.ch === "Voice" ? Phone : MessageSquare;
          return (
            <motion.li
              key={c.name}
              className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
              animate={rm ? {} : { opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
            >
              <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{c.name}</span>
              <span className="flex items-center gap-1 rounded-full bg-[#ffe4cc] px-2 py-0.5 text-[9px] font-semibold text-[#d9640a]">
                <Icon size={9} strokeWidth={2.6} />
                {c.ch}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </BentoCard>
  );
}

export function OmniConnectVisual() {
  return (
    <ProductBentoStack
      primary={<OutreachCard />}
      secondary={<ReengagedCard />}
      tertiary={<ContactsCard />}
    />
  );
}
