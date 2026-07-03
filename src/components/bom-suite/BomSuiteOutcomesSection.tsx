"use client";

import { useReducedMotion } from "framer-motion";
import { Activity, Bot, Clock, TrendingUp, type LucideIcon } from "lucide-react";
import { bomSuitePage } from "@/content/bomSuite";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./bom-suite.css";

const { outcomes } = bomSuitePage;

const METRIC_ICONS: LucideIcon[] = [TrendingUp, Bot, Activity, Clock];

function MetricQuadrant({
  value,
  label,
  icon: Icon,
  accent,
}: {
  value: string;
  label: string;
  icon: LucideIcon;
  accent?: boolean;
}) {
  return (
    <article className={`bom-outcomes-quadrant${accent ? " bom-outcomes-quadrant--accent" : ""}`}>
      <div className="bom-outcomes-quadrant-icon" aria-hidden>
        <Icon size={20} strokeWidth={1.65} />
      </div>
      <p className="bom-outcomes-metric-value">{value}</p>
      <h3 className="bom-outcomes-quadrant-title">{label}</h3>
    </article>
  );
}

export function BomSuiteOutcomesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="bom-outcomes"
      className="bom-outcomes-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
    >
      <div className="bom-section-inner">
        <div className="bom-outcomes-card relative w-full rounded-[28px] lg:rounded-[36px]">
          <div
            className="bom-outcomes-card-bg pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-warm-base" />
            <div className="hero-orange-noise" />
            <div className="hero-grain" />
            <div className="hero-grain-fine" />
            <div className="bom-outcomes-vignette" />
            {!reduceMotion && (
              <div className="bom-outcomes-dots">
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

          <div className="bom-outcomes-card-content relative z-[1]">
            <ScrollReveal duration={0.85}>
              <div className="bom-outcomes-header">
                <div className="bom-outcomes-eyebrow">
                  <span className="bom-outcomes-eyebrow-dot" />
                  {outcomes.label}
                </div>
                <h2 className="bom-outcomes-title">
                  {outcomes.title}{" "}
                  <span className="bom-outcomes-title-accent">{outcomes.titleHighlight}</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal duration={0.9} delay={0.35}>
              <div className="bom-outcomes-panel">
                <div className="bom-outcomes-panel-grid bom-outcomes-panel-grid--metrics">
                  {outcomes.metrics.map((metric, index) => {
                    const Icon = METRIC_ICONS[index] ?? TrendingUp;
                    const accent = index % 2 === 0;

                    return (
                      <MetricQuadrant
                        key={metric.label}
                        value={metric.value}
                        label={metric.label}
                        icon={Icon}
                        accent={accent}
                      />
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
