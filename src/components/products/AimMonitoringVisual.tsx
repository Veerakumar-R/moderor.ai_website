"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Server, Sparkles } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

// Two interchangeable waveforms; we cross-fade between them to fake a live stream.
const WAVE_A = "M0,44 L20,36 L40,40 L60,26 L80,32 L100,18 L120,24 L140,12 L160,22 L180,10";
const WAVE_B = "M0,40 L20,42 L40,30 L60,34 L80,20 L100,26 L120,14 L140,20 L160,8 L180,16";
const AREA_A = `${WAVE_A} L180,60 L0,60 Z`;
const AREA_B = `${WAVE_B} L180,60 L0,60 Z`;

const services = [
  { name: "api-gateway", ok: true },
  { name: "worker-pool", ok: true },
  { name: "cache-node-3", ok: false },
];

function StreamCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Realtime Monitoring"
      sub="Live throughput · req/s"
      icon={<Activity size={13} strokeWidth={2} />}
    >
      <div className="mb-2 flex items-center gap-1.5">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-[#ff7a00]"
          animate={rm ? {} : { opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[10px] font-semibold text-[#d9640a]">Live</span>
      </div>
      <div className="overflow-hidden rounded-xl bg-[#fff5ec] p-2">
        <svg viewBox="0 0 180 60" className="h-20 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aimArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ff7a00" stopOpacity="0.35" />
              <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="aimLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#d9640a" />
              <stop offset="1" stopColor="#ff7a00" />
            </linearGradient>
          </defs>
          <motion.path
            d={AREA_A}
            fill="url(#aimArea)"
            animate={rm ? {} : { d: [AREA_A, AREA_B, AREA_A] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d={WAVE_A}
            fill="none"
            stroke="url(#aimLine)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={rm ? {} : { d: [WAVE_A, WAVE_B, WAVE_A] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="180"
            cy="10"
            r="3"
            fill="#ff7a00"
            animate={rm ? {} : { cy: [10, 16, 10], opacity: [1, 0.6, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </BentoCard>
  );
}

function AskAiCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">1.2k</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">req/s · ask AI</p>
        </div>
      </div>
    </BentoCard>
  );
}

function ServicesCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Infra Services" icon={<Server size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {services.map((s, i) => (
          <li
            key={s.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
          >
            <span className="truncate font-mono text-[10px] text-[#5c4f48]">{s.name}</span>
            <span className="flex items-center gap-1.5">
              <motion.span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: s.ok ? "#ff9d45" : "#d9640a" }}
                animate={rm ? {} : { opacity: [1, 0.35, 1] }}
                transition={{
                  duration: s.ok ? 1.8 : 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
              <span className="text-[9px] font-semibold text-[#8a7d72]">
                {s.ok ? "healthy" : "degraded"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function AimMonitoringVisual() {
  return (
    <ProductBentoStack
      primary={<StreamCard />}
      secondary={<AskAiCard />}
      tertiary={<ServicesCard />}
    />
  );
}
