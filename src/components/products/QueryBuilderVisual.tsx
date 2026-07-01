"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CornerDownRight, Sparkles, Terminal } from "lucide-react";

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
  { indent: 1, tokens: [kw("JOIN"), p(" orders o "), kw("ON"), p(" o.user_id = u.id")] },
  { indent: 1, tokens: [kw("WHERE"), p(" o.created_at > "), p("'2026-01-01'")] },
  { indent: 1, tokens: [kw("GROUP BY"), p(" u.name "), kw("ORDER BY"), p(" 2 "), kw("DESC")] },
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

export function QueryBuilderVisual() {
  const rm = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-[#f0ddcd] bg-white p-6 shadow-[0_20px_50px_rgba(255,122,0,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9640a]">
              Query Builder
            </p>
            <p className="mt-1 text-sm font-medium text-[#5c4f48]">Natural language → SQL</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]">
            <Terminal size={18} strokeWidth={1.9} />
          </span>
        </div>

        {/* English in */}
        <div className="mt-5 flex items-start gap-2 rounded-2xl border border-[#ffd9bc] bg-[#fff5ec] px-3 py-2.5">
          <Sparkles size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-[#ff7a00]" />
          <p className="text-[13px] leading-snug text-[#1b1410]">
            Top customers by orders since January
            <motion.span
              className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-[#ff7a00]"
              animate={rm ? {} : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </p>
        </div>

        <div className="my-3 flex items-center gap-2 pl-1 text-[#8a7d72]">
          <CornerDownRight size={14} strokeWidth={2} className="text-[#d9640a]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">generated sql</span>
        </div>

        {/* SQL out */}
        <div className="rounded-2xl bg-[#fff5ec] p-3 font-mono text-[12px] leading-relaxed">
          {sqlLines.map((line, i) => {
            const start = 0.12 + (i / sqlLines.length) * 0.55;
            return (
              <motion.div
                key={i}
                className="flex whitespace-pre"
                style={{ paddingLeft: (line.indent ?? 0) * 14 }}
                initial={{ opacity: 0, x: -6 }}
                animate={rm ? { opacity: 1, x: 0 } : { opacity: [0, 0, 1, 1, 0], x: [-6, -6, 0, 0, -6] }}
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
      </div>

      <motion.div
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full border border-[#ffd9bc] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(255,122,0,0.18)]"
        initial={rm ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: EASE }}
      >
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff2e6] text-[#ff7a00]"
          animate={rm ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={12} strokeWidth={2.2} />
        </motion.span>
        <span className="text-[11px] font-semibold text-[#1b1410]">schema-aware</span>
      </motion.div>
    </div>
  );
}
