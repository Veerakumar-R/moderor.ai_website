"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { ciqSolution } from "@/content/complianceIQ";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import "@/components/bom-suite/bom-suite.css";
import "./ciq.css";
export function CiqSolutionPositioning() {
  const { tag, title, titleHighlight, cards } = ciqSolution;

  return (
    <section
      className="bom-intro-section ciq-solution-section px-5 pt-[100px] pb-[100px] sm:px-[50px]"
      aria-labelledby="ciq-solution-heading"
    >
      <div className="ciq-solution-section-bg" aria-hidden />
      <div className="bom-section-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel className="!mb-1">{tag}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.08}>
          <h2
            className="bom-suite-headline bom-intro-headline ciq-solution-headline"
            id="ciq-solution-heading"
          >
            <span className="bom-suite-headline-lead">{title}</span>
            <span className="bom-suite-headline-accent">{titleHighlight}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.16}>
          <div className="bom-intro-cards">
            {cards.map((card) =>
              card.variant === "split" ? (
                <article key={card.title} className="bom-intro-card bom-intro-card--split">
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
                  className="bom-intro-card bom-intro-card--plain ciq-solution-plain-card"
                >
                  <div className="ciq-solution-plain-head">
                    <span className="ciq-solution-plain-badge">AI Automation</span>
                    <h3 className="bom-intro-card-title ciq-solution-plain-title">{card.title}</h3>
                    {"lead" in card && card.lead ? (
                      <p className="ciq-solution-plain-lead">{card.lead}</p>
                    ) : null}
                  </div>

                  {"bullets" in card && card.bullets ? (
                    <ul className="ciq-solution-plain-list">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="ciq-solution-plain-item">
                          <span className="ciq-solution-plain-item-icon" aria-hidden>
                            <CircleCheck size={15} strokeWidth={2.25} />
                          </span>
                          <span className="ciq-solution-plain-item-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {"closing" in card && card.closing ? (
                    <div className="ciq-solution-plain-foot">
                      <p className="ciq-solution-plain-closing">{card.closing}</p>
                    </div>
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
