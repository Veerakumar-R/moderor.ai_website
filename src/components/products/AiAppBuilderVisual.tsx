"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Wand2, Zap } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;

const bars = [45, 72, 38, 86, 56, 66];

const components = [
  { name: "Sidebar", delay: 0.3 },
  { name: "Chart", delay: 0.55 },
  { name: "Table", delay: 0.8 },
];

function BuilderCard() {
  const rm = useReducedMotion();
  const pop = (delay: number) => ({
    initial: rm ? false : { opacity: 0, scale: 0.6, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: rm ? { duration: 0 } : { duration: 0.45, delay, ease: EASE },
  });

  return (
    <BentoCard
      kicker="Prompt to app"
      sub="Building preview"
      icon={<Wand2 size={13} strokeWidth={2} />}
    >
      {/* Prompt bar */}
      <div className="flex items-center gap-1.5 rounded-xl border border-[#f0ddcd] bg-[#fff5ec] p-1.5 pl-2.5">
        <span className="truncate text-[10px] text-[#5c4f48]">
          Build a <span className="font-semibold text-[#d9640a]">customer dashboard</span>
        </span>
        {!rm && (
          <motion.span
            className="inline-block h-3 w-[2px] shrink-0 rounded-full bg-[#ff7a00]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <motion.span
          className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff7a00] to-[#ffb347] text-white shadow-[0_5px_12px_rgba(255,122,0,0.35)]"
          animate={rm ? {} : { scale: [1, 0.9, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap size={12} strokeWidth={2.2} fill="currentColor" />
        </motion.span>
      </div>

      {/* Wireframe preview: blocks pop in staggered */}
      <div className="mt-3 rounded-xl border border-[#f0ddcd] bg-[#fff5ec] p-2.5">
        <motion.div className="flex items-center gap-1.5" {...pop(0.3)}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffb347]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffd9bc]" />
          <span className="ml-1.5 h-1.5 flex-1 rounded-full bg-white" />
        </motion.div>
        <div className="mt-2 flex gap-2">
          <motion.div className="flex w-1/4 flex-col gap-1 rounded-lg bg-white p-1.5" {...pop(0.45)}>
            <span className="h-1 w-full rounded-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347]" />
            <span className="h-1 w-4/5 rounded-full bg-[#f3e6da]" />
            <span className="h-1 w-3/5 rounded-full bg-[#f3e6da]" />
          </motion.div>
          <div className="flex-1 space-y-1.5">
            <div className="flex gap-1.5">
              <motion.div className="h-8 flex-1 rounded-lg bg-white p-1.5" {...pop(0.6)}>
                <span className="block h-1 w-6 rounded-full bg-[#ffd9bc]" />
                <span className="mt-1.5 block h-2 w-8 rounded bg-gradient-to-r from-[#ff7a00] to-[#ffb347]" />
              </motion.div>
              <motion.div className="h-8 flex-1 rounded-lg bg-white p-1.5" {...pop(0.72)}>
                <span className="block h-1 w-6 rounded-full bg-[#ffd9bc]" />
                <span className="mt-1.5 block h-2 w-6 rounded bg-[#f3e6da]" />
              </motion.div>
            </div>
            <motion.div className="flex h-9 items-end gap-1 rounded-lg bg-white p-1.5" {...pop(0.84)}>
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#ff7a00] to-[#ffb347]"
                  initial={rm ? false : { height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={
                    rm ? { duration: 0 } : { duration: 0.45, delay: 0.95 + i * 0.07, ease: EASE }
                  }
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

function ReadyCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { rotate: [0, 12, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap size={16} strokeWidth={2.2} fill="currentColor" />
        </motion.span>
        <div>
          <p className="text-[15px] font-bold leading-none text-[#1b1410]">Prototype ready</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">generated in 8s</p>
        </div>
      </div>
    </BentoCard>
  );
}

function ComponentsCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Components" icon={<Wand2 size={13} strokeWidth={2} />}>
      <ul className="space-y-1.5">
        {components.map((c) => (
          <motion.li
            key={c.name}
            className="flex items-center gap-2 rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            initial={rm ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={rm ? { duration: 0 } : { duration: 0.45, delay: c.delay, ease: EASE }}
          >
            <motion.span
              className="flex h-4 w-4 items-center justify-center rounded-md bg-[#ff7a00] text-white"
              initial={rm ? false : { scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={rm ? { duration: 0 } : { duration: 0.3, delay: c.delay + 0.15 }}
            >
              <Check size={11} strokeWidth={3} />
            </motion.span>
            <span className="truncate text-[10.5px] font-medium text-[#5c4f48]">{c.name}</span>
            <span className="ml-auto text-[9px] font-semibold text-[#d9640a]">added</span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function AiAppBuilderVisual() {
  return (
    <ProductBentoStack
      primary={<BuilderCard />}
      secondary={<ReadyCard />}
      tertiary={<ComponentsCard />}
    />
  );
}
