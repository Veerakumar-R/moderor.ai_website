"use client";

import { motion } from "framer-motion";
import { raOutcomes } from "@/content/riskAssessment";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { RaIcon } from "./icons";
import "./ra.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITY_ROWS = [
  raOutcomes.cards.slice(0, 4),
  raOutcomes.cards.slice(4, 8),
  raOutcomes.cards.slice(8, 12),
] as const;

export function RaOutcomes() {
  const { eyebrow, titleLead, titleHighlight, description, cards } = raOutcomes;

  return (
    <section className="aw-section ra-outcomes-section" aria-labelledby="ra-outcomes-heading">
      <div className="ra-outcomes-section-bg" aria-hidden />
      <div className="ra-outcomes-section-grid" aria-hidden />
      <div className="ra-outcomes-orb ra-outcomes-orb--1" aria-hidden />
      <div className="ra-outcomes-orb ra-outcomes-orb--2" aria-hidden />
      <div className="ra-outcomes-section-lines" aria-hidden />

      <div className="aw-inner ra-outcomes-inner">
        <div className="ra-outcomes-header">
          <ScrollReveal duration={0.85} className="min-w-0">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="aw-h2 ra-outcomes-title" id="ra-outcomes-heading">
              {titleLead}
              <span className="text-ember">{titleHighlight}</span>
            </h2>
            <div className="ra-outcomes-header-meta">
              <span className="ra-outcomes-cap-pill">
                <span className="ra-outcomes-cap-pill-dot" aria-hidden />
                {cards.length} capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
            <p className="ra-outcomes-desc">{description}</p>
          </ScrollReveal>
        </div>

        <div className="ra-outcomes-card-grid">
          {CAPABILITY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="ra-outcomes-row">
              {row.map((card, colIndex) => (
                <motion.article
                  key={card.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: colIndex * 0.07, duration: 0.6, ease: EASE }}
                  className="ra-outcomes-card group h-full"
                >
                    <span className="ra-outcomes-card-bloom" aria-hidden />
                    <span className="ra-outcomes-card-shine" aria-hidden />
                    <span className="ra-outcomes-card-accent" aria-hidden />

                    <div className="ra-outcomes-card-inner">
                      <span className="ra-outcomes-card-icon" aria-hidden>
                        <span className="ra-outcomes-card-icon-ring" aria-hidden />
                        <span className="ra-outcomes-card-icon-glow" aria-hidden />
                        <RaIcon name={card.icon} size={22} strokeWidth={1.65} />
                      </span>
                      <h3 className="ra-outcomes-card-title">{card.name}</h3>
                      <p className="ra-outcomes-card-desc">{card.desc}</p>
                    </div>
                  </motion.article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
