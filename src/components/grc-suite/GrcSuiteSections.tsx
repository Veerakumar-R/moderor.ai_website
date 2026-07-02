"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { grcSuitePage } from "@/content/site";
import Waves from "@/components/Waves";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GrcSuiteProductsSection } from "./GrcSuiteProductsSection";
import { GrcSuiteOutcomesSection } from "./GrcSuiteOutcomesSection";
import { GrcSuiteHowItWorksSection } from "./GrcSuiteHowItWorksSection";
import { GrcSuiteAiSection } from "./GrcSuiteAiSection";
import "@/components/governed.css";
import "./grc-suite.css";

const content = grcSuitePage;

const GRC_WHY_WAVES_PROPS = {
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
          <div className="grc-why-grid">
            <div className="grc-why-copy-col">
              {why.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="grc-why-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grc-why-head-col">
              <p className="grc-suite-tag grc-why-tag">
                <span className="grc-suite-tag-dot" aria-hidden />
                {why.tag}
              </p>

              <h2 className="grc-suite-headline grc-why-headline" id="grc-why-heading">
                <span className="grc-suite-headline-lead">{why.title}</span>
                <span className="grc-suite-headline-accent">{why.titleHighlight}</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export { GrcSuiteProductsSection, GrcSuiteOutcomesSection, GrcSuiteAiSection, GrcSuiteHowItWorksSection };
export { GrcSuiteWhyChooseSection } from "./GrcSuiteWhyChooseSection";
