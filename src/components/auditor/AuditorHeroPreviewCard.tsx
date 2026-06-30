"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Calendar, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import "./auditor.css";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCENE_MS = 5200;

function Count({ to, suffix = "", dur = 900 }: { to: number; suffix?: string; dur?: number }) {
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
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, dur, reduce]);

  return (
    <>
      {v}
      {suffix}
    </>
  );
}

const DEADLINES = [
  { label: "Q3 Access Controls", pct: 72, tone: "amber", date: "Jul 12" },
  { label: "Vendor Risk Review", pct: 45, tone: "ember", date: "Jul 18" },
  { label: "SOX ITGC", pct: 88, tone: "gold", date: "Jul 22" },
] as const;

const FINDINGS = [
  { label: "CM-3 Change Control", pct: 60, tone: "amber", date: "48h SLA" },
  { label: "AC-6 Least Privilege", pct: 90, tone: "ember", date: "Resolved" },
  { label: "AU-12 Audit Logging", pct: 40, tone: "gold", date: "In review" },
] as const;

function ReadinessChart({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="aw-hc-chart-wrap">
      <svg className="aw-hc-chart" viewBox="0 0 280 88" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="awHcArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="280" y2={y} className="aw-hc-grid" />
        ))}
        <path
          className="aw-hc-area"
          d="M0,68 C28,64 48,58 72,52 C96,46 118,38 142,32 C166,26 196,18 224,14 C248,10 268,8 280,6 L280,88 L0,88 Z"
          fill="url(#awHcArea)"
        />
        <motion.path
          className="aw-hc-line"
          d="M0,68 C28,64 48,58 72,52 C96,46 118,38 142,32 C166,26 196,18 224,14 C248,10 268,8 280,6"
          fill="none"
          stroke="#ff7a00"
          strokeWidth="2.8"
          strokeLinecap="round"
          pathLength={1}
          initial={reduce ? false : { strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: active ? 0 : 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
        />
        <motion.circle
          className="aw-hc-dot"
          cx="224"
          cy="14"
          r="4.5"
          fill="#fff"
          stroke="#ff7a00"
          strokeWidth="2"
          initial={reduce ? false : { opacity: 0, scale: 0 }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0 }}
          transition={{ delay: 1.1, duration: 0.35, ease: EASE }}
        />
      </svg>
      {active && (
        <motion.div
          className="aw-hc-tooltip"
          initial={reduce ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.35, ease: EASE }}
        >
          <span className="aw-hc-tooltip-val">96%</span>
          <span className="aw-hc-tooltip-sub">22 Aug · Q3 close</span>
        </motion.div>
      )}
      <div className="aw-hc-axis" aria-hidden>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}

function SceneReadiness({ zoom }: { zoom: boolean }) {
  return (
    <>
      <div className={`aw-hc-main-metric${zoom ? " is-zoom" : ""}`}>
        <div className="aw-hc-metric-block">
          <span className="aw-hc-metric-lbl">This quarter</span>
          <div className="aw-hc-metric-row">
            <span className="aw-hc-metric-val">
              <Count to={96} suffix="%" />
            </span>
            <span className="aw-hc-pill aw-hc-pill--up">
              <ArrowUpRight size={10} strokeWidth={2.8} /> 12%
            </span>
          </div>
        </div>
        <div className="aw-hc-metric-block aw-hc-metric-block--muted">
          <span className="aw-hc-metric-lbl">Last quarter</span>
          <div className="aw-hc-metric-row">
            <span className="aw-hc-metric-val aw-hc-metric-val--sm">84%</span>
            <span className="aw-hc-pill aw-hc-pill--down">
              <ArrowDownRight size={10} strokeWidth={2.8} /> 4%
            </span>
          </div>
        </div>
      </div>
      <ReadinessChart active />
    </>
  );
}

function SceneCoverage({ zoom }: { zoom: boolean }) {
  return (
    <>
      <div className={`aw-hc-main-metric${zoom ? " is-zoom" : ""}`}>
        <div className="aw-hc-metric-block">
          <span className="aw-hc-metric-lbl">Controls passing</span>
          <div className="aw-hc-metric-row">
            <span className="aw-hc-metric-val">
              <Count to={92} suffix="%" />
            </span>
            <span className="aw-hc-pill aw-hc-pill--up">
              <ArrowUpRight size={10} strokeWidth={2.8} /> 8%
            </span>
          </div>
        </div>
        <div className="aw-hc-metric-block aw-hc-metric-block--muted">
          <span className="aw-hc-metric-lbl">Open findings</span>
          <div className="aw-hc-metric-row">
            <span className="aw-hc-metric-val aw-hc-metric-val--sm">
              <Count to={1} />
            </span>
            <span className="aw-hc-pill aw-hc-pill--down">
              <ArrowDownRight size={10} strokeWidth={2.8} /> 3
            </span>
          </div>
        </div>
      </div>
      <div className="aw-hc-bars">
        {[
          { label: "Access", w: 94 },
          { label: "Change", w: 78 },
          { label: "Logging", w: 88 },
          { label: "Privacy", w: 96 },
        ].map((b) => (
          <div key={b.label} className="aw-hc-bar-row">
            <span>{b.label}</span>
            <div className="aw-hc-bar-track">
              <motion.div
                className="aw-hc-bar-fill"
                initial={{ width: "0%" }}
                animate={{ width: `${b.w}%` }}
                transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              />
            </div>
            <span className="aw-hc-bar-pct">{b.w}%</span>
          </div>
        ))}
      </div>
    </>
  );
}

function OverlapList({
  title,
  items,
  zoomIndex,
  zoom,
}: {
  title: string;
  items: readonly { label: string; pct: number; tone: string; date: string }[];
  zoomIndex: number;
  zoom: boolean;
}) {
  return (
    <div className={`aw-hc-overlap${zoom ? " is-zoom" : ""}`}>
      <div className="aw-hc-overlap-head">
        <span className="aw-hc-overlap-title">{title}</span>
        <MoreHorizontal size={14} strokeWidth={2} className="aw-hc-overlap-menu" />
      </div>
      <ul className="aw-hc-overlap-list">
        {items.map((item, i) => (
          <li
            key={item.label}
            className={`aw-hc-overlap-item${zoom && i === zoomIndex ? " is-focus" : ""}`}
          >
            <div className="aw-hc-overlap-item-top">
              <span className="aw-hc-overlap-item-lbl">{item.label}</span>
              <span className="aw-hc-overlap-date">
                <Calendar size={9} strokeWidth={2.2} />
                {item.date}
              </span>
            </div>
            <div className="aw-hc-overlap-track">
              <motion.span
                className={`aw-hc-overlap-fill aw-hc-overlap-fill--${item.tone}`}
                initial={{ width: "0%" }}
                animate={{ width: `${item.pct}%` }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.08 }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SCENES = [
  {
    title: "Audit readiness",
    main: SceneReadiness,
    overlapTitle: "Upcoming deadlines",
    overlapItems: DEADLINES,
    overlapZoomIndex: 0,
    mainZoom: true,
    overlapZoom: false,
  },
  {
    title: "Control coverage",
    main: SceneCoverage,
    overlapTitle: "Active findings",
    overlapItems: FINDINGS,
    overlapZoomIndex: 0,
    mainZoom: true,
    overlapZoom: false,
  },
] as const;

/** Hero right column — overlapping dashboard cards (reference-style) */
export function AuditorHeroPreviewCard() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = globalThis.setInterval(() => {
      setIndex((i) => (i + 1) % SCENES.length);
    }, SCENE_MS);
    return () => globalThis.clearInterval(id);
  }, [reduce]);

  const scene = SCENES[index];
  const Main = scene.main;

  return (
    <div className="aw-hero-preview" aria-hidden>
      <div className="aw-hero-preview-blob aw-hero-preview-blob--1" />
      <div className="aw-hero-preview-blob aw-hero-preview-blob--2" />
      <div className="aw-hero-preview-blob aw-hero-preview-blob--3" />
      <div className="aw-hero-preview-dots aw-hero-preview-dots--tr" />

      <motion.div
        className="aw-hero-preview-stack"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.75, ease: EASE }}
      >
        <motion.div
          className="aw-hero-preview-float"
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="aw-hc-main">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={scene.title}
                className="aw-hc-main-inner"
                initial={reduce ? false : { opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -10 }}
                transition={{ duration: 0.38, ease: EASE }}
              >
                <h3 className="aw-hc-main-title">{scene.title}</h3>
                <Main zoom={scene.mainZoom} />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={scene.overlapTitle}
              initial={reduce ? false : { opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.38, ease: EASE }}
            >
              <OverlapList
                title={scene.overlapTitle}
                items={scene.overlapItems}
                zoomIndex={scene.overlapZoomIndex}
                zoom={scene.overlapZoom}
              />
            </motion.div>
          </AnimatePresence>

          <div className="aw-hc-dots" aria-hidden>
            {SCENES.map((s, i) => (
              <span key={s.title} className={`aw-hc-dot-pip${i === index ? " is-active" : ""}`} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
