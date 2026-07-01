"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { BarChart3, FileText, Layers, Sparkles, Workflow, Zap } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;
const CYCLE = 4.4;

const stages = [
  { label: "Processing", Icon: FileText },
  { label: "Intelligence", Icon: Sparkles },
  { label: "Execution", Icon: Zap },
  { label: "Reports", Icon: BarChart3 },
];

const stops = [12, 37.33, 62.66, 88];

const obligations = [
  { name: "RBI Circular", controls: "6 controls" },
  { name: "SEBI LODR", controls: "4 controls" },
  { name: "DPDP Act", controls: "9 controls" },
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

function PipelineCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Obligation Pipeline"
      sub="Circular to controlled"
      icon={<Workflow size={13} strokeWidth={2} />}
    >
      <div className="relative mb-1 mt-3">
        <div className="absolute left-[12%] right-[12%] top-4 h-0.5 -translate-y-1/2 rounded-full bg-[#f3e6da]" />
        <motion.div
          className="absolute top-4 h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]"
          style={{ left: "12%" }}
          initial={rm ? false : { width: "0%" }}
          animate={rm ? { width: "76%" } : { width: ["0%", "76%", "76%", "0%"] }}
          transition={
            rm
              ? { duration: 0 }
              : { duration: CYCLE, repeat: Infinity, ease: EASE, times: [0, 0.7, 0.85, 1] }
          }
        />

        {!rm && (
          <motion.div
            className="absolute top-4 z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-[#ff7a00] text-white shadow-[0_6px_14px_rgba(255,122,0,0.4)]"
            animate={{ left: stops.map((s) => `${s}%`) }}
            transition={{ duration: CYCLE, repeat: Infinity, ease: EASE, times: [0, 0.28, 0.56, 0.84] }}
          >
            <FileText size={11} strokeWidth={2.2} />
          </motion.div>
        )}

        <div className="relative flex justify-between">
          {stages.map((s, i) => (
            <div key={s.label} className="flex w-1/4 flex-col items-center">
              <motion.span
                className="flex h-8 w-8 items-center justify-center rounded-full border bg-white"
                initial={rm ? false : { borderColor: "#f0ddcd", color: "#8a7d72" }}
                animate={
                  rm
                    ? { borderColor: "#ffd9bc", color: "#ff7a00" }
                    : {
                        borderColor: ["#f0ddcd", "#ff7a00", "#f0ddcd"],
                        color: ["#8a7d72", "#ff7a00", "#8a7d72"],
                        scale: [1, 1.12, 1],
                      }
                }
                transition={
                  rm
                    ? { duration: 0 }
                    : {
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: CYCLE - 0.6,
                        delay: CYCLE * 0.28 * i + 0.1,
                        ease: EASE,
                      }
                }
              >
                <s.Icon size={14} strokeWidth={2} />
              </motion.span>
              <span className="mt-1.5 text-center text-[8.5px] font-semibold leading-tight text-[#5c4f48]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function MappedCard({ reduced }: { reduced: boolean | null }) {
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={reduced ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Layers size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">
            <Counter to={248} reduced={reduced} />
          </p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">obligations mapped</p>
        </div>
      </div>
    </BentoCard>
  );
}

function ObligationsCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Latest Mapped" icon={<FileText size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {obligations.map((o, i) => (
          <motion.li
            key={o.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            animate={rm ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          >
            <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{o.name}</span>
            <span className="rounded-full bg-[#ffe4cc] px-2 py-0.5 text-[9px] font-semibold text-[#d9640a]">
              {o.controls}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function RegulatoryComplianceVisual() {
  const rm = useReducedMotion();
  return (
    <ProductBentoStack
      primary={<PipelineCard />}
      secondary={<MappedCard reduced={rm} />}
      tertiary={<ObligationsCard />}
    />
  );
}
