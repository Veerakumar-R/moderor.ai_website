"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { JSX } from "react";
import { DomainAnimatedMetric } from "./DomainAnimatedMetric";

type MetricVisual =
  | { type: "percent"; value: number }
  | { type: "range"; start: number; end: number }
  | { type: "multiplier"; value: number }
  | { type: "duration"; value: number }
  | { type: "count"; value: number; max: number };

function parseMetricVisual(raw: string): MetricVisual {
  const rangeMatch = raw.match(/^(\d+(?:\.\d+)?)[–-](\d+(?:\.\d+)?)(.*)$/);
  if (rangeMatch) {
    return {
      type: "range",
      start: parseFloat(rangeMatch[1]),
      end: parseFloat(rangeMatch[2]),
    };
  }

  if (raw.includes("×") || /x$/i.test(raw.trim())) {
    const value = parseFloat(raw.replace(/[^0-9.]/g, "")) || 3;
    return { type: "multiplier", value };
  }

  if (raw.endsWith("%")) {
    return { type: "percent", value: parseFloat(raw) || 0 };
  }

  if (raw.endsWith("m")) {
    return { type: "duration", value: parseFloat(raw) || 0 };
  }

  const plusMatch = raw.match(/^(\d+(?:\.\d+)?)\+$/);
  if (plusMatch) {
    return { type: "count", value: parseFloat(plusMatch[1]), max: 60 };
  }

  const num = parseFloat(raw.replace(/[^0-9.]/g, ""));
  return { type: "count", value: num || 0, max: num > 200 ? 600 : 100 };
}

const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));

/** Normalize any metric value into a 0..1 fill fraction for charting. */
function metricFraction(raw: string): number {
  const v = parseMetricVisual(raw);
  switch (v.type) {
    case "percent":
      return clamp(v.value / 100);
    case "range":
      return clamp(v.end / 100);
    case "multiplier":
      return clamp(v.value / 5);
    case "duration":
      return clamp((10 - v.value) / 10, 0.12, 1);
    case "count":
      return clamp(v.value / v.max);
  }
}

function ChartDefs({ gradId, vertical = false }: { gradId: string; vertical?: boolean }) {
  return (
    <defs>
      <linearGradient
        id={gradId}
        x1="0%"
        y1={vertical ? "100%" : "0%"}
        x2={vertical ? "0%" : "100%"}
        y2="0%"
      >
        <stop offset="0%" stopColor="#ffb347" />
        <stop offset="100%" stopColor="#ff7a00" />
      </linearGradient>
      <filter id={`${gradId}-glow`} x="-20%" y="-80%" width="140%" height="260%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Compliance — semicircular gauge. */
function GaugeChart({
  fraction,
  chartKey,
  gradId,
  reduceMotion,
}: {
  fraction: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const arc = "M28 35 A32 32 0 0 1 92 35";
  const angle = fraction * Math.PI;
  const dotX = 60 - 32 * Math.cos(angle);
  const dotY = 35 - 32 * Math.sin(angle);

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      <path d={arc} fill="none" stroke="#ececec" strokeWidth="6" strokeLinecap="round" />
      <motion.path
        key={`gauge-${chartKey}`}
        d={arc}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="6"
        strokeLinecap="round"
        filter={`url(#${gradId}-glow)`}
        initial={reduceMotion ? { pathLength: fraction } : { pathLength: 0 }}
        animate={{ pathLength: fraction }}
        transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
      />
      <motion.circle
        key={`gauge-dot-${chartKey}`}
        r="3.2"
        fill="#ff7a00"
        initial={reduceMotion ? { cx: dotX, cy: dotY, opacity: 1 } : { cx: 28, cy: 35, opacity: 0 }}
        animate={{ cx: dotX, cy: dotY, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
      />
    </svg>
  );
}

/** Risk — ascending column bars. */
function ColumnChart({
  fraction,
  chartKey,
  gradId,
  reduceMotion,
}: {
  fraction: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const ratios = [0.42, 0.58, 0.72, 0.86, 1];

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} vertical />
      {ratios.map((ratio, i) => {
        const h = Math.max(4, ratio * fraction * 30);
        const x = 8 + i * 22;
        const isLast = i === ratios.length - 1;
        return (
          <motion.rect
            key={`col-${chartKey}-${i}`}
            x={x}
            y={33 - h}
            width="13"
            height={h}
            rx="3"
            fill={`url(#${gradId})`}
            filter={isLast ? `url(#${gradId}-glow)` : undefined}
            initial={reduceMotion ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: isLast ? [0.8, 1, 0.92, 1] : 0.82 }}
            transition={{
              scaleY: { type: "spring", stiffness: 300, damping: 22, delay: 0.1 + i * 0.09 },
              opacity: { duration: 0.4, delay: 0.5 + i * 0.07 },
            }}
            style={{ transformOrigin: `${x + 6.5}px 33px` }}
          />
        );
      })}
    </svg>
  );
}

/** Identity — segmented level meter. */
function SegmentMeter({
  fraction,
  chartKey,
  gradId,
  reduceMotion,
}: {
  fraction: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const segments = 8;
  const filled = Math.max(1, Math.round(fraction * segments));
  const gap = 3;
  const segW = (120 - gap * (segments - 1)) / segments;

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      {Array.from({ length: segments }, (_, i) => {
        const active = i < filled;
        const x = i * (segW + gap);
        return (
          <motion.rect
            key={`seg-${chartKey}-${i}`}
            x={x}
            y="12"
            width={segW}
            height="12"
            rx="3"
            fill={active ? `url(#${gradId})` : "#ececec"}
            filter={active && i === filled - 1 ? `url(#${gradId}-glow)` : undefined}
            initial={reduceMotion ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: active ? 1 : 0.5, scaleX: 1 }}
            transition={{ duration: 0.32, delay: 0.1 + i * 0.07, ease: EASE }}
            style={{ transformOrigin: `${x}px 18px` }}
          />
        );
      })}
    </svg>
  );
}

/** Engineering — sparkline area trend. */
function SparkArea({
  fraction,
  chartKey,
  gradId,
  reduceMotion,
}: {
  fraction: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const pts = [0.2, 0.32, 0.28, 0.55, 0.62, fraction];
  const coords = pts.map((p, i) => {
    const x = 6 + (i / (pts.length - 1)) * 108;
    const y = 32 - clamp(p) * 26;
    return { x, y };
  });
  const line = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x.toFixed(1)} ${c.y.toFixed(1)}`).join(" ");
  const area = `${line} L114 33 L6 33 Z`;
  const end = coords[coords.length - 1];

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      <linearGradient id={`${gradId}-fill`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
      </linearGradient>
      <line x1="6" y1="33" x2="114" y2="33" stroke="#ececec" strokeWidth="1" />
      <motion.path
        key={`spark-area-${chartKey}`}
        d={area}
        fill={`url(#${gradId}-fill)`}
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.path
        key={`spark-line-${chartKey}`}
        d={line}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${gradId}-glow)`}
        initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
      />
      <motion.circle
        key={`spark-dot-${chartKey}`}
        cx={end.x}
        cy={end.y}
        r="3"
        fill="#ff7a00"
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 1.1, type: "spring", stiffness: 280, damping: 18 }}
        style={{ transformOrigin: `${end.x}px ${end.y}px` }}
      />
    </svg>
  );
}

/** Compliance metric 2 — rising audit volume bars. */
function CountVolumeChart({
  fraction,
  chartKey,
  gradId,
  reduceMotion,
}: {
  fraction: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const bars = 8;
  const barW = 8;
  const gap = 4.5;
  const startX = (120 - (bars * barW + (bars - 1) * gap)) / 2;

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} vertical />
      <line x1="8" y1="33" x2="112" y2="33" stroke="#ececec" strokeWidth="1" />
      {Array.from({ length: bars }, (_, i) => {
        const t = (i + 1) / bars;
        const h = Math.max(5, Math.pow(t, 1.35) * fraction * 28);
        const x = startX + i * (barW + gap);
        const isPeak = i === bars - 1;
        return (
          <motion.rect
            key={`vol-${chartKey}-${i}`}
            x={x}
            y={33 - h}
            width={barW}
            height={h}
            rx="2"
            fill={`url(#${gradId})`}
            filter={isPeak ? `url(#${gradId}-glow)` : undefined}
            initial={reduceMotion ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: isPeak ? 1 : 0.55 + t * 0.35 }}
            transition={{
              scaleY: { type: "spring", stiffness: 320, damping: 20, delay: 0.12 + i * 0.06 },
              opacity: { duration: 0.35, delay: 0.18 + i * 0.05 },
            }}
            style={{ transformOrigin: `${x + barW / 2}px 33px` }}
          />
        );
      })}
    </svg>
  );
}

/** Percent reduction — full donut ring (distinct from semicircle gauge). */
function DonutRingChart({
  fraction,
  chartKey,
  gradId,
  reduceMotion,
}: {
  fraction: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const r = 12;
  const cx = 60;
  const cy = 18;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - fraction);

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#ececec" strokeWidth="4.5" />
      <motion.circle
        key={`ring-${chartKey}`}
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        transform={`rotate(-90 ${cx} ${cy})`}
        filter={`url(#${gradId}-glow)`}
        initial={reduceMotion ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.15, delay: 0.12, ease: EASE }}
      />
      <motion.circle
        key={`ring-dot-${chartKey}`}
        r="2.8"
        fill="#ff7a00"
        initial={
          reduceMotion
            ? { cx: cx + r * Math.cos(fraction * 2 * Math.PI - Math.PI / 2), cy: cy + r * Math.sin(fraction * 2 * Math.PI - Math.PI / 2), opacity: 1 }
            : { cx, cy: cy - r, opacity: 0 }
        }
        animate={{
          cx: cx + r * Math.cos(fraction * 2 * Math.PI - Math.PI / 2),
          cy: cy + r * Math.sin(fraction * 2 * Math.PI - Math.PI / 2),
          opacity: 1,
        }}
        transition={{ duration: 1.15, delay: 0.12, ease: EASE }}
      />
    </svg>
  );
}

/** Duration / speed — descending step line (lower is better). */
function DurationStepsChart({
  fraction,
  chartKey,
  gradId,
  reduceMotion,
}: {
  fraction: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const steps = [1, 0.78, 0.62, clamp(fraction, 0.2, 1)];
  const coords = steps.map((p, i) => ({
    x: 10 + i * 32,
    y: 8 + (1 - p) * 22,
  }));
  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      {[8, 16, 24, 32].map((y) => (
        <line key={y} x1="8" y1={y} x2="112" y2={y} stroke="#f0f0f0" strokeWidth="1" />
      ))}
      {coords.slice(0, -1).map((c, i) => {
        const next = coords[i + 1];
        return (
          <motion.line
            key={`step-${chartKey}-${i}`}
            x1={c.x}
            y1={c.y}
            x2={next.x}
            y2={next.y}
            stroke={`url(#${gradId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={
              reduceMotion
                ? { opacity: 1, x2: next.x, y2: next.y }
                : { opacity: 0, x2: c.x, y2: c.y }
            }
            animate={{ opacity: 1, x2: next.x, y2: next.y }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: EASE }}
          />
        );
      })}
      {coords.map((c, i) => (
        <motion.circle
          key={`step-dot-${chartKey}-${i}`}
          cx={c.x}
          cy={c.y}
          r={i === coords.length - 1 ? 3.2 : 2.4}
          fill={i === coords.length - 1 ? "#ff7a00" : `url(#${gradId})`}
          filter={i === coords.length - 1 ? `url(#${gradId}-glow)` : undefined}
          initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.2 + i * 0.1, type: "spring", stiffness: 280, damping: 18 }}
          style={{ transformOrigin: `${c.x}px ${c.y}px` }}
        />
      ))}
    </svg>
  );
}

const CHART_FAMILIES = [GaugeChart, ColumnChart, SegmentMeter, SparkArea];

type ChartComponent = (props: {
  fraction: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) => JSX.Element;

/** Pick a distinct chart per metric within each domain tab. */
function resolveMetricChart(tabKey: number, metricIndex: number): ChartComponent {
  const byTab: ChartComponent[][] = [
    [GaugeChart, DonutRingChart, CountVolumeChart],
    [SegmentMeter, CountVolumeChart, SparkArea],
    [GaugeChart, DurationStepsChart],
    [SegmentMeter, DonutRingChart],
  ];

  const list = byTab[tabKey];
  if (list?.[metricIndex]) return list[metricIndex];
  return CHART_FAMILIES[(tabKey + metricIndex) % CHART_FAMILIES.length];
}

function MetricChart({
  value,
  tabKey,
  metricIndex,
  reduceMotion,
}: {
  value: string;
  tabKey: number;
  metricIndex: number;
  reduceMotion: boolean;
}) {
  const fraction = metricFraction(value);
  const chartKey = `${tabKey}-${metricIndex}-${value}`;
  const gradId = `domain-metric-grad-${tabKey}-${metricIndex}`;
  const Family = resolveMetricChart(tabKey, metricIndex);

  return (
    <motion.div
      className="domain-metric-chart"
      key={chartKey}
      initial={reduceMotion ? false : { opacity: 0, y: 6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: metricIndex * 0.1, ease: EASE }}
    >
      <Family fraction={fraction} chartKey={chartKey} gradId={gradId} reduceMotion={reduceMotion} />
    </motion.div>
  );
}

export function DomainMetricCard({
  value,
  label,
  tabKey,
  metricIndex,
}: {
  value: string;
  label: string;
  tabKey: number;
  metricIndex: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="domain-outcomes-content-metric"
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: metricIndex * 0.08, ease: EASE }}
    >
      <MetricChart
        value={value}
        tabKey={tabKey}
        metricIndex={metricIndex}
        reduceMotion={!!reduceMotion}
      />
      <DomainAnimatedMetric value={value} tabKey={tabKey} />
      <p className="domain-outcomes-content-metric-lbl">{label}</p>
    </motion.div>
  );
}
