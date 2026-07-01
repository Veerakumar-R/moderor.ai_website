"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { Bug, ScanLine, ShieldHalf } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;

const severities = [
  { label: "Critical", w: "88%", color: "#d9640a" },
  { label: "High", w: "66%", color: "#ff7a00" },
  { label: "Medium", w: "44%", color: "#ffb347" },
  { label: "Low", w: "24%", color: "#ffd9bc" },
];

const cves = [
  { id: "CVE-2024-3721", level: "Critical", tone: "bg-[#ffe0d0] text-[#d9640a]" },
  { id: "CVE-2024-1955", level: "High", tone: "bg-[#ffe4cc] text-[#ff7a00]" },
  { id: "CVE-2023-8842", level: "Medium", tone: "bg-[#fff2e6] text-[#a15a1e]" },
];

function Counter({ to, reduced }: { to: number; reduced: boolean | null }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduced) {
      if (ref.current) ref.current.textContent = String(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [to, reduced]);

  return <span ref={ref}>0</span>;
}

function ShieldCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Vulnerability scan"
      sub="Findings normalized"
      icon={<ShieldHalf size={13} strokeWidth={2} />}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-24 w-20 shrink-0">
          <svg viewBox="0 0 96 112" className="h-full w-full">
            <defs>
              <linearGradient id="vaptShield" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fff2e6" />
                <stop offset="1" stopColor="#ffe6d0" />
              </linearGradient>
              <clipPath id="vaptClip">
                <path d="M48 6 84 20 84 56 C84 82 68 98 48 106 C28 98 12 82 12 56 L12 20 Z" />
              </clipPath>
            </defs>
            <path
              d="M48 6 84 20 84 56 C84 82 68 98 48 106 C28 98 12 82 12 56 L12 20 Z"
              fill="url(#vaptShield)"
              stroke="#ffd9bc"
              strokeWidth="2"
            />
            {!rm && (
              <g clipPath="url(#vaptClip)">
                <motion.rect
                  x="12"
                  y="0"
                  width="72"
                  height="10"
                  fill="url(#vaptSweep)"
                  animate={{ y: [6, 96, 6] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <linearGradient id="vaptSweep" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ff7a00" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#ff7a00" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
                </linearGradient>
              </g>
            )}
            <motion.path
              d="M38 56 46 64 62 46"
              fill="none"
              stroke="#ff7a00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={rm ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={rm ? { duration: 0 } : { duration: 0.8, delay: 1, ease: EASE }}
            />
          </svg>
          <span className="absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[8px] font-semibold text-[#d9640a] shadow-sm">
            <ScanLine size={8} strokeWidth={2.4} />
            scanning
          </span>
        </div>
        <div className="flex-1 space-y-2">
          {severities.map((s, i) => (
            <div key={s.label}>
              <div className="flex justify-between text-[10px] font-medium text-[#5c4f48]">
                <span>{s.label}</span>
              </div>
              <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-[#f3e6da]">
                <motion.span
                  className="block h-full rounded-full"
                  style={{ backgroundColor: s.color }}
                  initial={rm ? false : { width: 0 }}
                  animate={{ width: s.w }}
                  transition={rm ? { duration: 0 } : { duration: 1, delay: 0.3 + i * 0.15, ease: EASE }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function NormalizedCard({ reduced }: { reduced: boolean | null }) {
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={reduced ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShieldHalf size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">
            <Counter to={1347} reduced={reduced} />
          </p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">CVEs normalized</p>
        </div>
      </div>
    </BentoCard>
  );
}

function CveListCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Top findings" icon={<Bug size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {cves.map((c, i) => (
          <motion.li
            key={c.id}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            initial={rm ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={rm ? { duration: 0 } : { duration: 0.45, delay: 0.3 + i * 0.14, ease: EASE }}
          >
            <span className="truncate text-[10px] font-semibold text-[#5c4f48]">{c.id}</span>
            <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${c.tone}`}>
              {c.level}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function VaptVisual() {
  const rm = useReducedMotion();
  return (
    <ProductBentoStack
      primary={<ShieldCard />}
      secondary={<NormalizedCard reduced={rm} />}
      tertiary={<CveListCard />}
    />
  );
}
