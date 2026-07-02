"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Eye,
  FileCheck,
  ScrollText,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { platformPage } from "@/content/site";
import Waves from "@/components/Waves";
import { PilotHeaderDeco } from "@/components/PilotHeaderDeco";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "@/components/pilot.css";
import "@/components/grc-suite/grc-suite.css";

const { whyChoose } = platformPage;

const WHY_CHOOSE_WAVES_PROPS = {
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

const WHY_CHOOSE_ICONS: LucideIcon[] = [ShieldCheck, FileCheck, UserCheck, ScrollText, Eye];

const EASE = [0.22, 1, 0.36, 1] as const;

function WhyChooseCard({
  item,
  index,
  reduceMotion,
}: {
  item: (typeof whyChoose.items)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const theme = CARD_THEME;
  const Icon = WHY_CHOOSE_ICONS[index] ?? ShieldCheck;

  return (
    <motion.article
      className={`pilot-story-card pilot-story-card--${theme.variant} grc-why-choose-card`}
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
          <Waves {...WHY_CHOOSE_WAVES_PROPS} />
        </div>
      )}

      <div className="grc-why-choose-card-inner">
        <div className="grc-why-choose-card-head">
          <div className="grc-why-choose-icon-panel" aria-hidden>
            <span className="grc-why-choose-icon-glow" />
            <Icon className="grc-why-choose-icon" strokeWidth={1.5} />
          </div>
        </div>

        <h3 className="grc-why-choose-title">{item.name}</h3>
        <p className="grc-why-choose-desc">{item.description}</p>
      </div>
    </motion.article>
  );
}

export function PlatformWhyChooseSection() {
  const reduceMotion = useReducedMotion();
  const rm = !!reduceMotion;

  return (
    <section
      id="governed-by-design"
      className="pilot-section grc-why-choose-section relative border-b border-border px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
    >
      <div className="pilot-mesh" aria-hidden />
      <div className="pilot-grid-bg" aria-hidden />

      <div className="grc-section-inner relative z-[1]">
        <ScrollReveal duration={0.85}>
          <div className="pilot-header-wrap">
            <PilotHeaderDeco />
            <header className="pilot-head-center">
              <SectionLabel className="pilot-section-label">{whyChoose.label}</SectionLabel>
              <h2 className="pilot-headline">
                {whyChoose.title}{" "}
                <span className="pilot-headline-accent">{whyChoose.titleHighlight}</span>
              </h2>
              <p className="pilot-desc">{whyChoose.description}</p>
            </header>
          </div>
        </ScrollReveal>

        <div className="grc-why-choose-grid">
          {whyChoose.items.map((item, index) => (
            <WhyChooseCard key={item.name} item={item} index={index} reduceMotion={rm} />
          ))}
        </div>
      </div>
    </section>
  );
}
