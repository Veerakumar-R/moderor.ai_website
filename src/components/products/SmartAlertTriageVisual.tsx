"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bell, FolderCheck, TrendingDown } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;

const paths = [
  { cx: [26, 120, 214], cy: [30, 30, 78] },
  { cx: [26, 120, 214], cy: [78, 78, 78] },
  { cx: [26, 120, 214], cy: [126, 126, 78] },
];

const alerts = [
  { label: "Txn #8842", y: 30 },
  { label: "Vendor KYC", y: 78 },
  { label: "Login geo", y: 126 },
];

const recent = [
  { name: "Txn #8842", risk: "High", tint: "#ffe0cc", text: "#d9640a" },
  { name: "Vendor KYC", risk: "Med", tint: "#fff0dd", text: "#c56a12" },
  { name: "Login geo", risk: "Low", tint: "#fff5ec", text: "#a1836a" },
];

function MergeCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Alert Triage"
      sub="Merged into one case"
      icon={<Bell size={13} strokeWidth={2} />}
    >
      <svg viewBox="0 0 300 156" className="h-auto w-full">
        {paths.map((p, i) => (
          <path
            key={i}
            d={`M${p.cx[0]},${p.cy[0]} C${p.cx[1]},${p.cy[0]} ${p.cx[1]},${p.cy[2]} ${p.cx[2]},${p.cy[2]}`}
            fill="none"
            stroke="#f3e6da"
            strokeWidth="2"
          />
        ))}

        {alerts.map((a, i) => (
          <g key={a.label}>
            <motion.circle
              cx="26"
              cy={a.y}
              r="10"
              fill="#fff2e6"
              stroke="#ffb347"
              strokeWidth="2"
              animate={rm ? {} : { scale: [1, 1.14, 1] }}
              style={{ transformOrigin: `26px ${a.y}px` }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
            />
            <circle cx="26" cy={a.y} r="3.5" fill="#ff7a00" />
          </g>
        ))}

        {!rm &&
          paths.map((p, i) => (
            <motion.circle
              key={`t${i}`}
              r="3"
              fill="#d9640a"
              initial={{ cx: p.cx[0], cy: p.cy[0], opacity: 0 }}
              animate={{ cx: p.cx, cy: p.cy, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.45, ease: EASE }}
            />
          ))}

        <motion.g
          animate={rm ? {} : { scale: [1, 1.05, 1] }}
          style={{ transformOrigin: "252px 78px" }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="214" y="56" width="82" height="44" rx="11" fill="#fff5ec" stroke="#ffd9bc" strokeWidth="2" />
          <foreignObject x="221" y="65" width="26" height="26">
            <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#ff7a00] text-white">
              <FolderCheck size={14} strokeWidth={2.2} />
            </div>
          </foreignObject>
          <text x="255" y="77" fontSize="10" fontWeight="700" fill="#1b1410">
            Case #1024
          </text>
          <text x="255" y="90" fontSize="8" fontWeight="500" fill="#8a7d72">
            3 alerts &middot; 1 owner
          </text>
        </motion.g>
      </svg>
    </BentoCard>
  );
}

function ConfidenceCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingDown size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">82%</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">fewer false positives</p>
        </div>
      </div>
    </BentoCard>
  );
}

function RecentCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Recent Alerts" icon={<Bell size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {recent.map((r, i) => (
          <motion.li
            key={r.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            animate={rm ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          >
            <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{r.name}</span>
            <span
              className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
              style={{ backgroundColor: r.tint, color: r.text }}
            >
              {r.risk}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function SmartAlertTriageVisual() {
  return (
    <ProductBentoStack
      primary={<MergeCard />}
      secondary={<ConfidenceCard />}
      tertiary={<RecentCard />}
    />
  );
}
