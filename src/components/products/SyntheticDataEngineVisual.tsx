"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { Database, ListChecks, Wand2 } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;

const COLS = 6;
const ROWS = 4;
const CELLS = Array.from({ length: COLS * ROWS }, (_, i) => i);
const CYCLE = 4.2; // seconds for one full generate sweep

const R = 15;
const CIRC = 2 * Math.PI * R;

const fields = [
  { name: "name", type: "string" },
  { name: "email", type: "email" },
  { name: "signup_at", type: "date" },
];

function Counter({ to, reduced }: { to: number; reduced: boolean | null }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduced) {
      if (ref.current) ref.current.textContent = to.toLocaleString();
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [to, reduced]);

  return <span ref={ref}>0</span>;
}

function GridCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Synthetic Data"
      sub="Generating dataset · users"
      icon={<Database size={13} strokeWidth={2} />}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0">
          <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
            <circle cx="20" cy="20" r={R} fill="none" stroke="#f3e6da" strokeWidth="4" />
            <motion.circle
              cx="20"
              cy="20"
              r={R}
              fill="none"
              stroke="url(#sdeGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              initial={{ strokeDashoffset: CIRC }}
              animate={rm ? { strokeDashoffset: 0 } : { strokeDashoffset: [CIRC, 0, 0] }}
              transition={
                rm
                  ? { duration: 0 }
                  : { duration: CYCLE, times: [0, 0.85, 1], repeat: Infinity, ease: "easeInOut" }
              }
            />
            <defs>
              <linearGradient id="sdeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff7a00" />
                <stop offset="1" stopColor="#ffb347" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Wand2 size={15} strokeWidth={1.9} className="text-[#d9640a]" />
          </div>
        </div>

        <div className="grid flex-1 grid-cols-6 gap-1.5">
          {CELLS.map((i) => {
            const row = Math.floor(i / COLS);
            const col = i % COLS;
            // diagonal sweep so cells "fill in" progressively
            const delay = ((row + col) / (ROWS + COLS)) * (CYCLE * 0.7);
            return (
              <motion.span
                key={i}
                className="aspect-square rounded-[3px]"
                initial={{ backgroundColor: "#f3e6da" }}
                animate={
                  rm
                    ? { backgroundColor: "#ff7a00" }
                    : { backgroundColor: ["#f3e6da", "#ffd9bc", "#ff7a00", "#f3e6da"] }
                }
                transition={
                  rm
                    ? { duration: 0 }
                    : {
                        duration: CYCLE,
                        times: [0, 0.15, 0.5, 1],
                        delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              />
            );
          })}
        </div>
      </div>
    </BentoCard>
  );
}

function RowsCard({ reduced }: { reduced: boolean | null }) {
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={reduced ? {} : { rotate: [0, 12, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Wand2 size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">
            <Counter to={10000} reduced={reduced} />
          </p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">rows · PII-safe</p>
        </div>
      </div>
    </BentoCard>
  );
}

function SchemaCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Schema Fields" icon={<ListChecks size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {fields.map((f, i) => (
          <motion.li
            key={f.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            initial={rm ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={rm ? { duration: 0 } : { duration: 0.5, delay: 0.3 + i * 0.18, ease: EASE }}
          >
            <span className="truncate font-mono text-[10px] text-[#5c4f48]">{f.name}</span>
            <span className="rounded-full bg-[#ffe4cc] px-2 py-0.5 text-[9px] font-semibold text-[#d9640a]">
              {f.type}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function SyntheticDataEngineVisual() {
  const rm = useReducedMotion();
  return (
    <ProductBentoStack
      primary={<GridCard />}
      secondary={<RowsCard reduced={rm} />}
      tertiary={<SchemaCard />}
    />
  );
}
