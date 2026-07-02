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

const TRACK = { x: 8, y: 20, w: 104, h: 10, r: 5 };
const TRACK_BG = "#d9d9d9";
const TRACK_BORDER = "#bdbdbd";

function MetricProgressTrack({
  fillW,
  chartKey,
  gradId,
  reduceMotion,
  track = TRACK,
}: {
  fillW: number;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
  track?: typeof TRACK;
}) {
  const clampedFill = Math.max(track.h, Math.min(track.w, fillW));
  const capR = track.h / 2;
  const cy = track.y + capR;
  const isFull = clampedFill >= track.w - 0.5;
  const bodyW = isFull ? clampedFill : Math.max(track.h, clampedFill - capR);

  return (
    <>
      <rect
        x={track.x}
        y={track.y}
        width={track.w}
        height={track.h}
        rx={track.r}
        fill={TRACK_BG}
        stroke={TRACK_BORDER}
        strokeWidth="1"
      />
      <motion.rect
        key={`fill-${chartKey}`}
        x={track.x}
        y={track.y}
        height={track.h}
        rx={track.r}
        fill={`url(#${gradId})`}
        initial={reduceMotion ? { width: bodyW, opacity: 1 } : { width: track.h, opacity: 0.85 }}
        animate={{ width: bodyW, opacity: 1 }}
        transition={{ duration: 1, delay: 0.12, ease: EASE }}
      />
      {!isFull && (
        <motion.circle
          key={`cap-${chartKey}`}
          cy={cy}
          r={capR}
          fill="#ff7a00"
          stroke="#ffffff"
          strokeWidth="1.25"
          initial={reduceMotion ? { cx: track.x + clampedFill, opacity: 1 } : { cx: track.x + capR, opacity: 0 }}
          animate={{ cx: track.x + clampedFill, opacity: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: EASE }}
        />
      )}
    </>
  );
}

/** Percent metrics — horizontal progress bar aligned to the exact value. */
function PercentProgressChart({
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
  const fillW = Math.max(TRACK.h, fraction * TRACK.w);

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      <MetricProgressTrack fillW={fillW} chartKey={chartKey} gradId={gradId} reduceMotion={reduceMotion} />
      {[0.25, 0.5, 0.75].map((tick) => (
        <line
          key={tick}
          x1={TRACK.x + TRACK.w * tick}
          y1={TRACK.y - 1}
          x2={TRACK.x + TRACK.w * tick}
          y2={TRACK.y + TRACK.h + 1}
          stroke="#c8c8c8"
          strokeWidth="0.75"
          opacity="0.9"
        />
      ))}
    </svg>
  );
}

/** Count metrics — rising volume bars showing scale toward capacity. */
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
  const bars = 6;
  const barW = 10;
  const gap = 5;
  const startX = (120 - (bars * barW + (bars - 1) * gap)) / 2;

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} vertical />
      <line x1="8" y1="30" x2="112" y2="30" stroke="#ececec" strokeWidth="1" />
      {Array.from({ length: bars }, (_, i) => {
        const t = (i + 1) / bars;
        const h = Math.max(6, t * fraction * 22);
        const x = startX + i * (barW + gap);
        const isPeak = i === bars - 1;
        return (
          <motion.rect
            key={`vol-${chartKey}-${i}`}
            x={x}
            y={30 - h}
            width={barW}
            height={h}
            rx="2.5"
            fill={`url(#${gradId})`}
            filter={isPeak ? `url(#${gradId}-glow)` : undefined}
            initial={reduceMotion ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: isPeak ? 1 : 0.45 + t * 0.4 }}
            transition={{
              scaleY: { type: "spring", stiffness: 320, damping: 20, delay: 0.1 + i * 0.07 },
              opacity: { duration: 0.35, delay: 0.15 + i * 0.06 },
            }}
            style={{ transformOrigin: `${x + barW / 2}px 30px` }}
          />
        );
      })}
      <motion.line
        key={`cap-${chartKey}`}
        x1="8"
        x2="112"
        y1="10"
        y2="10"
        stroke="#ff7a00"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.45"
        initial={reduceMotion ? { opacity: 0.45 } : { opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 0.4, delay: 0.55 }}
      />
    </svg>
  );
}

/** Multiplier metrics — single track at 1/value fill (3× faster = ⅓ the time). */
function MultiplierCompareChart({
  chartKey,
  gradId,
  reduceMotion,
  value,
}: {
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
  value: number;
}) {
  const fillW = Math.max(TRACK.h, TRACK.w / value);

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      <MetricProgressTrack fillW={fillW} chartKey={chartKey} gradId={gradId} reduceMotion={reduceMotion} />
      <line
        x1={TRACK.x + TRACK.w}
        y1={TRACK.y - 2}
        x2={TRACK.x + TRACK.w}
        y2={TRACK.y + TRACK.h + 2}
        stroke="#ff7a00"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/** Duration metrics — single track at agent/manual ratio (shorter = faster). */
function SpeedCompareChart({
  chartKey,
  gradId,
  reduceMotion,
  minutes,
}: {
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
  minutes: number;
}) {
  const manualMinutes = Math.max(minutes * 4.5, 18);
  const fillW = Math.max(TRACK.h, TRACK.w * (minutes / manualMinutes));

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      <MetricProgressTrack fillW={fillW} chartKey={chartKey} gradId={gradId} reduceMotion={reduceMotion} />
      <line
        x1={TRACK.x + TRACK.w}
        y1={TRACK.y - 2}
        x2={TRACK.x + TRACK.w}
        y2={TRACK.y + TRACK.h + 2}
        stroke="#ff7a00"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/** Range metrics — highlighted band on a 0–100% scale. */
function RangeBandChart({
  visual,
  chartKey,
  gradId,
  reduceMotion,
}: {
  visual: Extract<MetricVisual, { type: "range" }>;
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const startX = TRACK.x + (visual.start / 100) * TRACK.w;
  const bandW = ((visual.end - visual.start) / 100) * TRACK.w;

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      <rect x={TRACK.x} y={TRACK.y} width={TRACK.w} height={TRACK.h} rx={TRACK.r} fill={TRACK_BG} stroke={TRACK_BORDER} strokeWidth="1" />
      <motion.rect
        key={`band-${chartKey}`}
        y={TRACK.y}
        height={TRACK.h}
        rx={TRACK.r}
        fill={`url(#${gradId})`}
        initial={reduceMotion ? { x: startX, width: bandW, opacity: 1 } : { x: startX, width: 0, opacity: 0.6 }}
        animate={{ x: startX, width: bandW, opacity: 1 }}
        transition={{ duration: 0.95, delay: 0.15, ease: EASE }}
      />
      <motion.circle
        key={`band-cap-${chartKey}`}
        cy={TRACK.y + TRACK.h / 2}
        r={TRACK.h / 2}
        fill="#ff7a00"
        stroke="#ffffff"
        strokeWidth="1.25"
        initial={reduceMotion ? { cx: startX + bandW, opacity: 1 } : { cx: startX, opacity: 0 }}
        animate={{ cx: startX + bandW, opacity: 1 }}
        transition={{ duration: 0.95, delay: 0.15, ease: EASE }}
      />
      <line x1={startX} y1={TRACK.y - 3} x2={startX} y2={TRACK.y + TRACK.h + 3} stroke="#ff7a00" strokeWidth="1.2" opacity="0.55" />
      <line
        x1={startX + bandW}
        y1={TRACK.y - 3}
        x2={startX + bandW}
        y2={TRACK.y + TRACK.h + 3}
        stroke="#ff7a00"
        strokeWidth="1.2"
        opacity="0.55"
      />
    </svg>
  );
}

/** Consolidation metrics — many segments merge into one (no labels; card text explains). */
function ConsolidationChart({
  chartKey,
  gradId,
  reduceMotion,
}: {
  chartKey: string;
  gradId: string;
  reduceMotion: boolean;
}) {
  const segCount = 7;
  const segW = 5;
  const gap = 2;
  const clusterW = segCount * segW + (segCount - 1) * gap;
  const clusterX = 8;
  const arrowX = clusterX + clusterW + 6;
  const caseX = arrowX + 10;
  const caseW = 112 - caseX;

  return (
    <svg viewBox="0 0 120 36" className="domain-metric-chart-svg" aria-hidden>
      <ChartDefs gradId={gradId} />
      {Array.from({ length: segCount }, (_, i) => (
        <motion.rect
          key={`seg-${chartKey}-${i}`}
          x={clusterX + i * (segW + gap)}
          y={TRACK.y + 1}
          width={segW}
          height={TRACK.h - 2}
          rx="2"
          fill="#c8c8c8"
          stroke="#bdbdbd"
          strokeWidth="0.5"
          initial={reduceMotion ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0.4 }}
          animate={{ opacity: 0.55 + (i / segCount) * 0.35, scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.05 + i * 0.04, ease: EASE }}
          style={{ transformOrigin: `${clusterX + i * (segW + gap) + segW / 2}px ${TRACK.y + TRACK.h / 2}px` }}
        />
      ))}
      <motion.path
        key={`arrow-${chartKey}`}
        d={`M${arrowX} ${TRACK.y + TRACK.h / 2} H${arrowX + 8} M${arrowX + 5} ${TRACK.y + TRACK.h / 2 - 3} L${arrowX + 8} ${TRACK.y + TRACK.h / 2} L${arrowX + 5} ${TRACK.y + TRACK.h / 2 + 3}`}
        fill="none"
        stroke="#ff7a00"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.55, delay: 0.45, ease: EASE }}
      />
      <rect
        x={caseX}
        y={TRACK.y}
        width={caseW}
        height={TRACK.h}
        rx={TRACK.r}
        fill={TRACK_BG}
        stroke={TRACK_BORDER}
        strokeWidth="1"
      />
      <motion.rect
        key={`case-fill-${chartKey}`}
        x={caseX}
        y={TRACK.y}
        width={caseW}
        height={TRACK.h}
        rx={TRACK.r}
        fill={`url(#${gradId})`}
        initial={reduceMotion ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
        style={{ transformOrigin: `${caseX + caseW / 2}px ${TRACK.y + TRACK.h / 2}px` }}
      />
      <motion.circle
        key={`case-dot-${chartKey}`}
        cx={caseX + caseW / 2}
        cy={TRACK.y + TRACK.h / 2}
        r="3"
        fill="#ffffff"
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.9, type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformOrigin: `${caseX + caseW / 2}px ${TRACK.y + TRACK.h / 2}px` }}
      />
    </svg>
  );
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
  const visual = parseMetricVisual(value);
  const fraction = metricFraction(value);
  const chartKey = `${tabKey}-${metricIndex}-${value}`;
  const gradId = `domain-metric-grad-${tabKey}-${metricIndex}`;

  let chart: JSX.Element;
  switch (visual.type) {
    case "percent":
      chart = (
        <PercentProgressChart
          fraction={fraction}
          chartKey={chartKey}
          gradId={gradId}
          reduceMotion={reduceMotion}
        />
      );
      break;
    case "range":
      chart = (
        <RangeBandChart visual={visual} chartKey={chartKey} gradId={gradId} reduceMotion={reduceMotion} />
      );
      break;
    case "multiplier":
      chart = (
        <MultiplierCompareChart
          chartKey={chartKey}
          gradId={gradId}
          reduceMotion={reduceMotion}
          value={visual.value}
        />
      );
      break;
    case "duration":
      chart = (
        <SpeedCompareChart
          chartKey={chartKey}
          gradId={gradId}
          reduceMotion={reduceMotion}
          minutes={visual.value}
        />
      );
      break;
    case "count":
      chart =
        visual.value >= 40 && !value.includes("+") ? (
          <CountVolumeChart fraction={fraction} chartKey={chartKey} gradId={gradId} reduceMotion={reduceMotion} />
        ) : (
          <ConsolidationChart
            chartKey={chartKey}
            gradId={gradId}
            reduceMotion={reduceMotion}
          />
        );
      break;
  }

  return (
    <motion.div
      className="domain-metric-chart"
      key={chartKey}
      initial={reduceMotion ? false : { opacity: 0, y: 6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: metricIndex * 0.1, ease: EASE }}
    >
      {chart}
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
