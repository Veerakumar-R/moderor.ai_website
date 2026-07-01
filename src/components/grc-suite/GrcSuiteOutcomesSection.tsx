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

function OutcomesHubRings() {
  return (
    <>
      <span className="grc-outcomes-panel-hub-ring grc-outcomes-panel-hub-ring--outer" />
      <span className="grc-outcomes-panel-hub-ring grc-outcomes-panel-hub-ring--inner" />
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
      className="grc-outcomes-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
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
                  <OutcomesHubRings />
                  <Fingerprint size={40} strokeWidth={1.5} className="grc-outcomes-panel-hub-icon" />
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
