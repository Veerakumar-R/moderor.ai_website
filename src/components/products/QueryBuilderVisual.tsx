"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Table2, Terminal } from "lucide-react";
import { BentoCard, ProductBentoStack } from "./ProductBentoStack";

const EASE = [0.22, 1, 0.36, 1] as const;
const CYCLE = 5.6;

type Token = { t: string; kw?: boolean; fn?: boolean };
type Line = { indent?: number; tokens: Token[] };

const kw = (t: string): Token => ({ t, kw: true });
const fn = (t: string): Token => ({ t, fn: true });
const p = (t: string): Token => ({ t });

const sqlLines: Line[] = [
  { tokens: [kw("SELECT"), p(" u.name, "), fn("COUNT"), p("(o.id)")] },
  { indent: 1, tokens: [kw("FROM"), p(" users u")] },
  { indent: 1, tokens: [kw("JOIN"), p(" orders o")] },
  { indent: 1, tokens: [kw("WHERE"), p(" o.date > "), p("'2026'")] },
];

const rows = [
  { name: "A. Rivera", n: "38" },
  { name: "M. Chen", n: "31" },
];

function renderToken(tok: Token, i: number): ReactNode {
  const cls = tok.kw
    ? "text-[#d9640a] font-semibold"
    : tok.fn
      ? "text-[#ff7a00] font-semibold"
      : "text-[#5c4f48]";
  return (
    <span key={i} className={cls}>
      {tok.t}
    </span>
  );
}

function TranslateCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard
      kicker="Query Builder"
      sub="Natural language → SQL"
      icon={<Terminal size={13} strokeWidth={2} />}
    >
      {/* English in */}
      <div className="flex items-start gap-1.5 rounded-xl border border-[#ffd9bc] bg-[#fff5ec] px-2.5 py-2">
        <Sparkles size={12} strokeWidth={2} className="mt-0.5 shrink-0 text-[#ff7a00]" />
        <p className="text-[11px] leading-snug text-[#1b1410]">
          Top customers by orders
          <motion.span
            className="ml-0.5 inline-block h-3 w-[2px] translate-y-0.5 bg-[#ff7a00]"
            animate={rm ? {} : { opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </p>
      </div>

      {/* SQL out */}
      <div className="mt-2.5 rounded-xl bg-[#fff5ec] p-2.5 font-mono text-[10.5px] leading-relaxed">
        {sqlLines.map((line, i) => {
          const start = 0.12 + (i / sqlLines.length) * 0.55;
          return (
            <motion.div
              key={i}
              className="flex whitespace-pre"
              style={{ paddingLeft: (line.indent ?? 0) * 12 }}
              initial={{ opacity: 0, x: -6 }}
              animate={
                rm ? { opacity: 1, x: 0 } : { opacity: [0, 0, 1, 1, 0], x: [-6, -6, 0, 0, -6] }
              }
              transition={
                rm
                  ? { duration: 0 }
                  : {
                      duration: CYCLE,
                      times: [0, start, Math.min(start + 0.08, 0.98), 0.9, 1],
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            >
              {line.tokens.map(renderToken)}
            </motion.div>
          );
        })}
      </div>
    </BentoCard>
  );
}

function SchemaAwareCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard accent>
      <div className="flex items-center gap-2.5">
        <motion.span
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#ff7a00] shadow-sm"
          animate={rm ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Table2 size={16} strokeWidth={2.2} />
        </motion.span>
        <div>
          <p className="text-xl font-bold leading-none text-[#1b1410]">14</p>
          <p className="mt-1 text-[10.5px] font-semibold text-[#a15a1e]">tables · schema-aware</p>
        </div>
      </div>
    </BentoCard>
  );
}

function ResultsCard() {
  const rm = useReducedMotion();
  return (
    <BentoCard kicker="Result Preview" icon={<Table2 size={13} strokeWidth={2} />}>
      <div className="mb-1.5 flex items-center justify-between px-2.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#8a7d72]">
        <span>customer</span>
        <span>orders</span>
      </div>
      <ul className="space-y-1.5">
        {rows.map((r, i) => (
          <motion.li
            key={r.name}
            className="flex items-center justify-between rounded-lg bg-[#fff7f0] px-2.5 py-1.5"
            initial={rm ? false : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={rm ? { duration: 0 } : { duration: 0.5, delay: 0.4 + i * 0.18, ease: EASE }}
          >
            <span className="truncate font-mono text-[10px] text-[#5c4f48]">{r.name}</span>
            <span className="rounded-full bg-[#ffe4cc] px-2 py-0.5 text-[9px] font-semibold text-[#d9640a]">
              {r.n}
            </span>
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
}

export function QueryBuilderVisual() {
  return (
    <ProductBentoStack
      primary={<TranslateCard />}
      secondary={<SchemaAwareCard />}
      tertiary={<ResultsCard />}
    />
  );
}
