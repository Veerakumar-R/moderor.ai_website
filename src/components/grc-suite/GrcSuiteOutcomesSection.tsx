"use client";

import { useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { grcSuitePage } from "@/content/site";
import DotGrid from "@/components/DotGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./grc-suite.css";

const { outcomes } = grcSuitePage;

function OutcomeCell({ label }: { label: string }) {
  return (
    <>
      <span className="grc-outcomes-check" aria-hidden>
        <Check size={15} strokeWidth={2.25} />
      </span>
      <span className="grc-outcomes-item-text">{label}</span>
    </>
  );
}

function OutcomeRow({
  left,
  right,
  index,
}: {
  left: string;
  right: string;
  index: number;
}) {
  return (
    <ScrollReveal duration={0.65} delay={0.06 + index * 0.06} className="grc-outcomes-grid-row">
      <div className="grc-outcomes-grid-item" role="listitem">
        <OutcomeCell label={left} />
      </div>
      <div className="grc-outcomes-grid-item" role="listitem">
        <OutcomeCell label={right} />
      </div>
    </ScrollReveal>
  );
}

export function GrcSuiteOutcomesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="grc-outcomes"
      className="grc-outcomes-section relative border-b border-border px-5 pt-8 pb-20 sm:px-[50px] sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28"
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
              <div className="grc-outcomes-eyebrow">
                <span className="grc-outcomes-eyebrow-dot" />
                {outcomes.label}
              </div>
              <h2 className="grc-outcomes-title">
                {outcomes.title}{" "}
                <span className="text-accent-gradient">{outcomes.titleHighlight}</span>
              </h2>
            </ScrollReveal>

            <div className="grc-outcomes-grid" role="list">
              {outcomes.rows.map((row, index) => (
                <OutcomeRow key={row.left} left={row.left} right={row.right} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
