"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Two interchangeable waveforms; we cross-fade between them to fake a live stream.
const WAVE_A = "M0,70 L20,58 L40,64 L60,42 L80,50 L100,30 L120,38 L140,22 L160,34 L180,18";
const WAVE_B = "M0,64 L20,66 L40,48 L60,54 L80,34 L100,40 L120,24 L140,32 L160,16 L180,26";
const AREA_A = `${WAVE_A} L180,96 L0,96 Z`;
const AREA_B = `${WAVE_B} L180,96 L0,96 Z`;

const services = [
  { name: "api-gateway", ok: true },
  { name: "worker-pool", ok: true },
  { name: "cache-node-3", ok: false },
];

export function AimMonitoringVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Realtime Monitoring
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Live throughput · req/s</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#fff2e6] px-2.5 py-1 text-[#ff7a00]">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#ff7a00]"
              animate={rm ? {} : { opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[11px] font-semibold">Live</span>
          </span>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl bg-[#fff5ec] p-3">
          <svg viewBox="0 0 180 96" className="h-28 w-full" preserveAspectRatio="none">
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
              cy="18"
              r="3.5"
              fill="#ff7a00"
              animate={rm ? {} : { cy: [18, 26, 18], opacity: [1, 0.6, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="mt-4 space-y-2">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="flex items-center justify-between rounded-xl bg-[#fff5ec] px-3 py-2"
            >
              <span className="font-mono text-[11px] text-[#5c4f48]">{s.name}</span>
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
                <span className="text-[10px] font-semibold text-[#8a7d72]">
                  {s.ok ? "healthy" : "degraded"}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -bottom-3 -left-2 flex items-center gap-2 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: EASE }}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
          <Sparkles size={12} strokeWidth={2.2} />
        </span>
        <span className="text-[11px] font-semibold text-[#1b1410]">Ask AI: why did latency spike?</span>
      </motion.div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: EASE }}
      >
        <Activity size={12} strokeWidth={2.2} className="text-[#ff7a00]" />
        <span className="text-[11px] font-semibold text-[#1b1410]">1.2k req/s</span>
      </motion.div>
    </div>
  );
}
