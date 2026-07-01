"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, MoreVertical, Users } from "lucide-react";
import { useEffect, useState } from "react";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const BAR_MONTHS = [
  { label: "Mar", val: 42 },
  { label: "Apr", val: 48 },
  { label: "May", val: 51 },
  { label: "Jun", val: 64 },
  { label: "Jul", val: 58 },
];

const LINE_POINTS = [38, 44, 41, 52, 48, 56, 53];
const LINE_LABELS = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

function CardMenu() {
  return (
    <span className="aw-stack-menu" aria-hidden>
      <MoreVertical size={14} strokeWidth={2.2} />
    </span>
  );
}

function Count({ to, dur = 1000, decimals = 0 }: { to: number; dur?: number; decimals?: number }) {
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setV(to);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const raw = to * eased;
      setV(decimals > 0 ? Math.round(raw * 10) / 10 : Math.round(raw));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, dur, decimals, reduce]);

  return <>{decimals > 0 ? v.toFixed(decimals) : v.toLocaleString()}</>;
}

function AccentCard({ reduceMotion }: { reduceMotion: boolean }) {
  const [pct, setPct] = useState(72);

  useEffect(() => {
    if (reduceMotion) return;
    const id = globalThis.setInterval(() => {
      setPct((p) => (p >= 88 ? 64 : p + 4));
    }, 2400);
    return () => globalThis.clearInterval(id);
  }, [reduceMotion]);

  return (
    <motion.article
      className="aw-stack-card aw-stack-card--accent"
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.12, duration: 0.65, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
    >
      <div className="aw-stack-card-top">
        <div>
          <p className="aw-stack-kicker aw-stack-kicker--light">Agents</p>
          <p className="aw-stack-sub aw-stack-sub--light">Evidence collection</p>
        </div>
        <CardMenu />
      </div>

      <div className="aw-stack-accent-body">
        <div className="aw-stack-ring" aria-hidden>
          <svg viewBox="0 0 64 64">
            <circle className="aw-stack-ring-bg" cx="32" cy="32" r="26" />
            <motion.circle
              className="aw-stack-ring-fg"
              cx="32"
              cy="32"
              r="26"
              pathLength={1}
              strokeDasharray={1}
              initial={reduceMotion ? false : { strokeDashoffset: 0.36 }}
              animate={{ strokeDashoffset: 1 - pct / 100 }}
              transition={{ duration: 0.9, ease: EASE }}
              transform="rotate(-90 32 32)"
            />
            <text x="32" y="36" textAnchor="middle" className="aw-stack-ring-txt">
              {pct}%
            </text>
          </svg>
        </div>
        <div className="aw-stack-accent-meta">
          <span className="aw-stack-accent-num">
            <Count to={3} />
          </span>
          <span className="aw-stack-accent-lbl">Running now</span>
        </div>
      </div>
    </motion.article>
  );
}

function HeroMetricCard({ reduceMotion }: { reduceMotion: boolean }) {
  const [focus, setFocus] = useState(3);
  const max = 64;

  useEffect(() => {
    if (reduceMotion) return;
    const id = globalThis.setInterval(() => {
      setFocus((f) => (f + 1) % BAR_MONTHS.length);
    }, 2200);
    return () => globalThis.clearInterval(id);
  }, [reduceMotion]);

  return (
    <motion.article
      className="aw-stack-card aw-stack-card--hero"
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
    >
      <div className="aw-stack-card-top">
        <div className="aw-stack-hero-label">
          <span className="aw-stack-hero-icon" aria-hidden>
            <Users size={13} strokeWidth={2.2} />
          </span>
          <div>
            <p className="aw-stack-kicker">Total Audits</p>
            <p className="aw-stack-sub">Across all LOBs</p>
          </div>
        </div>
        <CardMenu />
      </div>

      <p className="aw-stack-metric">
        <Count to={471} />
      </p>

      <div className="aw-stack-bars" aria-hidden>
        {BAR_MONTHS.map((m, i) => {
          const active = i === focus;
          const h = `${(m.val / max) * 100}%`;
          return (
            <div key={m.label} className={`aw-stack-bar-col${active ? " is-active" : ""}`}>
              <div className="aw-stack-bar-track">
                <motion.span
                  className="aw-stack-bar"
                  initial={reduceMotion ? false : { height: 0 }}
                  animate={{ height: h }}
                  transition={{ duration: 0.75, ease: EASE, delay: 0.15 + i * 0.06 }}
                />
              </div>
              <span className="aw-stack-bar-lbl">{m.label}</span>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}

function TrendCard({ reduceMotion }: { reduceMotion: boolean }) {
  const [focus, setFocus] = useState(5);
  const reduce = reduceMotion;

  useEffect(() => {
    if (reduce) return;
    const id = globalThis.setInterval(() => {
      setFocus((f) => (f + 1) % LINE_POINTS.length);
    }, 2000);
    return () => globalThis.clearInterval(id);
  }, [reduce]);

  const w = 260;
  const h = 92;
  const pad = 8;
  const max = Math.max(...LINE_POINTS);
  const min = Math.min(...LINE_POINTS) - 4;
  const range = max - min;

  const toX = (i: number) => pad + (i / (LINE_POINTS.length - 1)) * (w - pad * 2);
  const toY = (v: number) => pad + (1 - (v - min) / range) * (h - pad * 2);

  const actualPath = LINE_POINTS.map((v, i) => `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(" ");
  const plannedPath = LINE_POINTS.map((v, i) => {
    const pv = v - 6 + (i % 2) * 3;
    return `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(pv).toFixed(1)}`;
  }).join(" ");

  const fx = toX(focus);
  const fy = toY(LINE_POINTS[focus]);

  return (
    <motion.article
      className="aw-stack-card aw-stack-card--tall"
      initial={reduce ? false : { opacity: 0, y: 18, x: 12 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.28, duration: 0.72, ease: EASE }}
      whileHover={reduce ? undefined : { y: -4 }}
    >
      <div className="aw-stack-card-top">
        <div>
          <p className="aw-stack-kicker">Completion Rate</p>
          <p className="aw-stack-sub">Audit program health</p>
        </div>
        <CardMenu />
      </div>

      <p className="aw-stack-metric aw-stack-metric--sm">
        <Count to={18} decimals={1} />
        <span>%</span>
      </p>
      <p className="aw-stack-metric-note">86 completed · 385 pending</p>

      <div className="aw-stack-line-wrap" aria-hidden>
        <svg className="aw-stack-line-chart" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <motion.path
            d={plannedPath}
            fill="none"
            className="aw-stack-line aw-stack-line--muted"
            pathLength={1}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          />
          <motion.path
            d={actualPath}
            fill="none"
            className="aw-stack-line aw-stack-line--accent"
            pathLength={1}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.45 }}
          />
          <AnimatePresence>
            {!reduce && (
              <motion.circle
                key={focus}
                className="aw-stack-line-dot"
                cx={fx}
                cy={fy}
                r="5.5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            )}
          </AnimatePresence>
        </svg>
        <div className="aw-stack-line-labels">
          {LINE_LABELS.map((l, i) =>
            i % 2 === 0 ? (
              <span key={l + i}>{l}</span>
            ) : null,
          )}
        </div>
      </div>
    </motion.article>
  );
}

function MiniStatusCard({ reduceMotion }: { reduceMotion: boolean }) {
  const rows = [
    { id: "AUD-486", status: "In Progress", tone: "blue" },
    { id: "AUD-484", status: "Completed", tone: "grey" },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = globalThis.setInterval(() => setActive((a) => (a + 1) % rows.length), 2600);
    return () => globalThis.clearInterval(id);
  }, [reduceMotion, rows.length]);

  return (
    <motion.article
      className="aw-stack-card aw-stack-card--mini"
      initial={reduceMotion ? false : { opacity: 0, y: 28, x: 14 }}
      animate={{ opacity: 1, y: 12, x: 8 }}
      transition={{ delay: 0.36, duration: 0.65, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: 8, x: 8, scale: 1.02 }}
    >
      <div className="aw-stack-card-top">
        <div className="aw-stack-hero-label">
          <span className="aw-stack-hero-icon aw-stack-hero-icon--live" aria-hidden>
            <Bot size={12} strokeWidth={2.2} />
          </span>
          <p className="aw-stack-kicker">Live Audits</p>
        </div>
        <CardMenu />
      </div>
      <ul className="aw-stack-mini-list">
        {rows.map((row, i) => (
          <li key={row.id} className={`aw-stack-mini-row${i === active ? " is-active" : ""}`}>
            <span className="aw-stack-mini-id">{row.id}</span>
            <span className={`aw-stack-mini-pill aw-stack-mini-pill--${row.tone}`}>{row.status}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function AuditorHeroBento() {
  const reduceMotion = !!useReducedMotion();

  return (
    <div className="aw-hero-bento" aria-hidden>
      <div className="aw-bento-stack">
        <AccentCard reduceMotion={reduceMotion} />
        <HeroMetricCard reduceMotion={reduceMotion} />
        <TrendCard reduceMotion={reduceMotion} />
        <MiniStatusCard reduceMotion={reduceMotion} />
      </div>
    </div>
  );
}
