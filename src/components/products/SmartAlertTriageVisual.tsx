"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bell, FolderCheck, TrendingDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const CONFIDENCE = 94;

const paths = [
  { cx: [40, 132.5, 210], cy: [46, 76, 104] },
  { cx: [40, 125, 210], cy: [104, 104, 104] },
  { cx: [40, 132.5, 210], cy: [162, 134, 104] },
];

const alerts = [
  { label: "Txn #8842", y: 46 },
  { label: "Vendor KYC", y: 104 },
  { label: "Login geo", y: 162 },
];

export function SmartAlertTriageVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Alert Triage
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Merged into one case</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <Bell size={18} strokeWidth={1.9} />
          </span>
        </div>

        <div className="mt-4">
          <svg viewBox="0 0 320 208" className="h-auto w-full">
            {/* connector paths */}
            {paths.map((p, i) => (
              <path
                key={i}
                d={`M${p.cx[0]},${p.cy[0]} C${p.cx[1]},${p.cy[0]} ${p.cx[1]},${p.cy[2]} ${p.cx[2]},${p.cy[2]}`}
                fill="none"
                stroke="#f3e6da"
                strokeWidth="2"
              />
            ))}

            {/* alert nodes */}
            {alerts.map((a, i) => (
              <g key={a.label}>
                <motion.circle
                  cx="40"
                  cy={a.y}
                  r="12"
                  fill="#fff2e6"
                  stroke="#ffb347"
                  strokeWidth="2"
                  animate={rm ? {} : { scale: [1, 1.12, 1] }}
                  style={{ transformOrigin: `40px ${a.y}px` }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
                />
                <circle cx="40" cy={a.y} r="4" fill="#ff7a00" />
                <text
                  x="40"
                  y={a.y - 18}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="600"
                  fill="#8a7d72"
                >
                  {a.label}
                </text>
              </g>
            ))}

            {/* traveling tokens */}
            {!rm &&
              paths.map((p, i) => (
                <motion.circle
                  key={`t${i}`}
                  r="3.5"
                  fill="#d9640a"
                  initial={{ cx: p.cx[0], cy: p.cy[0], opacity: 0 }}
                  animate={{ cx: p.cx, cy: p.cy, opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.45,
                    ease: EASE,
                  }}
                />
              ))}

            {/* case node */}
            <motion.g
              animate={rm ? {} : { scale: [1, 1.05, 1] }}
              style={{ transformOrigin: "256px 104px" }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="214" y="80" width="84" height="48" rx="12" fill="#fff5ec" stroke="#ffd9bc" strokeWidth="2" />
              <foreignObject x="222" y="90" width="28" height="28">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff7a00] text-white">
                  <FolderCheck size={15} strokeWidth={2.2} />
                </div>
              </foreignObject>
              <text x="256" y="102" fontSize="10" fontWeight="700" fill="#1b1410">
                Case #1024
              </text>
              <text x="256" y="116" fontSize="8.5" fontWeight="500" fill="#8a7d72">
                3 alerts &middot; 1 owner
              </text>
            </motion.g>
          </svg>
        </div>

        <div className="mt-3 rounded-xl border border-[#f3e6da] bg-[#fff5ec] px-4 py-3">
          <div className="flex items-center justify-between text-[11px] font-medium text-[#5c4f48]">
            <span>ML confidence</span>
            <span className="text-[#d9640a]">{CONFIDENCE}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#f3e6da]">
            <motion.span
              className="block h-full rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
              initial={{ width: 0 }}
              animate={{ width: `${CONFIDENCE}%` }}
              transition={rm ? { duration: 0 } : { duration: 1.4, delay: 0.3, ease: EASE }}
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
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
          <TrendingDown size={12} strokeWidth={2.4} />
        </span>
        <span className="text-[11px] font-semibold text-[#1b1410]">82% fewer false positives</span>
      </motion.div>
    </div>
  );
}
