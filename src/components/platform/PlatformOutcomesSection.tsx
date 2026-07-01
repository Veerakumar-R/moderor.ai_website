"use client";

import { useReducedMotion } from "framer-motion";
import {
  Gauge,
  Layers,
  Recycle,
  Rocket,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { platformPage } from "@/content/site";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "@/components/grc-suite/grc-suite.css";
import "./platform.css";

const { outcomes } = platformPage;

const OUTCOME_ICONS: LucideIcon[] = [
  Rocket, // Accelerate adoption
  ShieldCheck, // Govern with security & compliance
  Gauge, // Reduce operational complexity
  Layers, // Increase transparency / observability
  Recycle, // Reuse agents across departments
  TrendingUp, // Scale confidently
];

function ImpactRow({
  label,
  icon: Icon,
  index,
}: {
  label: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <article className="platform-impact-row">
      <span className="platform-impact-icon" aria-hidden>
        <Icon size={20} strokeWidth={1.7} />
      </span>
      <div className="platform-impact-body">
        <h3 className="platform-impact-label">{label}</h3>
        <span className="platform-impact-bar" aria-hidden>
          <span
            className="platform-impact-bar-fill"
            style={{ "--bar-delay": `${0.15 + index * 0.09}s` } as React.CSSProperties}
          />
        </span>
      </div>
    </article>
  );
}

export function PlatformOutcomesSection() {
  const reduceMotion = useReducedMotion();
  const allItems = outcomes.rows.flatMap((row) => [row.left, row.right]);

  return (
    <section
      id="impact"
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
              <div className="platform-impact-grid">
                {allItems.map((label, index) => {
                  const Icon = OUTCOME_ICONS[index] ?? ShieldCheck;

                  return (
                    <ImpactRow key={label} label={label} icon={Icon} index={index} />
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
