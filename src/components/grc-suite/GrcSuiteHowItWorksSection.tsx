"use client";

import type { ReactNode } from "react";
import { Bot, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react";
import { grcSuitePage } from "@/content/site";
import { PilotHeaderDeco } from "@/components/PilotHeaderDeco";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "@/components/pilot.css";
import "./grc-suite.css";

const { howItWorks } = grcSuitePage.ai;

const HOW_IT_WORKS_ICONS: LucideIcon[] = [Bot, UserCheck, ShieldCheck];

function HowItWorksIconRing({ children }: { children: ReactNode }) {
  return (
    <div className="grc-how-flow-icon-ring">
      <svg className="grc-how-flow-icon-ring-svg" viewBox="0 0 82 82" aria-hidden>
        <circle
          cx="41"
          cy="41"
          r="40.375"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </div>
  );
}

export function GrcSuiteHowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="pilot-section grc-how-it-works-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="grc-how-heading"
    >
      <div className="pilot-mesh" aria-hidden />
      <div className="pilot-grid-bg" aria-hidden />

      <div className="grc-section-inner relative z-[1]">
        <ScrollReveal duration={0.85}>
          <div className="pilot-header-wrap">
            <PilotHeaderDeco />
            <header className="pilot-head-center">
              <SectionLabel className="pilot-section-label">{howItWorks.eyebrow}</SectionLabel>
              <h2 className="pilot-headline" id="grc-how-heading">
                {howItWorks.headline}{" "}
                <span className="pilot-headline-accent">{howItWorks.headlineAccent1}</span>{" "}
                {howItWorks.headlineConnector}{" "}
                <span className="pilot-headline-accent">{howItWorks.headlineAccent2}</span>.
              </h2>
            </header>
          </div>
        </ScrollReveal>

        <ScrollReveal duration={0.9} delay={0.12}>
          <div className="grc-how-panel">
            <div className="grc-how-flow">
              <svg
                className="grc-how-flow-connector"
                viewBox="0 0 720 56"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <path
                  d="M 24 28 C 120 6, 200 50, 300 28 S 480 6, 576 28 S 656 50, 696 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeDasharray="3 8"
                  strokeLinecap="round"
                />
              </svg>

              <div className="grc-how-flow-grid">
                {howItWorks.steps.map((step, index) => {
                  const Icon = HOW_IT_WORKS_ICONS[index] ?? ShieldCheck;

                  return (
                    <article key={step.label} className="grc-how-flow-step">
                      <HowItWorksIconRing>
                        <div className="grc-product-icon grc-how-flow-icon-core" aria-hidden>
                          <span className="grc-product-icon-glow" aria-hidden />
                          <Icon size={28} strokeWidth={1.75} className="grc-product-icon-svg" />
                        </div>
                      </HowItWorksIconRing>
                      <h3 className="grc-how-flow-title">{step.label}</h3>
                      <p className="grc-how-flow-desc">{step.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <blockquote className="grc-ai-closing">
              <p className="grc-ai-closing-lead">{howItWorks.closingLead}</p>
              <p className="grc-ai-closing-accent">{howItWorks.closingHighlight}</p>
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
