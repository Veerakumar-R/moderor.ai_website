"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pilotSteps } from "@/content/site";
import Waves from "./Waves";
import { PilotHeaderDeco } from "./PilotHeaderDeco";
import { PilotStoryVisual } from "./PilotStoryVisual";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";
import "./pilot.css";

const PILOT_WAVES_PROPS = {
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

function PilotStoryCard({
  step,
  index,
  reduceMotion,
}: {
  step: (typeof pilotSteps)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const theme = CARD_THEME;
  const weekLabel = step.week.split(" — ")[0] ?? step.week;
  const tagline = step.description.split(".")[0] + ".";

  return (
    <motion.article
      className={`pilot-story-card pilot-story-card--${theme.variant}`}
      style={
        {
          "--pilot-card-bg": theme.gradient,
          "--pilot-card-accent": theme.accent,
        } as React.CSSProperties
      }
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      {!reduceMotion && (
        <div className="pilot-story-card-waves" aria-hidden>
          <Waves {...PILOT_WAVES_PROPS} />
        </div>
      )}

      <div className="pilot-story-card-inner">
        <div className="pilot-story-copy">
          <span className="pilot-story-week">{weekLabel}</span>
          <h3 className="pilot-story-title">{step.title}</h3>
          <p className="pilot-story-tagline">{tagline}</p>
        </div>

        <div className="pilot-story-scene-wrap">
          <div className="pilot-story-scene-content">
            <PilotStoryVisual index={index} reduceMotion={reduceMotion} />
          </div>
        </div>

        <p className="pilot-story-desc">{step.description}</p>
      </div>
    </motion.article>
  );
}

export function PilotSection() {
  const reduceMotion = useReducedMotion();
  const rm = !!reduceMotion;

  return (
    <section className="pilot-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
      <div className="pilot-mesh" aria-hidden />
      <div className="pilot-grid-bg" aria-hidden />

      <div className="relative z-[1] mx-auto w-full max-w-[1400px]">
        <ScrollReveal duration={0.85}>
          <div className="pilot-header-wrap">
            <PilotHeaderDeco />
            <header className="pilot-head-center">
              <SectionLabel className="pilot-section-label">4-Week Pilot Program</SectionLabel>
              <h2 className="pilot-headline">
                Live in Weeks. <span className="pilot-headline-accent">Not Quarters.</span>
              </h2>
              <p className="pilot-desc">
                Start with one workflow on your own infrastructure. Real data, real outcomes, full audit
                trail — most customers are in production within 60–90 days.
              </p>
            </header>
          </div>
        </ScrollReveal>

        <div className="pilot-story-grid">
          {pilotSteps.map((step, i) => (
            <PilotStoryCard key={step.week} step={step} index={i} reduceMotion={rm} />
          ))}
        </div>
      </div>
    </section>
  );
}
