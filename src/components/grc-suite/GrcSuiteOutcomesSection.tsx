"use client";

import { useReducedMotion } from "framer-motion";
import {
  ClipboardCheck,
  Eye,
  Fingerprint,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { grcSuitePage } from "@/content/site";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./grc-suite.css";

const { outcomes } = grcSuitePage;

const OUTCOME_ICONS: LucideIcon[] = [
  ShieldCheck,
  ClipboardCheck,
  Scale,
  Eye,
  Sparkles,
  TrendingUp,
  Target,
  Rocket,
];

function buildSpiralPath(
  cx: number,
  cy: number,
  a: number,
  b: number,
  maxTheta: number,
  step = 0.14,
  startTheta = 0,
) {
  let path = "";

  for (let theta = startTheta; theta <= maxTheta + startTheta; theta += step) {
    const radius = a + b * (theta - startTheta);
    const x = cx + radius * Math.cos(theta);
    const y = cy + radius * Math.sin(theta);
    path += `${theta === startTheta ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }

  return path;
}

const HUB_SPIRAL_PRIMARY = buildSpiralPath(40, 40, 2.5, 2.15, Math.PI * 4.2);
const HUB_SPIRAL_SECONDARY = buildSpiralPath(40, 40, 2.5, 2.15, Math.PI * 4.2, 0.14, Math.PI);

function OutcomesHubSpiral({ reduceMotion }: { reduceMotion: boolean | null }) {
  if (reduceMotion) {
    return (
      <>
        <span className="grc-outcomes-panel-hub-ring grc-outcomes-panel-hub-ring--outer" />
        <span className="grc-outcomes-panel-hub-ring grc-outcomes-panel-hub-ring--inner" />
      </>
    );
  }

  return (
    <>
      <svg className="grc-outcomes-hub-spiral" viewBox="0 0 80 80" aria-hidden>
        <defs>
          <linearGradient id="grc-outcomes-spiral-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#ff7a00" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffd080" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <g className="grc-outcomes-hub-spiral-rotate grc-outcomes-hub-spiral-rotate--primary">
          <path className="grc-outcomes-hub-spiral-path" d={HUB_SPIRAL_PRIMARY} />
        </g>
        <g className="grc-outcomes-hub-spiral-rotate grc-outcomes-hub-spiral-rotate--secondary">
          <path
            className="grc-outcomes-hub-spiral-path grc-outcomes-hub-spiral-path--secondary"
            d={HUB_SPIRAL_SECONDARY}
          />
        </g>
      </svg>
      <span className="grc-outcomes-hub-spiral-ring grc-outcomes-hub-spiral-ring--1" />
      <span className="grc-outcomes-hub-spiral-ring grc-outcomes-hub-spiral-ring--2" />
      <span className="grc-outcomes-hub-spiral-ring grc-outcomes-hub-spiral-ring--3" />
    </>
  );
}

function OutcomeQuadrant({
  label,
  icon: Icon,
  accent,
}: {
  label: string;
  icon: LucideIcon;
  accent?: boolean;
}) {
  return (
    <article className={`grc-outcomes-quadrant${accent ? " grc-outcomes-quadrant--accent" : ""}`}>
      <div className="grc-outcomes-quadrant-icon" aria-hidden>
        <Icon size={20} strokeWidth={1.65} />
      </div>
      <h3 className="grc-outcomes-quadrant-title">{label}</h3>
    </article>
  );
}

export function GrcSuiteOutcomesSection() {
  const reduceMotion = useReducedMotion();
  const allItems = outcomes.rows.flatMap((row) => [row.left, row.right]);

  return (
    <section
      id="grc-outcomes"
      className="grc-outcomes-section relative border-b border-border px-5 sm:px-[50px]"
    >
      <div className="grc-section-inner">
        <div className="grc-outcomes-card relative w-full rounded-[28px] lg:rounded-[36px]">
          <div
            className="grc-outcomes-card-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="hero-grain-fine" />
            <div className="grc-outcomes-vignette" />
            {!reduceMotion && (
              <div className="grc-outcomes-dots">
                <DotGrid
                  dotSize={4}
                  gap={16}
                  baseColor="#3a2c20"
                  activeColor="#ff7a00"
                  proximity={110}
                  shockRadius={220}
                  shockStrength={4}
                  resistance={750}
                  returnDuration={1.4}
                />
              </div>
            )}
          </div>

          <div className="grc-outcomes-card-content relative z-[1]">
            <ScrollReveal duration={0.85}>
              <div className="grc-outcomes-header">
                <div className="grc-outcomes-eyebrow">
                  <span className="grc-outcomes-eyebrow-dot" />
                  {outcomes.label}
                </div>
                <h2 className="grc-outcomes-title">
                  {outcomes.title}{" "}
                  <span className="grc-outcomes-title-accent">{outcomes.titleHighlight}</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal duration={0.9} delay={0.35}>
              <div className="grc-outcomes-panel">
                <div className="grc-outcomes-panel-lines" aria-hidden>
                  <span className="grc-outcomes-panel-line grc-outcomes-panel-line--v" />
                  <span className="grc-outcomes-panel-line grc-outcomes-panel-line--h" />
                </div>

                <div className="grc-outcomes-panel-hub" aria-hidden>
                  <span className="grc-outcomes-panel-hub-glow" />
                  <OutcomesHubSpiral reduceMotion={reduceMotion} />
                  <Fingerprint size={30} strokeWidth={1.5} className="grc-outcomes-panel-hub-icon" />
                </div>

                <div className="grc-outcomes-panel-grid">
                  {allItems.map((label, index) => {
                    const Icon = OUTCOME_ICONS[index] ?? ShieldCheck;
                    const accent = index % 4 === 0 || index % 4 === 3;

                    return (
                      <OutcomeQuadrant key={label} label={label} icon={Icon} accent={accent} />
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
