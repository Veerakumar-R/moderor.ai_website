"use client";

import { ScanSearch, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react";
import { platformPage } from "@/content/site";
import { PilotHeaderDeco } from "@/components/PilotHeaderDeco";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import "@/components/pilot.css";
import "@/components/grc-suite/grc-suite.css";
import "./platform.css";

const { howItWorks } = platformPage;

const HOW_IT_WORKS_ICONS: LucideIcon[] = [ScanSearch, UserCheck, ShieldCheck];

export function PlatformHowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="pilot-section grc-how-it-works-section relative px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="platform-how-heading"
    >
      <div className="pilot-mesh" aria-hidden />
      <div className="pilot-grid-bg" aria-hidden />

      <div className="grc-section-inner relative z-[1]">
        <ScrollReveal duration={0.85}>
          <div className="pilot-header-wrap">
            <PilotHeaderDeco />
            <header className="pilot-head-center">
              <SectionLabel className="pilot-section-label">{howItWorks.eyebrow}</SectionLabel>
              <h2 className="pilot-headline" id="platform-how-heading">
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
            <div className="platform-pipe">
              <span className="platform-pipe-rail" aria-hidden />

              {howItWorks.steps.map((step, index) => {
                const Icon = HOW_IT_WORKS_ICONS[index] ?? ShieldCheck;

                return (
                  <article key={step.label} className="platform-pipe-stage">
                    <div className="platform-pipe-node" aria-hidden>
                      <Icon size={26} strokeWidth={1.75} />
                      <span className="platform-pipe-node-index">{index + 1}</span>
                    </div>
                    <div className="platform-pipe-card">
                      <span className="platform-pipe-step">
                        Step {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="platform-pipe-title">{step.label}</h3>
                      <p className="platform-pipe-desc">{step.description}</p>
                    </div>
                  </article>
                );
              })}
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
