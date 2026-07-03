"use client";

import { bomSuitePage } from "@/content/bomSuite";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./bom-suite.css";

const { personas } = bomSuitePage;

const BENTO_SLOTS = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

export function BomSuitePersonasSection() {
  return (
    <section
      id="personas"
      className="bom-personas-section relative border-b border-border bg-white px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="bom-personas-heading"
    >
      <div className="bom-section-inner">
        <div className="bom-personas-bento">
          <ScrollReveal duration={0.85} className="bom-personas-bento-hero-wrap">
            <article className="bom-personas-bento-hero">
              <div className="bom-personas-bento-hero-bg" aria-hidden>
                <div className="hero-warm-base" />
                <div className="hero-orange-noise" />
                <div className="hero-grain" />
                <div className="hero-grain-fine" />
              </div>
              <div className="bom-personas-bento-hero-content">
                <p className="bom-personas-bento-eyebrow">
                  {personas.title}{" "}
                  <span className="bom-personas-bento-eyebrow-accent">{personas.titleHighlight}</span>
                </p>
                <h2 className="bom-personas-bento-title" id="bom-personas-heading">
                  {personas.label}
                </h2>
                <p className="bom-personas-bento-desc">{personas.description}</p>
              </div>
            </article>
          </ScrollReveal>

          {personas.items.map((item, index) => {
            const slot = BENTO_SLOTS[index];

            return (
              <ScrollReveal
                key={item.name}
                duration={0.85}
                delay={0.06 + index * 0.05}
                className={`bom-personas-bento-card-wrap bom-personas-bento-card-wrap--${slot}`}
              >
                <article className={`bom-persona-bento-card bom-persona-bento-card--${slot}`}>
                  {slot !== "3" && slot !== "6" && slot !== "8" ? (
                    <span className={`bom-persona-bento-pattern bom-persona-bento-pattern--${slot}`} aria-hidden />
                  ) : null}
                  <div className="bom-persona-bento-card-content">
                    <h3 className="bom-persona-title">{item.name}</h3>
                    <p className="bom-persona-desc">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
