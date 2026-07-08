"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { omniSolution } from "@/content/omniConnect";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import "@/components/bom-suite/bom-suite.css";
import "./omni.css";
export function OmniSolutionPositioning() {
  const { tag, title, titleHighlight, cards } = omniSolution;

  return (
    <section
      className="bom-intro-section omni-solution-section px-5 pt-[100px] pb-[100px] sm:px-[50px]"
      aria-labelledby="omni-solution-heading"
    >
      <div className="omni-solution-section-bg" aria-hidden />
      <div className="bom-section-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel className="!mb-1">{tag}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.08}>
          <h2
            className="bom-suite-headline bom-intro-headline omni-solution-headline"
            id="omni-solution-heading"
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
                  className="bom-intro-card bom-intro-card--plain omni-solution-plain-card"
                >
                  <div className="omni-solution-plain-head">
                    <span className="omni-solution-plain-badge">AI Automation</span>
                    <h3 className="bom-intro-card-title omni-solution-plain-title">{card.title}</h3>
                    {"lead" in card && card.lead ? (
                      <p className="omni-solution-plain-lead">{card.lead}</p>
                    ) : null}
                  </div>

                  {"bullets" in card && card.bullets ? (
                    <ul className="omni-solution-plain-list">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="omni-solution-plain-item">
                          <span className="omni-solution-plain-item-icon" aria-hidden>
                            <CircleCheck size={15} strokeWidth={2.25} />
                          </span>
                          <span className="omni-solution-plain-item-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {"closing" in card && card.closing ? (
                    <div className="omni-solution-plain-foot">
                      <p className="omni-solution-plain-closing">{card.closing}</p>
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
