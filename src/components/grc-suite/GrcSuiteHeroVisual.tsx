"use client";

import type { CSSProperties } from "react";
import { useEffect, useId, useState } from "react";
import { ChevronDown, ShieldCheck, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { grcSuitePage } from "@/content/site";

const { visual } = grcSuitePage.hero;
const ease = [0.22, 1, 0.36, 1] as const;

const CHART_W = 280;
const CHART_H = 108;
const GROWTH_LOOP_SECONDS = 9;

/** Seamless loop: endpoints match; curve rises toward 95–96% then gently consolidates. */
const GROWTH_FRAMES = [
  [77, 81, 84, 89, 94],
  [78, 82, 85, 90, 95],
  [78.5, 82.5, 86, 91, 96],
  [79, 83, 86.5, 91.5, 96],
  [78.5, 82.5, 86, 91, 96],
  [78, 82, 85, 90, 95],
  [77.5, 81.5, 84.5, 89.5, 94.5],
  [77, 81, 84, 89, 94],
];

function smoothstep(t: number) {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * clamped * (3 - 2 * clamped);
}

function lerpSeries(a: number[], b: number[], t: number) {
  return a.map((value, index) => value + (b[index] - value) * t);
}

function chartPoints(series: number[]) {
  const padX = 8;
  const padY = 12;
  const innerW = CHART_W - padX * 2;
  const innerH = CHART_H - padY * 2;
  const max = Math.max(...series);
  const min = Math.min(...series) - 4;
  const range = max - min || 1;

  return series.map((value, index) => ({
    x: padX + (index / (series.length - 1)) * innerW,
    y: padY + innerH - ((value - min) / range) * innerH,
    value,
  }));
}

function buildSmoothPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];
    const cx = (current.x + next.x) / 2;
    path += ` C ${cx} ${current.y}, ${cx} ${next.y}, ${next.x} ${next.y}`;
  }

  return path;
}

function buildArea(points: { x: number; y: number }[]) {
  if (!points.length) return "";
  const line = buildSmoothPath(points);
  const last = points[points.length - 1];
  const first = points[0];
  return `${line} L ${last.x} ${CHART_H} L ${first.x} ${CHART_H} Z`;
}

function useGrowthSeries(base: number[], reduceMotion: boolean) {
  const [series, setSeries] = useState(base);

  useEffect(() => {
    if (reduceMotion) {
      setSeries(base);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const maxIndex = GROWTH_FRAMES.length - 1;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const loopT = (elapsed % GROWTH_LOOP_SECONDS) / GROWTH_LOOP_SECONDS;
      const position = loopT * maxIndex;
      const index = Math.min(Math.floor(position), maxIndex - 1);
      const blend = smoothstep(position - index);
      const next = lerpSeries(GROWTH_FRAMES[index], GROWTH_FRAMES[index + 1], blend);
      setSeries(next);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [base, reduceMotion]);

  return reduceMotion ? base : series;
}

function reveal(delay: number, y = 28) {
  return {
    initial: { opacity: 0, y, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay, duration: 0.85, ease },
  };
}

function VizBackdrop() {
  return (
    <div className="grc-viz-backdrop">
      <span className="grc-viz-backdrop-glow grc-viz-backdrop-glow--a" />
      <span className="grc-viz-backdrop-glow grc-viz-backdrop-glow--b" />
      <span className="grc-viz-backdrop-glow grc-viz-backdrop-glow--c" />
      <span className="grc-viz-backdrop-grid" />
      <svg className="grc-viz-orbit" viewBox="0 0 400 400" aria-hidden>
        <ellipse
          cx="200"
          cy="200"
          rx="168"
          ry="118"
          fill="none"
          stroke="rgba(255, 122, 0, 0.14)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="132"
          ry="92"
          fill="none"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="1"
        />
      </svg>
      <span className="grc-viz-connector" aria-hidden />
    </div>
  );
}

function TrendCard({ reduceMotion, uid }: { reduceMotion: boolean; uid: string }) {
  const { trendCard } = visual;
  const growthSeries = useGrowthSeries(trendCard.series, reduceMotion);
  const points = chartPoints(growthSeries);
  const path = buildSmoothPath(points);
  const area = buildArea(points);
  const highlight = points[trendCard.highlightIndex];
  const fillId = `${uid}-fill`;
  const strokeId = `${uid}-stroke`;
  const glowId = `${uid}-glow`;
  const peakValue = Math.round(growthSeries[trendCard.highlightIndex] ?? 95);

  return (
    <motion.div
      className="grc-viz-card grc-viz-card--trend"
      {...(reduceMotion ? {} : reveal(0.12, 26))}
    >
      <span className="grc-viz-card-shine" aria-hidden />

      <div className="grc-viz-trend-head">
        <div className="grc-viz-trend-copy">
          <div className="grc-viz-card-eyebrow">
            <span className="grc-viz-card-eyebrow-dot" aria-hidden />
            {trendCard.label}
          </div>
          <p className="grc-viz-trend-value">{trendCard.value}</p>
          {trendCard.trend ? (
            <p className="grc-viz-trend">
              <span className="grc-viz-trend-chip">
                <TrendingUp size={10} strokeWidth={2.5} aria-hidden />
                {trendCard.trend}
              </span>
              <span>{trendCard.trendLabel}</span>
            </p>
          ) : null}
        </div>

        <div className="grc-viz-trend-actions">
          <span className="grc-viz-live-pill">
            <span className="grc-viz-live-dot" aria-hidden />
            Live
          </span>
          <button type="button" className="grc-viz-period-pill" tabIndex={-1} aria-hidden>
            {trendCard.period}
            <ChevronDown size={12} strokeWidth={2.25} aria-hidden />
          </button>
        </div>
      </div>

      <div className="grc-viz-chart-wrap">
        <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="grc-viz-chart" aria-hidden>
          <defs>
            <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255, 122, 0, 0.32)" />
              <stop offset="72%" stopColor="rgba(255, 122, 0, 0.08)" />
              <stop offset="100%" stopColor="rgba(255, 122, 0, 0)" />
            </linearGradient>
            <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffb878" />
              <stop offset="45%" stopColor="#ff9830" />
              <stop offset="100%" stopColor="#ff7a00" />
            </linearGradient>
            <linearGradient id={glowId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 184, 120, 0)" />
              <stop offset="42%" stopColor="rgba(255, 184, 120, 0.95)" />
              <stop offset="58%" stopColor="rgba(255, 122, 0, 0.95)" />
              <stop offset="100%" stopColor="rgba(255, 122, 0, 0)" />
            </linearGradient>
            <clipPath id={`${uid}-clip`}>
              <rect x="0" y="0" width={CHART_W} height={CHART_H} rx="4" />
            </clipPath>
          </defs>

          {[0.25, 0.5, 0.75].map((ratio) => (
            <line
              key={ratio}
              x1={8}
              x2={CHART_W - 8}
              y1={CHART_H * ratio}
              y2={CHART_H * ratio}
              stroke="rgba(0, 0, 0, 0.04)"
              strokeWidth="1"
            />
          ))}

          <g clipPath={`url(#${uid}-clip)`}>
            <path className="grc-viz-chart-area" d={area} fill={`url(#${fillId})`} />
            <path
              className="grc-viz-chart-glow"
              d={path}
              fill="none"
              stroke="rgba(255, 122, 0, 0.22)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              className="grc-viz-chart-line"
              d={path}
              fill="none"
              stroke={`url(#${strokeId})`}
              strokeWidth="2.25"
              strokeLinecap="round"
            />
            {!reduceMotion ? (
              <path
                className="grc-viz-chart-shine"
                d={path}
                fill="none"
                stroke={`url(#${glowId})`}
                strokeWidth="2.75"
                strokeLinecap="round"
              />
            ) : null}
          </g>

          {highlight ? (
            <g transform={`translate(${highlight.x} ${highlight.y})`}>
              {!reduceMotion ? (
                <circle
                  className="grc-viz-chart-peak-pulse"
                  r="10"
                  fill="rgba(255, 122, 0, 0.14)"
                />
              ) : null}
              <circle className="grc-viz-chart-peak-dot" r="4.5" fill="#ff7a00" />
              <circle
                r="8"
                fill="none"
                stroke="rgba(255, 122, 0, 0.35)"
                strokeWidth="1.5"
              />
            </g>
          ) : null}
        </svg>

        {highlight ? (
          <span
            className="grc-viz-chart-tooltip"
            style={{
              left: `${(highlight.x / CHART_W) * 100}%`,
              top: `${(highlight.y / CHART_H) * 100 - 20}%`,
            }}
          >
            {peakValue}%
          </span>
        ) : null}

        <div className="grc-viz-chart-days">
          {trendCard.days.map((day, index) => (
            <span
              key={day}
              className={index === trendCard.highlightIndex ? "is-active" : undefined}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FrameworkProgress({ value, accent }: { value: number; accent: string }) {
  return (
    <div className="grc-viz-framework-progress" aria-hidden>
      <span
        className="grc-viz-framework-progress-fill"
        style={
          {
            "--progress": `${value}%`,
            "--progress-accent": accent,
          } as CSSProperties
        }
      />
    </div>
  );
}

function FrameworksCard({ reduceMotion }: { reduceMotion: boolean }) {
  const { frameworksCard } = visual;
  const progressValues = [98, 94];

  return (
    <motion.div
      className="grc-viz-card grc-viz-card--frameworks"
      {...(reduceMotion ? {} : reveal(0.32, 34))}
    >
      <span className="grc-viz-card-shine" aria-hidden />

      <div className="grc-viz-frameworks-head">
        <div>
          <div className="grc-viz-card-eyebrow">
            <span className="grc-viz-card-eyebrow-dot" aria-hidden />
            {frameworksCard.title}
          </div>
          <h3 className="grc-viz-frameworks-title">Governance coverage</h3>
        </div>
        <span className="grc-viz-frameworks-link">{frameworksCard.viewAllLabel}</span>
      </div>

      <ul className="grc-viz-frameworks-list">
        {frameworksCard.items.map((item, index) => (
          <li key={item.badge} className="grc-viz-framework-row">
            <span className="grc-viz-framework-icon" aria-hidden>
              <ShieldCheck size={14} strokeWidth={2} />
            </span>
            <div className="grc-viz-framework-copy">
              <div className="grc-viz-framework-top">
                <p className="grc-viz-framework-name">{item.name}</p>
                <span
                  className="grc-viz-framework-badge"
                  style={{ "--badge-accent": item.accent } as CSSProperties}
                >
                  {item.badge}
                </span>
              </div>
              <p className="grc-viz-framework-score">{item.score}</p>
              <FrameworkProgress value={progressValues[index] ?? 90} accent={item.accent} />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ScanChip({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      className="grc-viz-scan-chip"
      {...(reduceMotion ? {} : reveal(0.52, 14))}
      animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
      transition={
        reduceMotion
          ? undefined
          : { y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }
      }
    >
      <span className="grc-viz-scan-pulse" aria-hidden />
      <span>{visual.scanChip}</span>
    </motion.div>
  );
}

export function GrcSuiteHeroVisual() {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, "");

  return (
    <div className="grc-hero-visual" aria-hidden>
      <div className="grc-viz-stage">
        <VizBackdrop />
        <TrendCard reduceMotion={!!reduceMotion} uid={uid} />
        <FrameworksCard reduceMotion={!!reduceMotion} />
        <ScanChip reduceMotion={!!reduceMotion} />
      </div>
    </div>
  );
}
