"use client";

import { motion, useReducedMotion } from "framer-motion";
import { raPrinciple } from "@/content/riskAssessment";
import Waves from "@/components/Waves";
import { PilotHeaderDeco } from "@/components/PilotHeaderDeco";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RaGovernanceVisual } from "./RaGovernanceVisual";
import "@/components/pilot.css";
import "./ra.css";

const GOVERNANCE_WAVES_PROPS = {
  lineColor: "rgba(255, 160, 90, 0.38)",
  backgroundColor: "transparent",
  waveSpeedX: 0.0125,
  waveSpeedY: 0.01,
  waveAmpX: 32,
  waveAmpY: 16,
  friction: 0.9,
  tension: 0.01,
  maxCursorMove: 90,
  xGap: 13,
  yGap: 38,
} as const;

const CARD_THEME = {
  gradient: "linear-gradient(165deg, #fff4ea 0%, #ffe8d4 48%, #ffd9bc 100%)",
  accent: "#ff7a00",
  variant: "orange",
} as const;

const EASE = [0.22, 1, 0.36, 1] as const;

function GovernanceCard({
  item,
  index,
  reduceMotion,
}: {
  item: (typeof raPrinciple.items)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const theme = CARD_THEME;

  return (
    <motion.article
      className={`pilot-story-card pilot-story-card--${theme.variant} ra-governance-card`}
      style={
        {
          "--pilot-card-bg": theme.gradient,
          "--pilot-card-accent": theme.accent,
        } as React.CSSProperties
      }
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      {!reduceMotion && (
        <div className="pilot-story-card-waves" aria-hidden>
          <Waves {...GOVERNANCE_WAVES_PROPS} />
        </div>
      )}

      <div className="pilot-story-card-inner">
        <div className="pilot-story-copy">
          <span className="pilot-story-week">{item.badge}</span>
          <h3 className="pilot-story-title">{item.title}</h3>
        </div>

        <div className="pilot-story-scene-wrap">
          <div className="pilot-story-scene-content">
            <RaGovernanceVisual index={index} reduceMotion={reduceMotion} />
          </div>
        </div>

        <p className="pilot-story-desc">{item.description}</p>
      </div>
    </motion.article>
  );
}

export function RaPrinciple() {
  const reduceMotion = useReducedMotion();
  const rm = !!reduceMotion;
  const { label, title, description, items } = raPrinciple;

  return (
    <section
      id="ra-governance"
      className="pilot-section ra-governance-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="ra-governance-heading"
    >
      <div className="pilot-mesh" aria-hidden />
      <div className="pilot-grid-bg" aria-hidden />

      <div className="relative z-[1] mx-auto w-full max-w-[1400px]">
        <ScrollReveal duration={0.85}>
          <div className="pilot-header-wrap">
            <PilotHeaderDeco />
            <header className="pilot-head-center">
              <h2 id="ra-governance-heading" className="sr-only">
                {title}
              </h2>
              <SectionLabel className="pilot-section-label">{label}</SectionLabel>
              <p className="pilot-headline ra-governance-title">{title}</p>
              <p className="pilot-desc ra-governance-desc">{description}</p>
            </header>
          </div>
        </ScrollReveal>

        <div className="ra-governance-grid">
          {items.map((item, index) => (
            <GovernanceCard key={item.title} item={item} index={index} reduceMotion={rm} />
          ))}
        </div>
      </div>
    </section>
  );
}
