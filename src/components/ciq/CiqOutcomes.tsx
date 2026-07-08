"use client";

import { motion } from "framer-motion";
import { ciqOutcomes } from "@/content/complianceIQ";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { CiqIcon } from "./icons";
import "./ciq.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITY_ROWS = [
  ciqOutcomes.cards.slice(0, 4),
  ciqOutcomes.cards.slice(4, 8),
  ciqOutcomes.cards.slice(8, 12),
] as const;

export function CiqOutcomes() {
  const { eyebrow, titleLead, titleHighlight, description, cards } = ciqOutcomes;

  return (
    <section className="aw-section ciq-outcomes-section" aria-labelledby="ciq-outcomes-heading">
      <div className="ciq-outcomes-section-bg" aria-hidden />
      <div className="ciq-outcomes-section-grid" aria-hidden />
      <div className="ciq-outcomes-orb ciq-outcomes-orb--1" aria-hidden />
      <div className="ciq-outcomes-orb ciq-outcomes-orb--2" aria-hidden />
      <div className="ciq-outcomes-section-lines" aria-hidden />

      <div className="aw-inner ciq-outcomes-inner">
        <div className="ciq-outcomes-header">
          <ScrollReveal duration={0.85} className="min-w-0">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="aw-h2 ciq-outcomes-title" id="ciq-outcomes-heading">
              {titleLead}
              <span className="text-ember">{titleHighlight}</span>
            </h2>
            <div className="ciq-outcomes-header-meta">
              <span className="ciq-outcomes-cap-pill">
                <span className="ciq-outcomes-cap-pill-dot" aria-hidden />
                {cards.length} capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={0.85} delay={0.08} className="min-w-0">
            <p className="ciq-outcomes-desc">{description}</p>
          </ScrollReveal>
        </div>

        <div className="ciq-outcomes-card-grid">
          {CAPABILITY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="ciq-outcomes-row">
              {row.map((card, colIndex) => (
                <motion.article
                  key={card.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: colIndex * 0.07, duration: 0.6, ease: EASE }}
                  className="ciq-outcomes-card group h-full"
                >
                    <span className="ciq-outcomes-card-bloom" aria-hidden />
                    <span className="ciq-outcomes-card-shine" aria-hidden />
                    <span className="ciq-outcomes-card-accent" aria-hidden />

                    <div className="ciq-outcomes-card-inner">
                      <span className="ciq-outcomes-card-icon" aria-hidden>
                        <span className="ciq-outcomes-card-icon-ring" aria-hidden />
                        <span className="ciq-outcomes-card-icon-glow" aria-hidden />
                        <CiqIcon name={card.icon} size={22} strokeWidth={1.65} />
                      </span>
                      <h3 className="ciq-outcomes-card-title">{card.name}</h3>
                      <p className="ciq-outcomes-card-desc">{card.desc}</p>
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
