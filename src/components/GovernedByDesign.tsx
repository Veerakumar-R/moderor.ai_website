"use client";

import { governedHero, governedPillars } from "@/content/site";
import { GovernedHeaderDeco } from "./GovernedHeaderDeco";
import { PillarVisual } from "./PillarVisual";
import { ScrollReveal } from "./ui/ScrollReveal";
import "./governed.css";

export function GovernedByDesign() {
  return (
    <section className="governed-section" id="governance">
      <div className="governed-bg" aria-hidden>
        <span className="governed-blob governed-blob--1" />
        <span className="governed-blob governed-blob--2" />
      </div>

      <div className="governed-inner">
        <ScrollReveal duration={0.85}>
          <div className="governed-header-wrap">
            <GovernedHeaderDeco />
            <header className="governed-header">
              <div className="section-label governed-label">
                <span className="eyebrow-dot" />
                Governed by Design
              </div>
              <h2 className="governed-title">
                Governed by Design. <span className="text-ember">Not Bolted On.</span>
              </h2>
              <p className="governed-intro">{governedHero.body}</p>
            </header>
          </div>
        </ScrollReveal>

        <div className="governed-grid">
          {governedPillars.map((pillar, index) => (
            <ScrollReveal
              key={pillar.num}
              delay={0.42 + index * 0.16}
              duration={1.05}
              className="h-full"
            >
              <article className="governed-card">
                <div className="governed-card-visual">
                  <div className="governed-card-stack">
                    <span className="governed-stack-layer governed-stack-layer--back" aria-hidden />
                    <span className="governed-stack-layer governed-stack-layer--mid" aria-hidden />
                    <div className="governed-card-inner">
                      <span className="governed-inner-glow" aria-hidden />
                      <PillarVisual type={pillar.visual} />
                    </div>
                  </div>
                </div>
                <div className="governed-card-body">
                  <h3 className="governed-card-title">{pillar.name}</h3>
                  <p className="governed-card-desc">{pillar.desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
