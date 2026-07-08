"use client";

import { motion } from "framer-motion";
import { omniOutcomes } from "@/content/omniConnect";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { OmniIcon } from "./icons";
import "./omni.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITY_ROWS = [
  omniOutcomes.cards.slice(0, 4),
  omniOutcomes.cards.slice(4, 8),
  omniOutcomes.cards.slice(8, 12),
] as const;

export function OmniOutcomes() {
  const { eyebrow, titleLead, titleHighlight, description, cards } = omniOutcomes;

  return (
    <section className="aw-section omni-outcomes-section" aria-labelledby="omni-outcomes-heading">
      <div className="omni-outcomes-section-bg" aria-hidden />
      <div className="omni-outcomes-section-grid" aria-hidden />
      <div className="omni-outcomes-orb omni-outcomes-orb--1" aria-hidden />
      <div className="omni-outcomes-orb omni-outcomes-orb--2" aria-hidden />
      <div className="omni-outcomes-section-lines" aria-hidden />

      <div className="aw-inner omni-outcomes-inner">
        <div className="omni-outcomes-header">
          <ScrollReveal duration={0.85} className="min-w-0">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="aw-h2 omni-outcomes-title" id="omni-outcomes-heading">
              {titleLead}
              <span className="text-ember">{titleHighlight}</span>
            </h2>
            <div className="omni-outcomes-header-meta">
              <span className="omni-outcomes-cap-pill">
                <span className="omni-outcomes-cap-pill-dot" aria-hidden />
                {cards.length} capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
            <p className="omni-outcomes-desc">{description}</p>
          </ScrollReveal>
        </div>

        <div className="omni-outcomes-card-grid">
          {CAPABILITY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="omni-outcomes-row">
              {row.map((card, colIndex) => (
                <motion.article
                  key={card.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: colIndex * 0.07, duration: 0.6, ease: EASE }}
                  className="omni-outcomes-card group h-full"
                >
                    <span className="omni-outcomes-card-bloom" aria-hidden />
                    <span className="omni-outcomes-card-shine" aria-hidden />
                    <span className="omni-outcomes-card-accent" aria-hidden />

                    <div className="omni-outcomes-card-inner">
                      <span className="omni-outcomes-card-icon" aria-hidden>
                        <span className="omni-outcomes-card-icon-ring" aria-hidden />
                        <span className="omni-outcomes-card-icon-glow" aria-hidden />
                        <OmniIcon name={card.icon} size={22} strokeWidth={1.65} />
                      </span>
                      <h3 className="omni-outcomes-card-title">{card.name}</h3>
                      <p className="omni-outcomes-card-desc">{card.desc}</p>
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
