"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { ormSolution } from "@/content/operationalRiskManagement";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import "@/components/bom-suite/bom-suite.css";
import "./orm.css";
export function OrmSolutionPositioning() {
  const { tag, title, titleHighlight, cards } = ormSolution;

  return (
    <section
      className="bom-intro-section orm-solution-section px-5 pt-[100px] pb-[100px] sm:px-[50px]"
      aria-labelledby="orm-solution-heading"
    >
      <div className="orm-solution-section-bg" aria-hidden />
      <div className="bom-section-inner">
        <ScrollReveal duration={0.85}>
          <SectionLabel className="!mb-1">{tag}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal duration={0.85} delay={0.08}>
          <h2
            className="bom-suite-headline bom-intro-headline orm-solution-headline"
            id="orm-solution-heading"
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
                  className="bom-intro-card bom-intro-card--plain orm-solution-plain-card"
                >
                  <div className="orm-solution-plain-head">
                    <span className="orm-solution-plain-badge">AI Automation</span>
                    <h3 className="bom-intro-card-title orm-solution-plain-title">{card.title}</h3>
                    {"lead" in card && card.lead ? (
                      <p className="orm-solution-plain-lead">{card.lead}</p>
                    ) : null}
                  </div>

                  {"bullets" in card && card.bullets ? (
                    <ul className="orm-solution-plain-list">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="orm-solution-plain-item">
                          <span className="orm-solution-plain-item-icon" aria-hidden>
                            <CircleCheck size={15} strokeWidth={2.25} />
                          </span>
                          <span className="orm-solution-plain-item-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {"closing" in card && card.closing ? (
                    <div className="orm-solution-plain-foot">
                      <p className="orm-solution-plain-closing">{card.closing}</p>
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
