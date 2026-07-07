"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, FileText, Globe, MoreVertical, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./regulatory.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const OBLIGATION_MONTHS = [
  { label: "Jan", val: 38, total: 186 },
  { label: "Feb", val: 44, total: 212 },
  { label: "Mar", val: 52, total: 248 },
  { label: "Apr", val: 48, total: 231 },
  { label: "May", val: 56, total: 265 },
];

const IMPACT_MONTHS = [
  { label: "Nov", val: 32, rate: 12.4 },
  { label: "Dec", val: 38, rate: 14.8 },
  { label: "Jan", val: 42, rate: 16.2 },
  { label: "Feb", val: 48, rate: 18.1 },
  { label: "Mar", val: 52, rate: 19.6 },
  { label: "Apr", val: 49, rate: 18.8 },
  { label: "May", val: 55, rate: 20.4 },
];

const LINE_POINTS = IMPACT_MONTHS.map((m) => m.val);
const LINE_LABELS = IMPACT_MONTHS.map((m) => m.label);
const IMPACT_RATES = IMPACT_MONTHS.map((m) => m.rate);

function CardMenu() {
  return (
    <span className="aw-stack-menu" aria-hidden>
      <MoreVertical size={14} strokeWidth={2.2} />
    </span>
  );
}

function Count({ to, dur = 1000, decimals = 0 }: { to: number; dur?: number; decimals?: number }) {
  const reduce = useReducedMotion();
  const fromRef = useRef(0);
  const [v, setV] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setV(to);
      fromRef.current = to;
      return;
    }

    const from = fromRef.current;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const raw = from + (to - from) * eased;
      setV(decimals > 0 ? Math.round(raw * 10) / 10 : Math.round(raw));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, dur, decimals, reduce]);

  return <>{decimals > 0 ? v.toFixed(decimals) : v.toLocaleString()}</>;
}

function MonitoringAgentsCard({ reduceMotion }: { reduceMotion: boolean }) {
  const [pct, setPct] = useState(72);

  useEffect(() => {
    if (reduceMotion) return;
    const id = globalThis.setInterval(() => {
      setPct((p) => (p >= 92 ? 64 : p + 4));
    }, 2400);
    return () => globalThis.clearInterval(id);
  }, [reduceMotion]);

  return (
    <motion.article
      className="aw-stack-card aw-stack-card--accent"
      initial={reduceMotion ? false : { opacity: 0, y: 20, x: -12 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.12, duration: 0.65, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
    >
      <div className="aw-stack-card-top">
        <div className="aw-stack-hero-label">
          <span className="aw-stack-hero-icon aw-stack-hero-icon--accent" aria-hidden>
            <Bot size={12} strokeWidth={2.2} />
          </span>
          <div>
            <p className="aw-stack-kicker aw-stack-kicker--accent">Monitoring Agents</p>
            <p className="aw-stack-sub aw-stack-sub--accent">Regulatory sources</p>
          </div>
        </div>
        <CardMenu />
      </div>

      <div className="aw-stack-accent-body">
        <div className="aw-stack-ring aw-stack-ring--accent" aria-hidden>
          <svg viewBox="0 0 64 64">
            <defs>
              <linearGradient id="rc-accent-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb347" />
                <stop offset="100%" stopColor="#ff7a00" />
              </linearGradient>
            </defs>
            <circle className="aw-stack-ring-bg aw-stack-ring-bg--accent" cx="32" cy="32" r="26" />
            <motion.circle
              className="aw-stack-ring-fg aw-stack-ring-fg--accent"
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
            <text x="32" y="36" textAnchor="middle" className="aw-stack-ring-txt aw-stack-ring-txt--accent">
              {pct}%
            </text>
          </svg>
        </div>
        <div className="aw-stack-accent-meta">
          <span className="aw-stack-accent-num">
            <Count to={4} />
          </span>
          <span className="aw-stack-accent-live">
            <span className="aw-stack-accent-live-dot" aria-hidden />
            Scanning circulars
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function ObligationsCard({ reduceMotion }: { reduceMotion: boolean }) {
  const [focus, setFocus] = useState(2);
  const max = 56;

  useEffect(() => {
    if (reduceMotion) return;
    const id = globalThis.setInterval(() => {
      setFocus((f) => (f + 1) % OBLIGATION_MONTHS.length);
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
            <Globe size={13} strokeWidth={2.2} />
          </span>
          <div>
            <p className="aw-stack-kicker">Total Obligations</p>
            <p className="aw-stack-sub">Across all jurisdictions</p>
          </div>
        </div>
        <CardMenu />
      </div>

      <p className="aw-stack-metric">
        <Count to={OBLIGATION_MONTHS[focus].total} />
      </p>

      <div className="aw-stack-bars" aria-hidden>
        {OBLIGATION_MONTHS.map((m, i) => {
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

function ImpactAssessmentCard({ reduceMotion }: { reduceMotion: boolean }) {
  const [focus, setFocus] = useState(4);
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
  const baseline = h - pad;

  const toX = (i: number) => pad + (i / (LINE_POINTS.length - 1)) * (w - pad * 2);
  const toY = (v: number) => pad + (1 - (v - min) / range) * (h - pad * 2);

  const actualPath = LINE_POINTS.map((v, i) => `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(" ");
  const areaPath = `${actualPath} L${toX(LINE_POINTS.length - 1).toFixed(1)},${baseline} L${toX(0).toFixed(1)},${baseline} Z`;
  const plannedPath = LINE_POINTS.map((v, i) => {
    const pv = v - 6 + (i % 2) * 3;
    return `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(pv).toFixed(1)}`;
  }).join(" ");

  const fx = toX(focus);
  const fy = toY(LINE_POINTS[focus]);
  const gridYs = [0.25, 0.5, 0.75].map((t) => pad + (h - pad * 2) * t);

  return (
    <motion.article
      className="aw-stack-card aw-stack-card--tall"
      initial={reduce ? false : { opacity: 0, y: 28, x: 14 }}
      animate={{ opacity: 1, y: 12, x: 8 }}
      transition={{ delay: 0.28, duration: 0.65, ease: EASE }}
      whileHover={reduce ? undefined : { y: 8, x: 8, scale: 1.02 }}
    >
      <div className="aw-stack-card-top">
        <div className="aw-stack-hero-label">
          <span className="aw-stack-hero-icon" aria-hidden>
            <TrendingUp size={12} strokeWidth={2.2} />
          </span>
          <div>
            <p className="aw-stack-kicker">Impact Assessment</p>
            <p className="aw-stack-sub">Regulatory change velocity</p>
          </div>
        </div>
        <CardMenu />
      </div>

      <div className="aw-stack-rate-head">
        <p className="aw-stack-metric aw-stack-metric--sm">
          <Count to={IMPACT_RATES[focus]} decimals={1} />
          <span>%</span>
        </p>
        <div className="aw-stack-rate-stats">
          <span className="aw-stack-rate-pill aw-stack-rate-pill--done">42 assessed</span>
          <span className="aw-stack-rate-pill aw-stack-rate-pill--pending">18 pending</span>
        </div>
      </div>

      <div className="aw-stack-line-wrap aw-stack-line-wrap--rate" aria-hidden>
        <svg className="aw-stack-line-chart" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="rc-rate-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {gridYs.map((y) => (
            <line key={y} x1={pad} y1={y} x2={w - pad} y2={y} className="aw-stack-line-grid" />
          ))}
          <motion.path
            d={areaPath}
            className="aw-stack-line-area"
            fill="url(#rc-rate-area)"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          />
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
                r="5"
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
              <span key={l + i} className={i === focus ? "is-active" : undefined}>
                {l}
              </span>
            ) : null,
          )}
        </div>
      </div>
    </motion.article>
  );
}

function LatestMappedCard({ reduceMotion }: { reduceMotion: boolean }) {
  const rows = [
    { id: "RBI Circular", status: "6 mapped", tone: "blue" },
    { id: "SEBI LODR", status: "4 mapped", tone: "grey" },
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
            <FileText size={12} strokeWidth={2.2} />
          </span>
          <p className="aw-stack-kicker">Latest Mapped</p>
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

export function RegulatoryHeroBento() {
  const reduceMotion = !!useReducedMotion();

  return (
    <div className="aw-hero-bento" aria-hidden>
      <div className="aw-bento-stack">
        <MonitoringAgentsCard reduceMotion={reduceMotion} />
        <ObligationsCard reduceMotion={reduceMotion} />
        <ImpactAssessmentCard reduceMotion={reduceMotion} />
        <LatestMappedCard reduceMotion={reduceMotion} />
      </div>
    </div>
  );
}
