"use client";

import Image from "next/image";
import { regulatorySolution } from "@/content/regulatoryCompliance";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import "@/components/bom-suite/bom-suite.css";
import "./regulatory.css";

export function RegulatorySolutionPositioning() {
  const { tag, title, titleHighlight, cards } = regulatorySolution;

  return (
    <section
      className="bom-intro-section px-5 pt-20 pb-20 sm:px-[50px] sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28"
      aria-labelledby="rc-solution-heading"
    >
      <div className="bom-section-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel>{tag}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.08}>
          <h2 className="bom-suite-headline bom-intro-headline" id="rc-solution-heading">
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
                <article key={card.title} className="bom-intro-card bom-intro-card--plain">
                  <h3 className="bom-intro-card-title">{card.title}</h3>
                  {"lead" in card && card.lead ? (
                    <p className="bom-intro-card-body">{card.lead}</p>
                  ) : null}
                  {"bullets" in card && card.bullets ? (
                    <div className="rc-intro-bullets-wrap">
                      <ul className="rc-intro-bullets">
                        {card.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
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
