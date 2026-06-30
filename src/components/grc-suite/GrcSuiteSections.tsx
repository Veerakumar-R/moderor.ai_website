"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { grcSuitePage, siteConfig } from "@/content/site";
import { GovernedHeaderDeco } from "@/components/GovernedHeaderDeco";
import Waves from "@/components/Waves";
import { PillButton } from "@/components/ui/PillButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GrcWhyScrollText } from "./GrcWhyScrollText";
import { GrcSuiteProductsSection } from "./GrcSuiteProductsSection";
import { GrcSuiteOutcomesSection } from "./GrcSuiteOutcomesSection";
import "@/components/governed.css";
import "./grc-suite.css";

const content = grcSuitePage;

const GRC_WHY_WAVES_PROPS = {
  lineColor: "rgba(255, 160, 90, 0.18)",
  backgroundColor: "transparent",
  waveSpeedX: 0.0125,
  waveSpeedY: 0.01,
  waveAmpX: 40,
  waveAmpY: 20,
  friction: 0.9,
  tension: 0.01,
  maxCursorMove: 120,
  xGap: 12,
  yGap: 36,
} as const;

export function GrcSuiteBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="grc-breadcrumb px-5 sm:px-[50px]">
      <div className="grc-section-inner">
        <ol className="grc-breadcrumb-inner">
        {content.breadcrumb.map((item, index) => {
          const isCurrent = "current" in item;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden>/</span>}
              {isCurrent ? (
                <span className="grc-breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="grc-breadcrumb-link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
        </ol>
      </div>
    </nav>
  );
}

export function GrcSuiteWhySection() {
  const { why } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="grc-why-section px-5 sm:px-[50px]"
      aria-labelledby="grc-why-heading"
    >
      <div className="governed-bg" aria-hidden>
        <span className="governed-blob governed-blob--1" />
        <span className="governed-blob governed-blob--2" />
      </div>

      {!reduceMotion && (
        <div className="grc-why-waves" aria-hidden>
          <Waves {...GRC_WHY_WAVES_PROPS} />
        </div>
      )}

      <div className="grc-section-inner grc-why-content">
        <ScrollReveal duration={0.85}>
          <div className="governed-header-wrap grc-why-header-wrap">
            <GovernedHeaderDeco />
            <div className="grc-why-eyebrow">
              <span className="grc-why-eyebrow-dot" aria-hidden />
              <p id="grc-why-heading" className="grc-why-eyebrow-label">
                {why.label}
              </p>
              <span className="grc-why-eyebrow-dot" aria-hidden />
            </div>
          </div>
        </ScrollReveal>

        <GrcWhyScrollText text={why.text} />
      </div>
    </section>
  );
}

export { GrcSuiteProductsSection, GrcSuiteOutcomesSection };

export function GrcSuiteAiSection() {
  const { ai } = content;

  return (
    <section className="grc-section grc-section--alt px-5 sm:px-[50px]">
      <div className="grc-section-inner">
        <ScrollReveal duration={0.75}>
          <SectionLabel>{ai.label}</SectionLabel>
        </ScrollReveal>

        <div className="grc-ai-grid">
          {ai.columns.map((column, index) => (
            <ScrollReveal key={column.eyebrow} delay={0.1 + index * 0.08} duration={0.75}>
              <article className={`grc-ai-col ${column.muted ? "grc-ai-col--muted" : ""}`}>
                <p className="grc-ai-eyebrow">{column.eyebrow}</p>
                <h3 className="grc-ai-title">
                  {"titleHighlight" in column && column.titleHighlight ? (
                    <>
                      {column.title}{" "}
                      <span className="text-ember">{column.titleHighlight}</span>{" "}
                      {column.titleSuffix}
                    </>
                  ) : (
                    column.title
                  )}
                </h3>
                {column.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="grc-ai-paragraph">
                    {paragraph}
                  </p>
                ))}
                {"closing" in column && column.closing ? (
                  <p className="grc-ai-closing">{column.closing}</p>
                ) : null}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GrcSuiteWhyChooseSection() {
  const { whyChoose } = content;

  return (
    <section className="grc-section px-5 sm:px-[50px]">
      <div className="grc-section-inner">
        <ScrollReveal duration={0.75}>
          <SectionLabel>{whyChoose.label}</SectionLabel>
        </ScrollReveal>

        <div className="grc-choose-grid">
          {whyChoose.items.map((item, index) => (
            <ScrollReveal key={item.name} delay={0.06 + index * 0.05} duration={0.7}>
              <article className="grc-choose-card h-full">
                <h3 className="grc-choose-name">{item.name}</h3>
                <p className="grc-choose-desc">{item.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GrcSuiteFinalCta() {
  const { finalCta } = content;

  return (
    <section className="grc-section border-b-0 px-5 pb-24 sm:px-[50px] sm:pb-28">
      <div className="grc-section-inner">
        <ScrollReveal duration={0.8}>
          <div className="grc-final-panel">
            <div>
              <h2 className="grc-headline">
                {finalCta.title}{" "}
                <span className="text-ember">{finalCta.titleHighlight}</span>
              </h2>
              <p className="grc-final-desc">{finalCta.description}</p>
            </div>
            <PillButton href="#" variant="orange" showArrow className="shrink-0">
              {siteConfig.cta.primary}
            </PillButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
