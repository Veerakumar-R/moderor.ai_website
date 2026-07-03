"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { bomSuitePage } from "@/content/bomSuite";
import Waves from "@/components/Waves";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "@/components/governed.css";
import "./bom-suite.css";

const content = bomSuitePage;

const BOM_WHY_WAVES_PROPS = {
  lineColor: "rgba(255, 160, 90, 0.17)",
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

export function BomSuiteBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="bom-breadcrumb px-5 sm:px-[50px]">
      <div className="bom-section-inner">
        <ol className="bom-breadcrumb-inner">
          {content.breadcrumb.map((item, index) => {
            const isCurrent = "current" in item;

            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 && <span aria-hidden>/</span>}
                {isCurrent ? (
                  <span className="bom-breadcrumb-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="bom-breadcrumb-link">
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

export function BomSuiteWhySection() {
  const { why } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section className="bom-why-section px-5 sm:px-[50px]" aria-labelledby="bom-why-heading">
      <div className="governed-bg" aria-hidden>
        <span className="governed-blob governed-blob--1" />
        <span className="governed-blob governed-blob--2" />
      </div>

      {!reduceMotion && (
        <div className="bom-why-waves" aria-hidden>
          <Waves {...BOM_WHY_WAVES_PROPS} />
        </div>
      )}

      <div className="bom-section-inner bom-why-content">
        <ScrollReveal duration={0.85}>
          <div className="bom-why-grid">
            <div className="bom-why-copy-col">
              {why.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="bom-why-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bom-why-head-col">
              <p className="bom-suite-tag bom-why-tag">
                <span className="bom-suite-tag-dot" aria-hidden />
                {why.tag}
              </p>

              <h2 className="bom-suite-headline bom-why-headline" id="bom-why-heading">
                <span className="bom-suite-headline-lead">{why.title}</span>
                <span className="bom-suite-headline-accent">{why.titleHighlight}</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function BomSuiteIntroSection() {
  const { intro } = content;

  return (
    <section className="bom-intro-section px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28">
      <div className="bom-section-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{intro.tag}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.08}>
          <h2 className="bom-suite-headline bom-intro-headline">
            <span className="bom-suite-headline-lead">{intro.title}</span>
            <span className="bom-suite-headline-accent">{intro.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.16}>
          <div className="bom-intro-cards">
              {intro.cards.map((card) =>
                card.variant === "split" ? (
                  <article
                    key={card.title}
                    className="bom-intro-card bom-intro-card--split"
                  >
                    <div className="bom-intro-card-panel">
                      <div className="bom-intro-card-panel-bg" aria-hidden>
                        <div className="hero-warm-base" />
                        <div className="hero-orange-noise" />
                        <div className="hero-grain" />
                        <div className="hero-grain-fine" />
                      </div>
                      <div className="bom-intro-card-panel-content">
                        <h3 className="bom-intro-card-title">{card.title}</h3>
                        <p className="bom-intro-card-body">{card.body}</p>
                      </div>
                    </div>
                    <div className="bom-intro-card-media">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        className="bom-intro-card-image"
                        sizes="(min-width: 1024px) 280px, 50vw"
                      />
                    </div>
                  </article>
                ) : (
                  <article
                    key={card.title}
                    className="bom-intro-card bom-intro-card--plain"
                  >
                    <h3 className="bom-intro-card-title">{card.title}</h3>
                    <p className="bom-intro-card-body">{card.body}</p>
                    {"closing" in card && card.closing ? (
                      <p className="bom-intro-card-closing">{card.closing}</p>
                    ) : null}
                  </article>
                ),
              )}
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export { BomSuiteProductsSection } from "./BomSuiteProductsSection";
export { BomSuiteOutcomesSection } from "./BomSuiteOutcomesSection";
export { BomSuiteCapabilitiesSection } from "./BomSuiteCapabilitiesSection";
export { BomSuitePersonasSection } from "./BomSuitePersonasSection";
export { BomSuiteIntegrationsSection } from "./BomSuiteIntegrationsSection";
export { BomSuiteAiSection } from "./BomSuiteAiSection";
